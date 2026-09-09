# Privance Ulirki — Portfolio

A data analyst / data science portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Before you deploy

1. **Add your photo**: drop a photo at `public/profile.jpg` (portrait orientation works best — the hero frame is 4:5). Until you add one, it falls back to your initials.
2. **Add your CV**: drop a PDF at `public/Privance_Ulirki_CV.pdf` — the "Download CV" buttons already link to that path.
3. **Add your LinkedIn URL**: open `src/data/content.js` and replace the `linkedin: "#"` placeholder.
4. **Wire up the contact form**: the form validates input client-side but does not currently send anywhere. Connect it to a service like Formspree, EmailJS, or your own API endpoint inside `src/components/Contact.jsx` (`handleSubmit`).
5. **Add more projects**: append new entries to the `projects` array in `src/data/content.js` — the layout updates automatically.

## Structure

```
src/
  data/content.js       # all site copy and project/skill/experience data — edit this first
  components/           # one component per section
  App.jsx                # composes the page
```

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.
