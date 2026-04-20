import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BestSellers from "@/components/BestSellers";
import PartyOrders from "@/components/PartyOrders";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <BestSellers />
    <PartyOrders />
    <Testimonials />
    <ContactSection />
    <Footer />
    <FloatingButtons />
  </>
);

export default Index;
