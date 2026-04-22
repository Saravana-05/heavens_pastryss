import { useEffect, useRef } from "react";
import StarIcon from "@mui/icons-material/Star";
import CustomerReviewVideo1 from "@/assets/CustomerReviews/IMG_2619.MOV (1).mp4";
import CustomerReviewVideo2 from "@/assets/CustomerReviews/IMG_2640 (1).mp4";
import CustomerReviewVideo3 from "@/assets/CustomerReviews/IMG_6117.MOV (1).mp4";


// ── Types ──────────────────────────────────────────────
type Review = {
  text: string;
  name: string;
  tags: string[];
  stars: number;
};

// ── Review Data ────────────────────────────────────────
const reviews: Review[] = [
  {
    text: "Best cake shop in Dindigul! The taste, design and quality are truly amazing.",
    name: "Priya R.",
    tags: ["Food", "Quality", "Design"],
    stars: 5,
  },
  {
    text: "Very good service and on-time delivery. Perfect place for all celebrations.",
    name: "Ramesh K.",
    tags: ["Service", "Delivery", "Value for Money"],
    stars: 3,
  },
  {
    text: "Ordered for a family function and everything was perfect. Highly recommended!",
    name: "Sunita M.",
    tags: ["Food", "Ambience", "Service"],
    stars: 4,
  },
  {
    text: "Loved the cakes and mini desserts. Great experience overall.",
    name: "Karthik S.",
    tags: ["Food", "Cleanliness", "Value for Money"],
    stars: 4,
  },
  {
    text: "One of the best places for party orders. Quality and taste are excellent.",
    name: "Deepa A.",
    tags: ["Food", "Service", "Quality"],
    stars: 5,
  },
  {
    text: "Serve persons very gentle and humble. I like those brothers so much!",
    name: "Jeyekumar",
    tags: ["Food", "Service", "Ambience", "Cleanliness"],
    stars: 5,
  },
  {
    text: "Amazing customised cake for my daughter's birthday. Everyone loved it!",
    name: "Meena T.",
    tags: ["Design", "Food", "Service"],
    stars: 5,
  },
  {
    text: "Fresh ingredients, beautiful presentation and heavenly taste. Worth every rupee.",
    name: "Arun P.",
    tags: ["Food", "Value for Money", "Quality"],
    stars: 5,
  },
];

// ── Video Data ─────────────────────────────────────────
const celebrationVideos = [
  { src: CustomerReviewVideo1, label: "Happy Customer Feedback" },
  { src: CustomerReviewVideo2, label: "What Our Customers Say" },
  { src: CustomerReviewVideo3, label: "Customer Experience Review" },
  // { src: celebrationVideo4, label: "Wedding Dining" },
  // { src: celebrationVideo5, label: "Marriage Celebration" },
  // { src: celebrationVideo6, label: "Direct Delivery" },
  // { src: celebrationVideo7, label: "Wedding Stall" },
  // { src: celebrationVideo8, label: "Joyful Celebration" },
  // { src: celebrationVideo9, label: "Happy Birthday Moments" },
];

// ── VideoCard ──────────────────────────────────────────
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

// ── ReviewCard ─────────────────────────────────────────
const ReviewCard = ({ review }: { review: Review }) => (
  <div
    className="shrink-0 w-72 md:w-80 rounded-2xl p-6 mx-3 flex flex-col gap-3"
    style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
  >
    {/* Stars */}
    <div className="flex justify-center gap-1">
      {[...Array(review.stars)].map((_, i) => (
        <StarIcon key={i} sx={{ fontSize: 22 }} className="text-white" />
      ))}
    </div>

    {/* Review Text */}
    <p className="text-white text-sm md:text-base font-medium text-center leading-relaxed">
      "{review.text}"
    </p>

    {/* Tags */}
    <div className="flex flex-wrap justify-center gap-2 mt-1">
      {review.tags.map((tag) => (
        <span
          key={tag}
          className="text-xs font-semibold text-orange-700 bg-white/90 px-3 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Reviewer Name */}
    <div className="text-center mt-1">
      <span className="text-white/70 text-xs">—</span>
      <p className="text-white font-bold text-sm mt-0.5">{review.name}</p>
    </div>
  </div>
);

// ── Marquee Track ──────────────────────────────────────
const ReviewMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  // Pause on hover
  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused"; };
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; };

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Inject keyframes once */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className="marquee-track" ref={trackRef}>
        {/* Duplicate for seamless loop */}
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>
    </div>
  );
};

// ── Testimonials ───────────────────────────────────────
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

      {/* Videos — Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {celebrationVideos.slice(0, 3).map((v) => (
          <VideoCard key={v.label} src={v.src} label={v.label} />
        ))}
      </div>

      {/* Videos — Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {celebrationVideos.slice(3, 6).map((v) => (
          <VideoCard key={v.label} src={v.src} label={v.label} />
        ))}
      </div>

      {/* Videos — Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        {celebrationVideos.slice(6, 9).map((v) => (
          <VideoCard key={v.label} src={v.src} label={v.label} />
        ))}
      </div>

      {/* ✅ Sliding Review Cards */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-center text-foreground mb-8">
          What Our Customers Say ⭐
        </h3>
        <ReviewMarquee />
      </div>

    </div>
  </section>
);

export default Testimonials;