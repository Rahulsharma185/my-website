import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/4f8f8ff4fd66b4cac27c2b90a36a4dc8a9224aa1.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen to scroll events
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <img src={logo} alt="The Software Studio" className="h-12 w-12" />
            </div>
            <span className="text-xl font-['Playfair_Display'] tracking-tight" style={{ color: '#0A1F44' }}>
              The Software Studio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {['Home', 'Features', 'Pricing', 'Testimonials'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-[#111827] hover:text-[#0A1F44] transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-[#111827] hover:text-[#0A1F44] hover:bg-[#F5F5F5]"
              >
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-[#111827] hover:text-[#0A1F44] hover:bg-[#F5F5F5]"
              >
                <User className="w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 107, 0, 0.3)' }} 
              whileTap={{ scale: 0.98 }}
              className="hidden md:block"
            >
              <Button 
                className="text-white font-semibold px-8 tracking-wider shadow-lg"
                style={{ 
                  background: '#FF6B00',
                  letterSpacing: '1px'
                }}
              >
                Get Started
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
            >
              <Button variant="ghost" size="icon" className="text-[#111827]">
                <Menu className="w-6 h-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
