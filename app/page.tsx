import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Marquee from '@/components/Marquee';
import CategoryFilter from '@/components/CategoryFilter';
import BestSellers from '@/components/BestSellers';
import PromoBanner from '@/components/PromoBanner';
import GoalSection from '@/components/GoalSection';
import CollabMarquee from '@/components/CollabMarquee';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import StoreLocator from '@/components/StoreLocator';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <TrustBar />
        <Marquee />
        <CategoryFilter />
        <BestSellers />
        <PromoBanner />
        <GoalSection />
        <CollabMarquee />
        <Testimonials />
        <Newsletter />
        <StoreLocator />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
