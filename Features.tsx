import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Zap, HeadphonesIcon, Award, Lock } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Instant Delivery',
    description: 'Get immediate access to your premium subscriptions. No waiting, no hassle.',
    color: '#FF6B00',
  },
  {
    icon: Shield,
    title: '100% Genuine',
    description: 'All products are verified and authentic. Quality guaranteed or your money back.',
    color: '#FFD700',
  },
  {
    icon: Award,
    title: 'Best Prices',
    description: 'Market-leading prices that offer exceptional value for premium subscriptions.',
    color: '#0A1F44',
  },
  {
    icon: Lock,
    title: 'Secure Transactions',
    description: 'Your data is protected with enterprise-grade security and encryption.',
    color: '#FF6B00',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to assist you whenever you need help.',
    color: '#FFD700',
  },
];

export function Features() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);

  return (
    <section 
      id="features"
      ref={ref}
      className="py-28 bg-[#F5F5F5] relative overflow-hidden"
    >
      {/* Parallax decorative elements */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 right-10 w-96 h-96 bg-[#FFD700] opacity-5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ['-50px', '150px']) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#0A1F44] opacity-5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-6 py-2 rounded-full bg-white border border-[#FFD700]/30 shadow-sm">
              <span className="text-sm font-semibold tracking-wider" style={{ color: '#FF6B00' }}>
                WHY CHOOSE US
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl mb-6 font-['Playfair_Display']" style={{ color: '#0A1F44' }}>
            Premium Excellence
            <span className="block mt-2 gold-shimmer">Guaranteed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled service quality with our curated selection of premium software subscriptions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Hover gradient border */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}15, transparent)`,
                  filter: 'blur(10px)',
                }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-6"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                  style={{ background: `${feature.color}15` }}
                >
                  <feature.icon 
                    className="w-8 h-8" 
                    style={{ color: feature.color }}
                    strokeWidth={2}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <h3 
                className="text-2xl mb-4 font-['Playfair_Display'] font-semibold"
                style={{ color: '#111827' }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 opacity-5 rounded-bl-full"
                style={{ background: feature.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
