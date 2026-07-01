'use client';

import { motion, Variants } from 'framer-motion';
import { SectionHeader } from './section-header';
import { 
  Bot, Code, FileText, Target, Mic, Briefcase, 
  LineChart, History, CheckCircle, MessagesSquare, Lightbulb
} from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: 'AI HR Interview',
    description: 'Practice behavioral questions with our lifelike AI interviewer that adapts to your responses.'
  },
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    title: 'Coding Interview',
    description: 'Solve algorithmic challenges in a real-time collaborative coding environment with instant compilation.'
  },
  {
    icon: <FileText className="w-6 h-6 text-green-500" />,
    title: 'Resume Analyzer',
    description: 'Get instant feedback on your resume and optimize it for ATS systems with AI suggestions.'
  },
  {
    icon: <Target className="w-6 h-6 text-red-500" />,
    title: 'ATS Score',
    description: 'Match your resume against specific job descriptions to see your exact ATS pass probability.'
  },
  {
    icon: <Briefcase className="w-6 h-6 text-purple-500" />,
    title: 'Company Specific',
    description: 'Practice questions tailored specifically to the interview processes of top tech companies.'
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    title: 'Personalized Feedback',
    description: 'Receive detailed breakdowns of your strengths and areas needing improvement after every session.'
  },
  {
    icon: <MessagesSquare className="w-6 h-6 text-teal-500" />,
    title: 'AI Career Coach',
    description: 'Chat with an AI career coach to discuss salary negotiation, career transitions, and more.'
  },
  {
    icon: <History className="w-6 h-6 text-orange-500" />,
    title: 'Interview History',
    description: 'Access recordings and transcripts of all your past interviews to review your growth.'
  },
  {
    icon: <Mic className="w-6 h-6 text-pink-500" />,
    title: 'Voice Interviews',
    description: 'Talk naturally using your voice instead of typing for a truly realistic interview simulation.'
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export function Features() {
  return (
    <section id="features" className="py-24 relative z-10 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Platform Features"
          title="Everything you need to succeed"
          subtitle="A comprehensive suite of tools designed to prepare you for every stage of the interview process."
        />

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="bg-background rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="bg-muted w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
