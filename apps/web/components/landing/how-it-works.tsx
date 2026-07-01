'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './section-header';
import { UserPlus, Upload, PlayCircle, BarChart3 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Create your account',
    description: 'Sign up in seconds and define your career goals and target roles.',
    icon: <UserPlus className="w-6 h-6 text-primary" />
  },
  {
    id: 2,
    title: 'Upload resume',
    description: 'Let our AI analyze your experience to tailor the interview questions specifically to you.',
    icon: <Upload className="w-6 h-6 text-primary" />
  },
  {
    id: 3,
    title: 'Start AI interview',
    description: 'Engage in a realistic, voice-enabled interview or coding session with our AI.',
    icon: <PlayCircle className="w-6 h-6 text-primary" />
  },
  {
    id: 4,
    title: 'Receive report',
    description: 'Get an instant, actionable breakdown of your performance with a concrete improvement plan.',
    icon: <BarChart3 className="w-6 h-6 text-primary" />
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Simple Process"
          title="How It Works"
          subtitle="Your journey from practice to job offer in four simple steps."
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-border/50" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center relative z-10 shadow-xl shadow-primary/5 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-20" />
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="text-sm font-bold text-primary mb-2">Step {step.id}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
