'use client';

import { SectionHeader } from './section-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'How realistic is the AI interviewer?',
    answer: 'Extremely realistic. Our AI is powered by advanced LLMs trained specifically on thousands of real technical and behavioral interviews from top tier companies. It adapts dynamically to your answers and asks relevant follow-up questions.'
  },
  {
    question: 'Can I practice coding interviews?',
    answer: 'Yes! We provide a fully functional, browser-based coding environment that supports multiple languages. The AI acts as your pair programmer, providing hints when stuck and evaluating your solution for time and space complexity.'
  },
  {
    question: 'Do you offer company-specific interview prep?',
    answer: 'Absolutely. We have curated interview question banks and behavioral frameworks specifically modeled after the interview processes at companies like Google, Meta, Amazon, Apple, and more.'
  },
  {
    question: 'How is the resume ATS score calculated?',
    answer: 'We use industry-standard parsing algorithms combined with semantic AI matching to compare your resume against a specific job description, highlighting missing keywords and formatting issues that might cause a real ATS to reject it.'
  },
  {
    question: 'Is my data and resume kept private?',
    answer: 'Yes. We take privacy very seriously. Your resume, interview recordings, and transcripts are fully encrypted and never shared with third parties or potential employers without your explicit consent.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative z-10 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader 
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about the platform and how it works."
        />

        <div className="mt-12">
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
