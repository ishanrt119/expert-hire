'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './section-header';
import { Play, CheckCircle2, XCircle, Clock, Code2, Terminal, MessageSquare } from 'lucide-react';

export function InteractiveDemo() {
  return (
    <section id="demo" className="py-24 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          badge="Interactive Environment"
          title="Experience the Platform"
          subtitle="A complete simulated interview environment featuring a live coding editor, real-time AI feedback, and performance tracking."
        />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 w-full rounded-2xl border border-border/50 bg-background/50 backdrop-blur-xl shadow-2xl shadow-primary/5 overflow-hidden flex flex-col md:flex-row h-[600px]"
        >
          {/* Left Panel: Code Editor */}
          <div className="flex-[2] border-r border-border/50 flex flex-col bg-zinc-950/50 dark:bg-zinc-950">
            {/* Editor Header */}
            <div className="h-12 border-b border-border/50 flex items-center px-4 justify-between bg-zinc-900/50">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Code2 className="w-4 h-4" />
                <span>twoSum.ts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
                  <Clock className="w-3 h-3" />
                  <span>14:23 remaining</span>
                </div>
                <button className="flex items-center gap-1 text-xs font-medium bg-green-500/20 text-green-400 px-3 py-1 rounded hover:bg-green-500/30 transition-colors">
                  <Play className="w-3 h-3" /> Run Code
                </button>
              </div>
            </div>
            
            {/* Editor Content (Mock) */}
            <div className="flex-1 p-4 font-mono text-sm leading-relaxed text-zinc-300 overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-border/20 bg-zinc-900/30 text-right pr-2 pt-4 text-zinc-600 select-none">
                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10
              </div>
              <div className="pl-10 pt-4">
                <span className="text-pink-400">function</span> <span className="text-blue-400">twoSum</span>(nums: <span className="text-teal-400">number</span>[], target: <span className="text-teal-400">number</span>): <span className="text-teal-400">number</span>[] {'{'}
                <br />
                {'  '}<span className="text-pink-400">const</span> map = <span className="text-pink-400">new</span> <span className="text-teal-400">Map</span>&lt;<span className="text-teal-400">number</span>, <span className="text-teal-400">number</span>&gt;();
                <br />
                {'  '}<span className="text-pink-400">for</span> (<span className="text-pink-400">let</span> i = <span className="text-orange-300">0</span>; i &lt; nums.length; i++) {'{'}
                <br />
                {'    '}<span className="text-pink-400">const</span> complement = target - nums[i];
                <br />
                {'    '}<span className="text-pink-400">if</span> (map.has(complement)) {'{'}
                <br />
                {'      '}<span className="text-pink-400">return</span> [map.get(complement)!, i];
                <br />
                {'    }'}
                <br />
                {'    '}map.set(nums[i], i);
                <br />
                {'  }'}
                <br />
                {'  '}<span className="text-pink-400">return</span> [];
                <br />
                {'}'}
                <br />
                <br />
                <span className="inline-block w-2 h-5 bg-primary animate-pulse" />
              </div>
            </div>

            {/* Terminal Panel */}
            <div className="h-40 border-t border-border/50 bg-zinc-950 p-4 font-mono text-sm">
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <Terminal className="w-4 h-4" />
                <span>Console Output</span>
              </div>
              <div className="text-green-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Test Case 1 Passed (12ms)
              </div>
              <div className="text-green-400 flex items-center gap-2 mt-1">
                <CheckCircle2 className="w-4 h-4" />
                Test Case 2 Passed (8ms)
              </div>
              <div className="text-green-400 flex items-center gap-2 mt-1">
                <CheckCircle2 className="w-4 h-4" />
                Test Case 3 Passed (14ms)
              </div>
            </div>
          </div>

          {/* Right Panel: AI Interviewer */}
          <div className="flex-1 flex flex-col bg-background/80 relative">
            <div className="h-12 border-b border-border/50 flex items-center px-4 font-semibold text-sm">
              AI Interviewer
            </div>
            
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {/* AI Chat Bubble */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted p-3 rounded-2xl rounded-tl-sm text-sm text-foreground">
                  Can you explain the time and space complexity of your `twoSum` approach? Why did you choose to use a Map?
                </div>
              </div>

              {/* User Chat Bubble */}
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-blue-500" />
                </div>
                <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-sm text-sm">
                  The time complexity is O(N) because we traverse the array exactly once. The space complexity is also O(N) as we store elements in a hash map. I used a Map to achieve O(1) lookups instead of an O(N^2) nested loop.
                </div>
              </div>

              {/* AI Feedback Bubble */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted p-3 rounded-2xl rounded-tl-sm text-sm text-foreground">
                  Excellent explanation. O(N) is the optimal time complexity here. As a follow-up, how would you handle the case if the array was already sorted?
                </div>
              </div>
            </div>

            {/* Feedback Input Area */}
            <div className="p-4 border-t border-border/50">
              <div className="bg-muted rounded-xl p-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Listening to your response...</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
