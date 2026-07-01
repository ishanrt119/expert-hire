import { ScrollProgress } from '@/components/landing/scroll-progress';
import { Navigation } from '@/components/landing/navigation';
import { Hero } from '@/components/landing/hero';
import { TrustedBy } from '@/components/landing/trusted-by';
import { Statistics } from '@/components/landing/statistics';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { InteractiveDemo } from '@/components/landing/interactive-demo';
import { Comparison } from '@/components/landing/comparison';
import { Categories } from '@/components/landing/categories';
import { Testimonials } from '@/components/landing/testimonials';
import { Pricing } from '@/components/landing/pricing';
import { FAQ } from '@/components/landing/faq';
import { CTA } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <ScrollProgress />
      <Navigation />
      
      <main>
        <Hero />
        <TrustedBy />
        <Statistics />
        <Features />
        <HowItWorks />
        <InteractiveDemo />
        <Comparison />
        <Categories />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
