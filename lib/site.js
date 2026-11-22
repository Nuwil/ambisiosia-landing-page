// Demo/app deployment the Login and catalog buttons point to.
const APP = (
    process.env.NEXT_PUBLIC_APP_URL ? process.env.NEXT_PUBLIC_APP_URL :
    'https://ambisiosa-gown-rental-and-booking-m.vercel.app/login'
).replace(/\/$/, '');

// Single place to edit copy, links and contact details. Anything marked "placeholder" must be replaced before launch.
export const site = {
    name: 'Ambisiosa',
    tagline: 'Gown, suit and traditional wear rental',
    // The app is a client-routed SPA without a server fallback for deep links.
    loginHref: APP,
    // Where "View Full Catalog" goes. The catalog lives inside the signed-in app, so this points at login by default.
    catalogHref: APP,
    nav: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#shop-preview', label: 'Shop Preview' },
        { href: '#contact', label: 'Contact' },
    ],
    contact: {
        email: 'acescomputer98@gmail.com', // placeholder
        phone: '+63 915 593 1414', // placeholder
        address: 'Maharlika Livelihood Complex, Baguio City', // placeholder
        hours: 'Mon to Sat, 10:00 to 18:00', // placeholder
    },
};