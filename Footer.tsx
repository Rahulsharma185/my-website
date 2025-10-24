import { motion } from 'motion/react';
import { Instagram, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import logo from 'figma:asset/4f8f8ff4fd66b4cac27c2b90a36a4dc8a9224aa1.png';

export function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-4xl mb-4 font-['Playfair_Display']">
              Stay Updated with Our
              <span className="gold-shimmer"> Latest Offers</span>
            </h3>
            <p className="text-white/70 mb-8 text-lg">
              Subscribe to our newsletter and never miss exclusive deals on premium subscriptions
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 px-6 py-6 rounded-xl focus:border-[#FFD700] focus:ring-[#FFD700]"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="text-[#0A1F44] font-semibold px-8 py-6 rounded-xl shadow-lg tracking-wider"
                  style={{ 
                    background: '#FFD700',
                    letterSpacing: '1px'
                  }}
                >
                  Subscribe
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="The Software Studio" className="h-12 w-12" />
              <span className="text-xl font-['Playfair_Display']">
                The Software Studio
              </span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Your trusted marketplace for premium software subscriptions at unbeatable prices. 
              We deliver quality, authenticity, and exceptional value.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: MessageCircle, href: '#', label: 'WhatsApp', color: '#25D366' },
                { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
                { icon: Mail, href: '#', label: 'Email', color: '#FFD700' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#FFD700]/50"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-[#FFD700]">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Features', 'Pricing', 'Testimonials', 'Support'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-[#FFD700]">Categories</h4>
            <ul className="space-y-3">
              {['Streaming', 'AI Tools', 'Pro Software', 'Creative Apps', 'Productivity'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/60 text-sm">
            © 2025 The Software Studio. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-white/50"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Secure Payments
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
            Instant Delivery
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            24/7 Support
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            100% Genuine
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
