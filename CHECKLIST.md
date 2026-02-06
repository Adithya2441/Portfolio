# Hardening Checklist

## Priority Fixes
- [ ] **LinkedIn Link**: Fix to correct profile or use `https://www.linkedin.com/in/adithya-sudhindra/` (Confirm with user).
- [ ] **External Links**: Validate all links have `rel="noopener noreferrer"` and open in new tab.
- [ ] **Link Validation**: Run `scripts/check-links.js` and report broken links.

## Content (Work Experience)
- [ ] **Source of Truth**: Use ONLY the 4 provided resumes.
- [ ] **Structure**: Role | Company | Dates.
- [ ] **Bullets**: 3-6 per role, STAR method, Action Verbs, Metrics.
- [ ] **Tone**: Professional, recruiter-friendly.

## UI/UX & Visual Polish
- [ ] **Theme**: Dark theme, improved contrast/spacing.
- [ ] **Typography**: Google Fonts (Inter, Space Grotesk).
- [ ] **Experience UI**: Timeline/Card-grid with inline tech badges.
- [ ] **Projects UI**: Mini case studies (Problem -> solution -> impact).
- [ ] **Project Visibility**: Highlight top 3-5, collapse others.
- [ ] **Resume Button**: Prominent, accessible "Download Resume" button.

## Accessibility & SEO
- [ ] **A11y**: Meaningful alt text, semantic headings, focus outlines.
- [ ] **Meta Tags**: Title, Description, Open Graph, Twitter Cards.
- [ ] **Social Image**: Add `og:image` (1200x630).
- [ ] **Schema**: JSON-LD for Person/Professional.

## Performance & Deployment
- [ ] **Vite Config**: Ensure `base: "/Portfolio/"`.
- [ ] **Deployment**: `npm run deploy` script working.
- [ ] **Asset Paths**: No 404s for assets.

## Dev Hygiene
- [ ] **Link Checker**: `scripts/check-links.js` created and documented.
- [ ] **Clean Code**: Components refactored, comments where needed.
