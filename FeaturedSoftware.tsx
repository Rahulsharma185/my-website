import { motion } from 'motion/react';
import { PricingCard } from './PricingCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const streamingServices = [
  {
    name: 'Disney+ Hotstar',
    description: 'Super Plan – 1080p, 2 Devices',
    icon: '⭐',
    gradient: '',
    popular: true,
    plans: [
      { duration: '1 Month', price: '₹60' },
      { duration: '3 Months', price: '₹120' },
      { duration: '6 Months', price: '₹299' },
      { duration: '12 Months', price: '₹399' },
    ],
  },
  {
    name: 'SonyLIV',
    description: '4K UHD Plan',
    icon: '📺',
    gradient: '',
    popular: true,
    plans: [
      { duration: '1 Month', price: '₹60' },
      { duration: '3 Months', price: '₹120' },
      { duration: '6 Months', price: '₹299' },
      { duration: '12 Months', price: '₹399' },
    ],
  },
  {
    name: 'ZEE5',
    description: 'Super Plan – 1080p',
    icon: '🎬',
    gradient: '',
    plans: [
      { duration: '1 Month', price: '₹60' },
      { duration: '3 Months', price: '₹120' },
      { duration: '6 Months', price: '₹299' },
      { duration: '12 Months', price: '₹399' },
    ],
  },
  {
    name: 'Hoichoi 4K',
    description: 'Bengali Entertainment',
    icon: '🎭',
    gradient: '',
    plans: [
      { duration: '1 Month', price: '₹70' },
    ],
  },
  {
    name: 'Netflix 4K UHD',
    description: '1 Device, My Mail',
    icon: '🍿',
    gradient: '',
    popular: true,
    plans: [
      { duration: '1 Month', price: '₹120' },
    ],
  },
  {
    name: 'Amazon Prime Video',
    description: 'Movies, TV Shows & More',
    icon: '🎥',
    gradient: '',
    plans: [
      { duration: '6 Months', price: '₹299' },
    ],
  },
];

const aiTools = [
  {
    name: 'Blackbox AI',
    description: 'AI Code Assistant',
    icon: '🤖',
    gradient: '',
    plans: [
      { duration: '3 Months', price: '₹649' },
    ],
  },
  {
    name: 'Perplexity AI',
    description: 'Own Mail',
    icon: '🔮',
    gradient: '',
    popular: true,
    plans: [
      { duration: '1 Year', price: '₹1200' },
    ],
  },
  {
    name: 'edX Courses',
    description: 'Own Mail',
    icon: '🎓',
    gradient: '',
    plans: [
      { duration: '1 Year', price: '₹999' },
    ],
  },
  {
    name: 'ChatGPT Plus',
    description: 'Advanced AI Assistant',
    icon: '💬',
    gradient: '',
    popular: true,
    plans: [
      { duration: '1 Month', price: '₹449' },
    ],
  },
];

const professionalSoftware = [
  {
    name: 'Figma Pro',
    description: 'Your Mail',
    icon: '🎨',
    gradient: '',
    popular: true,
    plans: [
      { duration: '2 Years', price: '₹449' },
    ],
  },
  {
    name: 'Canva Pro',
    description: 'Your Mail',
    icon: '✨',
    gradient: '',
    popular: true,
    plans: [
      { duration: '1 Year', price: '₹249' },
    ],
  },
  {
    name: 'Filmora',
    description: 'Lifetime Updates',
    icon: '🎞️',
    gradient: '',
    plans: [
      { duration: '1 Year', price: '₹900' },
    ],
  },
  {
    name: 'Kuku FM',
    description: 'Audio Learning Platform',
    icon: '🎧',
    gradient: '',
    plans: [
      { duration: '1 Year', price: '₹1200' },
    ],
  },
];

export function FeaturedSoftware() {
  return (
    <section 
      id="pricing"
      className="py-28 bg-gradient-to-b from-[#F5F5F5] to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#FFD700] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B00] opacity-5 rounded-full blur-3xl" />

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
            <div className="px-6 py-2 rounded-full bg-white border shadow-sm" style={{ 
              borderColor: '#FFD700',
              background: '#FFD70010'
            }}>
              <span className="text-sm font-semibold tracking-wider" style={{ color: '#FF6B00' }}>
                PRICING PLANS
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl mb-6 font-['Playfair_Display']" style={{ color: '#0A1F44' }}>
            Choose Your Perfect
            <span className="block mt-2 gold-shimmer">Subscription</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium software and entertainment at prices that redefine value
          </p>
        </motion.div>

        <Tabs defaultValue="streaming" className="w-full">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-16">
            <TabsList className="inline-grid grid-cols-3 gap-2 bg-white p-2 border shadow-lg rounded-2xl" style={{ borderColor: '#E5E7EB' }}>
              <TabsTrigger 
                value="streaming" 
                className="px-8 py-4 rounded-xl transition-all duration-300 font-semibold tracking-wide data-[state=active]:text-white data-[state=active]:shadow-lg"
                style={{
                  letterSpacing: '1px'
                }}
              >
                🎬 Streaming
              </TabsTrigger>
              <TabsTrigger 
                value="ai" 
                className="px-8 py-4 rounded-xl transition-all duration-300 font-semibold tracking-wide data-[state=active]:text-white data-[state=active]:shadow-lg"
                style={{
                  letterSpacing: '1px'
                }}
              >
                🧠 AI Tools
              </TabsTrigger>
              <TabsTrigger 
                value="professional" 
                className="px-8 py-4 rounded-xl transition-all duration-300 font-semibold tracking-wide data-[state=active]:text-white data-[state=active]:shadow-lg"
                style={{
                  letterSpacing: '1px'
                }}
              >
                🛠️ Pro Software
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          <TabsContent value="streaming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {streamingServices.map((service, index) => (
                <PricingCard key={service.name} {...service} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTools.map((tool, index) => (
                <PricingCard key={tool.name} {...tool} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="professional">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionalSoftware.map((software, index) => (
                <PricingCard key={software.name} {...software} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <style>{`
        [data-state=active] {
          background: #FF6B00 !important;
        }
      `}</style>
    </section>
  );
}
