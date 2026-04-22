import StarIcon from "@mui/icons-material/Star";
import celebrationVideo1 from "@/assets/celebration-1.mp4";
import celebrationVideo2 from "@/assets/celebration-2.mp4";
import celebrationVideo3 from "@/assets/celebration-3.mp4";
import celebrationVideo4 from "@/assets/celebration-4.mp4";
import celebrationVideo5 from "@/assets/celebration-5.mp4";
import celebrationVideo6 from "@/assets/celebration-6.mp4";
import celebrationVideo7 from "@/assets/celebration-7.mp4";
import celebrationVideo8 from "@/assets/celebration-8.mp4";
import celebrationVideo9 from "@/assets/celebration-9.mp4";

const reviews = [
  "Best cake shop in Dindigul! The taste, design and quality are truly amazing.",
  "Very good service and on-time delivery. Perfect place for all celebrations.",
  "Ordered for a family function and everything was perfect. Highly recommended!",
  "Loved the cakes and mini desserts. Great experience overall.",
  "One of the best places for party orders. Quality and taste are excellent.",
];

const celebrationVideos = [
  { src: celebrationVideo1, label: "Kids Birthday Celebration" },
  { src: celebrationVideo2, label: "Birthday Party" },
  { src: celebrationVideo3, label: "Little One's Special Day" },
  { src: celebrationVideo4, label: "Wedding Dinning" },
  { src: celebrationVideo5, label: "Marriage Celebration" },
  { src: celebrationVideo6, label: "Direct Delivery" },
  { src: celebrationVideo7, label: "Wedding Stall" },
  { src: celebrationVideo8, label: "Joyful Celebration" },
  { src: celebrationVideo9, label: "Happy Birthday Moments" },
];

const VideoCard = ({ src, label }: { src: string; label: string }) => (
  <div className="rounded-xl overflow-hidden bg-card shadow-sm">
    <div className="aspect-[9/16] sm:aspect-[4/5] overflow-hidden">
      <video
        src={src}
        className="w-full h-full object-cover"
        controls
        preload="metadata"
        playsInline
      />
    </div>
    <div className="p-3 text-center border-t border-border">
      <p className="text-foreground text-sm font-semibold">{label}</p>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="py-16 md:py-24 bg-muted" id="reviews">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
        Real Celebrations & <span className="text-gradient">Happy Customers</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
        Every celebration tells a story. Here are some beautiful moments shared
        by our happy customers.
      </p>

      {/* Videos — Row 1 (videos 1–3) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {celebrationVideos.slice(0, 3).map((v) => (
          <VideoCard key={v.label} src={v.src} label={v.label} />
        ))}
      </div>

      {/* Videos — Row 2 (videos 4–6) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {celebrationVideos.slice(3, 6).map((v) => (
          <VideoCard key={v.label} src={v.src} label={v.label} />
        ))}
      </div>

      {/* Videos — Row 3 (videos 7–9) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {celebrationVideos.slice(6, 9).map((v) => (
          <VideoCard key={v.label} src={v.src} label={v.label} />
        ))}
      </div>

      {/* Review Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card rounded-lg p-5 shadow-sm">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <StarIcon key={j} sx={{ fontSize: 18 }} className="text-secondary" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed">"{r}"</p>
            <p className="text-muted-foreground text-xs mt-3">— Happy Customer</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;