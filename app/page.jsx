import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ShopPreview from '../components/ShopPreview';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ShopPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
