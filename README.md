# Tam Hoang Tran Portfolio

Premium interactive portfolio for Tam Hoang Tran, built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, GSAP-ready structure, Lenis smooth scroll, Three.js, React Three Fiber and Drei.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Structure

- `src/data/` stores personal profile, contact, experience, projects and skills content.
- `src/components/sections/` contains the page sections and reusable project detail template.
- `src/components/three/` contains the command-center WebGL experience and dynamic loader.
- `src/app/projects/[slug]/` provides static project case-study routes.
- `public/resume/` is prepared for the approved public resume PDF.

## Content replacement

The supplied CV is included at `public/resume/cv_HoangTam_Tran.pdf`. LinkedIn is connected in `src/data/profile.ts`.

To complete verified content:

1. Update `public/resume/cv_HoangTam_Tran.pdf` when a newer approved CV is available.
2. Replace remaining internal `TODO_CONTENT` notes with verified project details.
3. Replace or add project media in `public/images/` as approved assets become available.

## Performance and accessibility decisions

- The 3D scene is dynamically imported and rendered only on the client.
- Geometry is procedural and lightweight, with no heavy textures or external models.
- Reduced-motion users skip the loader and receive CSS/static fallbacks.
- Essential content is rendered as semantic HTML outside WebGL.
- Navigation, project links and contact actions are keyboard accessible with visible focus states.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the production domain before deployment so canonical metadata, robots and sitemap URLs are correct.
