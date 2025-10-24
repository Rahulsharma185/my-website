import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FeaturedSoftware } from './components/FeaturedSoftware';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FeaturedSoftware />
      <Footer />
    </div>
  );
}
