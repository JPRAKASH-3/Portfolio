# Free Hosting Guide for This Portfolio

This portfolio is a static website. It does not need a backend, database, or paid server.

## Files to Upload

Upload everything inside this folder:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `HOSTING_GUIDE.md` is optional

Keep the `assets` folder in the same place as `index.html`, because the website uses images and the resume PDF from that folder.

## Option 1: GitHub Pages

Best for a free developer portfolio connected to your GitHub account.

1. Go to GitHub and create a new repository.
2. Name it something like `jayaprakash-portfolio`.
3. Upload all files from this portfolio folder into the repository root.
4. Commit the files.
5. Open the repository `Settings`.
6. Go to `Pages`.
7. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
8. Click `Save`.
9. Wait 1-3 minutes.
10. GitHub will give you a free live URL like:
    `https://JPRAKASH-3.github.io/jayaprakash-portfolio/`

## Option 2: Netlify

Best if you want the easiest drag-and-drop deployment.

1. Go to `https://www.netlify.com/`.
2. Create a free account.
3. Open `Sites`.
4. Drag and drop this portfolio folder into Netlify.
5. Netlify will deploy it and give you a free URL.
6. You can rename the free Netlify subdomain from site settings.

## Option 3: Vercel

Best if you later convert this portfolio into a Next.js app.

1. Go to `https://vercel.com/`.
2. Create a free account.
3. Import your GitHub repository.
4. Keep the framework preset as `Other`.
5. Deploy.
6. Vercel will give you a free live URL.

## Recommended Free Hosting Choice

Use GitHub Pages if you want a simple portfolio link for resumes and job applications.

Use Netlify if you want the fastest manual upload process.

Use Vercel if you plan to rebuild this portfolio with Next.js later.

## After Deployment

Check these items after your site is live:

1. Click every navigation link.
2. Click `Download Resume`.
3. Click `GitHub` and `LinkedIn`.
4. Test project filters.
5. Open each `Quick View` project modal.
6. Submit the contact form and confirm your email app opens.
7. Test on mobile view.

## Free Performance Tips

- Do not add heavy animation libraries.
- Compress new images before adding them.
- Keep the resume PDF inside `assets/`.
- Use GitHub Pages, Netlify, or Vercel CDN hosting for fast global loading.
- Avoid external scripts unless they are really needed.
