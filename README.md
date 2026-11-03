# Solomon Tomy — Portfolio

React portfolio for Java full-stack development, ERP ownership, and marketplace integrations.

## Local development
```sh
npm ci
npm start
```

## Production
```sh
npm run build
```
Deploy the generated `build/` directory to a static host. For Netlify, use `npm run build` and publish `build`. For a subdirectory deployment, set `PUBLIC_URL` to that path before building.

## Content
- `src/App.js`: experience, skills, and expandable commercial case studies.
- `src/index.css`: responsive styling and keyboard focus states.
- `public/Solomon_Tomy_CV.pdf`: downloadable CV; replace when experience changes.

Project outcomes reflect the CV. Diagrams are simplified workflow explanations, not production architecture diagrams. Commercial source code and customer data are not included. React is used for this portfolio; it is not presented as evidence of commercial React experience.

The legacy files under `src/components/` are not imported by the current entry point. The active page is `src/App.js`.
