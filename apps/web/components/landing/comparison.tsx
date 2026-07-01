'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './section-header';
import { Check, X } from 'lucide-react';

const comparisonData = [
  { feature: 'Instant Actionable Feedback', traditional: false, ai: true },
  { feature: 'Unlimited Mock Interviews', traditional: false, ai: true },
  { feature: 'Live Coding Support & Validation', traditional: false, ai: true },
  { feature: 'Deep Resume Analysis vs Job Description', traditional: false, ai: true },
  { feature: 'Dynamic Follow-up Questions', traditional: true, ai: true },
  { feature: 'Company Specific Frameworks', traditional: false, ai: true },
  { feature: 'Detailed Progress Tracking Over Time', traditional: false, ai: true },
];

export function Comparison() {
  return (
    <section className="py-24 relative z-10 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader 
          badge="Why Choose Us"
          title="A Better Way to Prepare"
          subtitle="See how our AI platform compares to traditional mock interviews."
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 overflow-hidden rounded-3xl border border-border/50 shadow-xl"
        >
          <div className="grid grid-cols-12 bg-muted/50 border-b border-border/50 py-6 px-6 font-semibold">
            <div className="col-span-6 md:col-span-8">Feature</div>
            <div className="col-span-3 md:col-span-2 text-center text-muted-foreground">Traditional</div>
            <div className="col-span-3 md:col-span-2 text-center text-primary">Our Platform</div>
          </div>
          
          <div className="divide-y divide-border/30 bg-background/50 backdrop-blur-sm">
            {comparisonData.map((row, i) => (
              <div key={i} className="grid grid-cols-12 py-5 px-6 items-center hover:bg-muted/20 transition-colors">
                <div className="col-span-6 md:col-span-8 font-medium text-sm md:text-base">
                  {row.feature}
                </div>
                <div className="col-span-3 md:col-span-2 flex justify-center">
                  {row.traditional ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500/50" />
                  )}
                </div>
                <div className="col-span-3 md:col-span-2 flex justify-center">
                  {row.ai ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <X className="w-5 h-5 text-red-500/50" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
