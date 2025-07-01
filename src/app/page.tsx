import dynamic from 'next/dynamic';

// Import components with dynamic loading for better performance
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const Problem = dynamic(() => import('@/components/Problem'), { ssr: true });
const Solution = dynamic(() => import('@/components/Solution'), { ssr: true });
const Benefits = dynamic(() => import('@/components/Benefits'), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const Download = dynamic(() => import('@/components/Download'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}
