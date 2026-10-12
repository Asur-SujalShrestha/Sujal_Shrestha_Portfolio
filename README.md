# Sujal Shrestha - Portfolio

React + Vite + Tailwind CSS + Framer Motion + React Icons.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Add your project links
Open `src/data/portfolio.js`, find the `projects` array and fill in `github` and `live` for each project.
Buttons appear automatically once a link is set. Add your LinkedIn URL in `profile.linkedin` the same way.

## Deploy to GitHub Pages
```bash
npm run deploy     # builds and publishes /dist to the gh-pages branch
```

## Structure
```
public/                 CV PDF
src/data/portfolio.js   all content (edit this)
src/components/         Navbar, Hero, ArchitectureDiagram, Ridge, Marquee,
                        About, Experience, Skills, Projects, Education, Contact
```
