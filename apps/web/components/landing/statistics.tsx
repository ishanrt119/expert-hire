'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '10,000+', label: 'Mock Interviews Completed' },
  { value: '95%', label: 'User Satisfaction Rate' },
  { value: '250+', label: 'Companies Targeted' },
  { value: '500+', label: 'Interview Questions' }
];

export function Statistics() {
  return (
    <section className="py-24 relative z-10 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5, type: 'spring' }}
            >
              <div className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
