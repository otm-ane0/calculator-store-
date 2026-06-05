import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Marquee from '@/components/Marquee';
import CategoryFilter from '@/components/CategoryFilter';
import BestSellers from '@/components/BestSellers';
import PromoBanner from '@/components/PromoBanner';
import GoalSection from '@/components/GoalSection';
import CollabMarquee from '@/components/CollabMarquee';
import CreatineShowcase from '@/components/CreatineShowcase';
import PreWorkoutShowcase from '@/components/PreWorkoutShowcase';
import WheyShowcase from '@/components/WheyShowcase';
import MassGainerShowcase from '@/components/MassGainerShowcase';
import MotivationMarquee from '@/components/MotivationMarquee';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import StoreDescription from '@/components/StoreDescription';
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
        <CreatineShowcase />
        <PreWorkoutShowcase />
        <WheyShowcase />
        <MassGainerShowcase />
        <MotivationMarquee />
        <Testimonials />
        <Newsletter />
        <StoreDescription />
        <StoreLocator />
      </main>
      <WhatsAppFloat />
      <Footer />
    </SmoothScroll>
  );
}
