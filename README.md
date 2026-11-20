# Ambisiosa landing page

Next.js (App Router) + Tailwind CSS v4. Sharp-edged, no emojis, fonts self-hosted via Fontsource (no external requests).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## What to edit
- `lib/site.js`: nav links, login and catalog URLs, **contact details (placeholders)**.
- `lib/products.js`: the 5 featured products (**sample data**). Add `image: '/products/file.jpg'` (file in `public/`) to replace the tonal placeholder.
- `app/login/page.jsx`: placeholder so `/login` does not 404. Replace it with your sign-in, or point `loginHref` at your app.
- `app/api/inquiry/route.js`: validates the contact form. Set `INQUIRY_WEBHOOK_URL` (see `.env.example`) to forward messages. In production without it the form reports that messages cannot be received instead of silently dropping them.
