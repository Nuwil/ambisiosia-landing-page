import '@fontsource-variable/inter';
import '@fontsource/instrument-serif';
import '@fontsource/instrument-serif/400-italic.css';
import './globals.css';
import { site } from '../lib/site';

export const metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: 'Browse gowns, suits, costumes and traditional wear, pick your dates and send a booking request. Rent by the day or buy.',
};
export const viewport = { themeColor: '#f5f2eb', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
