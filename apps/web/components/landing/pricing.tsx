'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './section-header';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started with basic interview prep.',
    features: [
      '1 AI Mock Interview per month',
      'Basic Resume Analysis',
      'Limited Question Bank',
      'Standard Feedback'
    ],
    buttonText: 'Start Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'The complete toolkit for serious job seekers.',
    features: [
      'Unlimited AI Mock Interviews',
      'Advanced Coding Environment',
      'Company Specific Questions',
      'Deep Actionable Analytics',
      'AI Career Coach Access'
    ],
    buttonText: 'Coming Soon',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For universities and bootcamps to train their students.',
    features: [
      'Everything in Pro',
      'Custom Curriculum Integration',
      'Bulk User Management',
      'Dedicated Success Manager',
      'API Access'
    ],
    buttonText: 'Coming Soon',
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative z-10 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Pricing"
          title="Simple, transparent pricing"
          subtitle="Choose the plan that fits your career goals. Upgrade anytime."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15 }}
              className={`relative bg-background rounded-3xl p-8 border ${
                plan.popular ? 'border-primary shadow-2xl shadow-primary/10' : 'border-border/50 shadow-sm'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary hover:bg-primary text-primary-foreground font-semibold px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground min-h-[40px]">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'default' : 'outline'} 
                className="w-full h-12 rounded-xl"
                disabled={plan.buttonText === 'Coming Soon'}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
