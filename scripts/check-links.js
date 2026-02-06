import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to extract links from a string
const extractLinks = (text) => {
  const urlRegex = /https?:\/\/[^\s"',]+/g;
  return text.match(urlRegex) || [];
};

// Recursive function to find file paths
const getFiles = (dir) => {
  const subdirs = fs.readdirSync(dir);
  const files = subdirs.map((subdir) => {
    const res = path.resolve(dir, subdir);
    return fs.statSync(res).isDirectory() ? getFiles(res) : res;
  });
  return files.reduce((a, f) => a.concat(f), []);
};

async function checkLinks() {
  console.log('🔍 Starting Link Validation...');
  
  const srcDir = path.resolve(__dirname, '../src');
  const files = getFiles(srcDir).filter(f => f.endsWith('.js') || f.endsWith('.jsx'));
  
  let linkCount = 0;
  let brokenCount = 0;
  const linksToCheck = new Set();

  // 1. Extract links
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const links = extractLinks(content);
    links.forEach(link => linksToCheck.add(link));
  });

  console.log(`Found ${linksToCheck.size} unique links to check.`);

  // 2. Check links
  for (const link of linksToCheck) {
    // Skip localhost or dummy links if necessary
    if (link.includes('localhost') || link === '#') continue;

    try {
      const response = await fetch(link, { method: 'HEAD' });
      if (!response.ok) {
        // Retry with GET as some servers block HEAD
         const getResponse = await fetch(link, { method: 'GET' });
         if (!getResponse.ok) {
             console.error(`❌ BROKEN: ${link} (Status: ${getResponse.status})`);
             brokenCount++;
         } else {
             console.log(`✅ OK: ${link}`);
         }
      } else {
        console.log(`✅ OK: ${link}`);
      }
    } catch (error) {
       console.error(`❌ ERROR: ${link} (${error.message})`);
       brokenCount++;
    }
  }

  console.log('---------------------------------------------------');
  console.log(`🏁 Validation Complete. Broken links: ${brokenCount}`);
  
  if (brokenCount > 0) process.exit(1);
}

checkLinks();
