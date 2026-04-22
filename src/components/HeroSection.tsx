import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DirectionsIcon from "@mui/icons-material/Directions";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Heavenss Pastries celebration cakes"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up pt-16">
        <img
          src={logo}
          alt="Heavenss Pastries"
          className="h-16 md:h-24 mx-auto mb-6"
        />

        <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-primary-foreground mb-4 leading-tight">
          Make Every Celebration Extra Special
        </h1>

        <p className="text-primary-foreground/80 text-base md:text-2xl mb-2 font-bold">
          Premium Cakes • Desserts • Party Experiences
        </p>
        <p className="text-primary-foreground/70 text-sm md:text-xl mb-3">
          Trusted by 1 Lakh + Happy Customers Since 2020
        </p>

        <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
          🎉 Bulk Orders Welcome
        </span>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:7708001144"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3.5 rounded-lg text-base transition-all hover:scale-105"
          >
            <PhoneIcon fontSize="small" /> Call Now
          </a>
          <a
            href="https://wa.me/917708001144"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-success-foreground font-semibold px-6 py-3.5 rounded-lg text-base transition-all hover:scale-105"
          >
            <WhatsAppIcon fontSize="small" /> WhatsApp
          </a>
          <a
            href="https://maps.app.goo.gl/bsThpWSDmTZs9MnL9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 py-3.5 rounded-lg text-base transition-all hover:scale-105"
          >
            <DirectionsIcon fontSize="small" /> Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
