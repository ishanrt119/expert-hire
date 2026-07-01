'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Copy */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Interview Prep</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            Master Every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Interview with AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            Experience hyper-realistic mock interviews, real-time coding assessments, and personalized actionable feedback designed to land you the dream job.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start"
          >
            <Link href="/register">
              <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1 w-full sm:w-auto">
                Start Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-primary/20 hover:bg-primary/5 transition-all w-full sm:w-auto">
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Floating Elements Illustration */}
        <div className="flex-1 w-full relative h-[400px] lg:h-[600px] hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Core Center Pulse */}
            <div className="absolute w-64 h-64 bg-primary/10 rounded-full animate-ping duration-3000 opacity-50" />
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute top-[10%] left-[10%] bg-background/80 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-xl w-48"
            >
              <div className="text-sm text-muted-foreground mb-1">Resume Score</div>
              <div className="text-2xl font-bold text-green-500">92%</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-[20%] left-[5%] bg-background/80 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-xl w-52"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">{'</>'}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Coding Challenge</div>
                  <div className="text-xs text-muted-foreground">Passed all tests</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 2 }}
              className="absolute top-[30%] right-[5%] bg-background/80 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-xl w-56"
            >
              <div className="text-sm font-semibold mb-2">AI Feedback</div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]" />
                </div>
                <div className="text-xs text-muted-foreground">Strong system design concepts</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-[10%] right-[15%] bg-background/80 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-xl w-40 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-1">A+</div>
              <div className="text-xs text-muted-foreground">ATS Match Rate</div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
