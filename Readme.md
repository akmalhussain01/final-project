# Wanderlust Atlas — Travel Recommendation Web Application

A final-project travel recommendation site with a Home, About Us, and Contact Us page, a shared navigation bar with search, and destination recommendations for beaches, temples, and countries.

## Files

- `index.html` — Home page: hero intro + beach/temple/country recommendation sections (2 images each)
- `about.html` — About Us page: story, mission, values, team
- `contact.html` — Contact Us page: validated email contact form
- `style.css` — shared styling for all pages
- `script.js` — mobile nav toggle, live destination search/filter, contact form validation

## Run it locally

No build step needed — it's plain HTML/CSS/JS. Just open `index.html` in a browser, or serve it locally:

```bash
npx serve .
```

## Deploy to GitHub Pages

1. Create a new **public** GitHub repository and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Final project: travel recommendation web app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then **Save**.
5. Your live site will be published at:
   ```
   https://<your-username>.github.io/<your-repo>/
   ```
   (this can take a minute or two the first time).

## Notes

- Destination photos currently use placeholder images (Lorem Picsum) — swap the `img src` values for your own photos before final submission if you'd like real destination shots.
- The contact form validates client-side and shows a success/error message; it isn't wired to a backend or email service.
- The search bar filters the Home page's beach/temple/country cards live as you type. It appears on every page for a consistent nav bar, but only has cards to filter on `index.html`.