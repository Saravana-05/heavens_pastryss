import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const FloatingButtons = () => (
  <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
    {/* Instagram */}
    <a
      href="https://www.instagram.com/heavenss_pastrys?utm_source=qr&igsh=c2k2NjVscnhxbDR6"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
      aria-label="Instagram"
    >
      <InstagramIcon sx={{ color: "white" }} />
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/917708001144"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-success text-success-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon />
    </a>

    {/* Phone */}
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