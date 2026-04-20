import CelebrationIcon from "@mui/icons-material/Celebration";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import partyBg from "@/assets/party-bg.jpg";
import weddingImg from "@/assets/wedding_event.jpg";
import stallsparkImg from "@/assets/stall_event.jpg";
import partycraftImg from "@/assets/partycraft_event.jpeg";

const events = [
  "Birthday Parties",
  "Family Functions",
  "Corporate Events",
  "College Events",
  "Engagements & Weddings",
];

const eventImages = [
  { src: weddingImg, label: "Wedding Celebration" },
  { src: stallsparkImg, label: "Stallspark Events" },
  { src: partycraftImg, label: "Partycraft Celebration" },
];

const PartyOrders = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="party">
      <img
        src={partyBg}
        alt="Celebration party"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-foreground/75" />

      <div className="relative z-10 container max-w-4xl text-center">
        <CelebrationIcon sx={{ fontSize: 40 }} className="text-secondary mb-4" />

        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Planning a Celebration?
        </h2>

        <p className="text-primary-foreground/80 mb-6">
          Make your special moments truly unforgettable with Heavenss Pastries.
          We provide complete party order solutions for:
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {events.map((e) => (
            <span
              key={e}
              className="bg-primary/20 text-primary-foreground text-sm px-3 py-1.5 rounded-full border border-primary/30"
            >
              {e}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          {eventImages.map(({ src, label }) => (
            <div
              key={label}
              className="rounded-xl overflow-hidden border border-primary/30 group"
            >
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt={label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-black/50 py-2 px-3">
                <p className="text-primary-foreground text-sm font-semibold">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-primary-foreground/70 text-sm mb-8">
          From cakes to desserts, mini burgers, ice creams and juices — everything
          you need for your celebration, all in one place.
        </p>

        <a
          href="https://wa.me/917708001144"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-success hover:bg-success/90 text-success-foreground font-semibold px-8 py-4 rounded-lg text-base transition-all hover:scale-105"
        >
          <WhatsAppIcon />
          Plan Your Celebration with Us
        </a>
      </div>
    </section>
  );
};

export default PartyOrders;