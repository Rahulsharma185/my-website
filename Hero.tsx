import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section 
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0A1F44] via-[#0D2850] to-[#0A1F44] pt-20"
    >
      {/* Parallax background pattern */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 215, 0, 0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }} />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFD700] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF6B00] opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              <CheckCircle className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm tracking-wider text-white/90">PREMIUM SOFTWARE MARKETPLACE</span>
            </motion.div>

            {/* Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl mb-6 font-['Playfair_Display'] leading-tight"
            >
              Premium Subscriptions
              <span className="block mt-2 gold-shimmer">
                Exceptional Value
              </span>
            </motion.h1>

            {/* Subtle Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl mb-10 text-white/80 leading-relaxed max-w-2xl"
            >
              Unlock premium entertainment, productivity tools, and creative software at unbeatable prices. Trusted by hundreds of satisfied customers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 0, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="text-white font-semibold px-10 py-7 text-lg shadow-2xl tracking-wider"
                  style={{ 
                    background: '#FF6B00',
                    letterSpacing: '1.5px'
                  }}
                >
                  Explore Plans
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 px-10 py-7 text-lg font-semibold tracking-wider"
                  style={{ letterSpacing: '1px' }}
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex flex-wrap items-center gap-8 text-sm text-white/70"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
                <span>500+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
                <span>100% Genuine</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
                <span>Instant Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/20 to-[#FF6B00]/20 rounded-3xl blur-3xl" />
              
              {/* Mockup Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642413598020-7cbd6c54b4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMG1vY2t1cHxlbnwxfHx8fDE3NjEyODg2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Software Dashboard Mockup"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating accent cards */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#FFD700] flex items-center justify-center text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827]">Verified</div>
                    <div className="text-xs text-gray-600">100% Genuine</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-[#0A1F44] rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FFD700] flex items-center justify-center text-[#0A1F44] text-2xl">
                    ⚡
                  </div>
                  <div>
                    <div className="font-semibold text-white">Fast</div>
                    <div className="text-xs text-gray-400">Instant Access</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F5] to-transparent" />
    </section>
  );
}
