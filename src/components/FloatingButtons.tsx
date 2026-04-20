import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingButtons = () => (
  <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/917708001144"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-success text-success-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon />
    </a>
    <a
      href="tel:7708001144"
      className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Call Now"
    >
      <PhoneIcon />
    </a>
  </div>
);

export default FloatingButtons;
