import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DirectionsIcon from "@mui/icons-material/Directions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const branches = [
  {
    name: "Main Branch",
    address: "No.27A, Spencer Compound, Near Dindigul Bus Stand, Dindigul – 624001",
    phone: "7708001144",
    timing: "10 AM – 10 PM",
    map: "https://maps.app.goo.gl/bsThpWSDmTZs9MnL9",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d77.97!3d10.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIyJzEyLjAiTiA3N8KwNTgnMTIuMCJF!5e0!3m2!1sen!2sin!4v1",
  },
  {
    name: "Branch 2",
    address: "108A, Palani Road, Opposite Reliance Department Store, Dindigul – 624001",
    phone: "7418568080",
    timing: "11 AM – 10 PM",
    map: "https://maps.app.goo.gl/LCH2dcM1e6x2KjHE6",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d77.98!3d10.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIxJzM2LjAiTiA3N8KwNTgnNDguMCJF!5e0!3m2!1sen!2sin!4v1",
  },
];

const ContactSection = () => (
  <section className="py-16 md:py-24 bg-background" id="contact">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Visit Us or <span className="text-gradient">Order Now</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {branches.map((b) => (
          <div key={b.name} className="bg-card rounded-lg shadow-sm p-6 border border-border">
            <h3 className="font-bold text-lg text-foreground mb-1">
              Heavenss Pastries — {b.name}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 flex items-start gap-2">
              <LocationOnIcon fontSize="small" className="text-primary mt-0.5 shrink-0" />
              {b.address}
            </p>

            <div className="flex items-center gap-2 text-sm text-foreground mb-1">
              <PhoneIcon fontSize="small" className="text-primary" /> {b.phone}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
              <AccessTimeIcon fontSize="small" className="text-primary" /> {b.timing}
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              <a
                href={`tel:${b.phone}`}
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition"
              >
                <PhoneIcon fontSize="small" /> Call
              </a>
              <a
                href={`https://wa.me/91${b.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-success text-success-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-success/90 transition"
              >
                <WhatsAppIcon fontSize="small" /> WhatsApp
              </a>
              <a
                href={b.map}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-secondary/90 transition"
              >
                <DirectionsIcon fontSize="small" /> Directions
              </a>
            </div>

            <div className="rounded-md overflow-hidden aspect-video">
              <iframe
                src={b.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${b.name} location`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <a href="#" className="text-muted-foreground hover:text-primary transition text-sm">Instagram (Coming Soon)</a>
        <a href="#" className="text-muted-foreground hover:text-primary transition text-sm">Facebook (Coming Soon)</a>
      </div>
    </div>
  </section>
);

export default ContactSection;
