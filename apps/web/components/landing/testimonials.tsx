'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './section-header';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Frontend Engineer",
    company: "[Tech Giant]",
    content: "The real-time coding environment combined with the AI interviewer's follow-up questions felt exactly like my final round at Google. I secured the offer thanks to this platform.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "[Fintech Startup]",
    content: "I struggled with behavioral questions. The AI career coach helped me refine my STAR method responses and the feedback was incredibly precise.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Data Scientist",
    company: "[Enterprise SaaS]",
    content: "Being able to upload a specific job description and have the AI tailor the entire interview around it is a game changer. The ATS score feature also helped me optimize my resume.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative z-10 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Testimonials"
          title="Success Stories"
          subtitle="Don't just take our word for it. Hear from candidates who landed their dream roles."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-3xl p-8 border border-border/50 shadow-sm relative group hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-8 italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role} at {t.company}</div>
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 bg-muted px-3 py-1 rounded-full text-xs font-mono border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                Sample Review
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
