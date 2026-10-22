# Jatin Kushwah — Portfolio

A cinematic, fully static Next.js portfolio for Jatin Kushwah: Data Analyst and aspiring software/backend developer.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for static hosting

```bash
npm run build
```

The production site is generated in `out/`.

## Deploy to Netlify

1. Push this folder to a new GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the repository. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `out/`
4. Click **Deploy**.

Alternative: run `npm run build`, then drag the generated `out/` folder into Netlify’s **Deploys → deploy manually** area.

## Add real assets later

- Profile photo: add `public/images/profile.jpg`, then set `profileImage` in `data/profile.ts`.
- Resume: add `public/resume.pdf`, then set `hasResume: true` in `data/profile.ts`.
- Certificate: add the real file, then set `asset` in `data/hackathons.ts`.

All content is editable in the `data/` folder.
