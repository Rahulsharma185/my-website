import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Crown, Check } from 'lucide-react';

interface PricingPlan {
  duration: string;
  price: string;
}

interface PricingCardProps {
  name: string;
  description: string;
  plans: PricingPlan[];
  icon: string;
  gradient: string;
  popular?: boolean;
  index: number;
}

export function PricingCard({ 
  name, 
  description, 
  plans, 
  icon, 
  gradient,
  popular,
  index 
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="h-full group"
    >
      <Card 
        className={`relative h-full bg-white overflow-hidden transition-all duration-300 ${
          popular 
            ? 'border-2 shadow-2xl' 
            : 'border shadow-lg hover:shadow-xl'
        }`}
        style={{
          borderColor: popular ? '#FFD700' : '#E5E7EB',
        }}
      >
        {/* Recommended Badge */}
        {popular && (
          <div className="absolute top-0 right-0 z-10">
            <Badge 
              className="text-white border-0 px-6 py-2 m-0 rounded-tl-none rounded-br-none font-semibold tracking-wider shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                letterSpacing: '1px'
              }}
            >
              <Crown className="w-4 h-4 mr-1.5" />
              RECOMMENDED
            </Badge>
          </div>
        )}

        {/* Gradient accent top */}
        <div 
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: popular 
              ? 'linear-gradient(90deg, #FFD700, #FF6B00)'
              : 'linear-gradient(90deg, #0A1F44, #1E40AF)'
          }}
        />

        <CardHeader className="relative z-10 pb-6 pt-8">
          {/* Icon */}
          <motion.div 
            className="text-6xl mb-4 filter drop-shadow-md"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
          
          <CardTitle 
            className="text-2xl font-['Playfair_Display'] mb-2"
            style={{ color: '#0A1F44' }}
          >
            {name}
          </CardTitle>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </CardHeader>

        <CardContent className="relative z-10 space-y-3 pb-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ x: 6 }}
              className="group/plan"
            >
              <div 
                className="flex items-center justify-between py-4 px-5 rounded-xl transition-all duration-300 border"
                style={{
                  background: popular ? '#FFF9E6' : '#F9FAFB',
                  borderColor: '#E5E7EB'
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: popular ? '#FFD700' : '#0A1F44' }}
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-medium text-gray-700">{plan.duration}</span>
                </div>
                <span 
                  className="text-2xl font-['Playfair_Display'] font-semibold"
                  style={{ color: popular ? '#FF6B00' : '#0A1F44' }}
                >
                  {plan.price}
                </span>
              </div>
            </motion.div>
          ))}

          <motion.div 
            className="pt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className={`w-full py-6 font-semibold tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 ${
                popular ? 'text-white' : 'text-white'
              }`}
              style={{ 
                background: popular 
                  ? '#FF6B00'
                  : '#0A1F44',
                letterSpacing: '1.5px'
              }}
            >
              Order Now
            </Button>
          </motion.div>
        </CardContent>

        {/* Bottom decorative element */}
        {popular && (
          <div 
            className="absolute bottom-0 left-0 right-0 h-24 opacity-5 rounded-t-full"
            style={{ background: '#FFD700' }}
          />
        )}
      </Card>
    </motion.div>
  );
}
