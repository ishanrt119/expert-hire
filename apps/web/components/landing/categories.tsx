'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './section-header';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  'Software Engineer', 'Frontend Developer', 'Backend Developer',
  'Full Stack Developer', 'Data Analyst', 'Machine Learning',
  'DevOps Engineer', 'Cloud Architect', 'Cybersecurity',
  'Product Manager', 'UI/UX Designer', 'Business Analyst'
];

export function Categories() {
  return (
    <section id="categories" className="py-24 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Role Specific"
          title="Tailored for Every Role"
          subtitle="Practice with questions specifically curated for your target position."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href="#" className="group block">
                <div className="bg-background border border-border/50 rounded-2xl p-6 hover:bg-muted/50 hover:border-primary/30 transition-all cursor-pointer h-full flex flex-col justify-between">
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {category}
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Practice Now <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
