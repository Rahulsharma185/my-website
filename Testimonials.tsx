import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Content Creator',
    image: '👩‍💼',
    rating: 5,
    text: 'Absolutely amazing service! Got my Canva Pro subscription at half the price. The delivery was instant and everything works perfectly. Highly recommended!',
  },
  {
    name: 'Rahul Mehta',
    role: 'Software Developer',
    image: '👨‍💻',
    rating: 5,
    text: 'Best place to get premium subscriptions. I purchased ChatGPT Plus and Spotify Premium. Both are genuine and working flawlessly. Great customer support!',
  },
  {
    name: 'Anjali Gupta',
    role: 'Digital Marketer',
    image: '👩‍🎨',
    rating: 5,
    text: 'Trustworthy and reliable! Been using their services for 6 months now. The pricing is unbeatable and the quality is always top-notch. Five stars!',
  },
];

const clientLogos = [
  { name: 'Netflix', emoji: '🎬' },
  { name: 'Spotify', emoji: '🎵' },
  { name: 'Disney+', emoji: '⭐' },
  { name: 'Canva', emoji: '🎨' },
  { name: 'ChatGPT', emoji: '💬' },
  { name: 'Figma', emoji: '✨' },
];

export function Testimonials() {
  return (
    <section 
      id="testimonials"
      className="py-28 bg-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-6 py-2 rounded-full border shadow-sm" style={{ 
              borderColor: '#FFD700',
              background: '#FFD70010'
            }}>
              <span className="text-sm font-semibold tracking-wider" style={{ color: '#0A1F44' }}>
                TESTIMONIALS
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl mb-6 font-['Playfair_Display']" style={{ color: '#0A1F44' }}>
            Loved by Our
            <span className="block mt-2 gold-shimmer">Customers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us for their premium subscriptions
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#F5F5F5] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16" style={{ color: '#FFD700' }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-[#FFD700]" 
                    style={{ color: '#FFD700' }}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-md"
                  style={{ background: '#0A1F44' }}
                >
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold" style={{ color: '#111827' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm font-semibold tracking-wider mb-8 text-gray-500">
            TRUSTED PREMIUM BRANDS
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg hover:shadow-xl transition-shadow"
                  style={{ background: 'linear-gradient(135deg, #F5F5F5, white)' }}
                >
                  {logo.emoji}
                </div>
                <span className="text-sm text-gray-600 font-medium">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
