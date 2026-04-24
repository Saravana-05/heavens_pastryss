import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CakeIcon from "@mui/icons-material/Cake";
import birthdayCake from "@/assets/birthday-cake.jpg";
import customCake from "@/assets/custom-cake.jpg";
import miniDesserts from "@/assets/mini-desserts.jpg";
import iceCream from "@/assets/ice-cream.jpg";
import SignatureTreatsImg1 from "@/assets/SignatureTreatsJPG/SignatureTreatsImg1.jpg";
import SignatureTreatsImg2 from "@/assets/SignatureTreatsJPG/SignatureTreatsImg2.jpg";
import SignatureTreatsImg3 from "@/assets/SignatureTreatsJPG/SignatureTreatsImg3.jpg";
import SignatureTreatsImg4 from "@/assets/SignatureTreatsJPG/SignatureTreatsImg4.jpg";
import SignatureTreatsImg5 from "@/assets/SignatureTreatsJPG/SignatureTreatsImg5.jpg";
import SignatureTreatsImg6 from "@/assets/SignatureTreatsJPG/SignatureTreatsImg6.jpg";
import SignatureTreatsImg7 from "@/assets/SignatureTreatsJPG/SignatureTreatsImg7.jpg";
import SignatureTreatsVideo1 from "@/assets/SignatureTreatsJPG/IMG_9621.mp4";
import SignatureTreatsVideo2 from "@/assets/SignatureTreatsJPG/IMG_0488.mp4";

import BirthdayCakeImg1 from "@/assets/BirthdayCakes/IMG-20250408-WA0008.jpg.jpeg";
import BirthdayCakeImg2 from "@/assets/BirthdayCakes/IMG-20250408-WA0009.jpg.jpeg";
import BirthdayCakeImg3 from "@/assets/BirthdayCakes/IMG-20250421-WA0004.jpg.jpeg";
import BirthdayCakeImg4 from "@/assets/BirthdayCakes/IMG-20250519-WA0018.jpg.jpeg";
import BirthdayCakeImg5 from "@/assets/BirthdayCakes/IMG-20250519-WA0023.jpg.jpeg";
import BirthdayCakeVideo1 from "@/assets/BirthdayCakes/celebration-1.mp4";
import BirthdayCakeVideo2 from "@/assets/BirthdayCakes/celebration-2.mp4";
import BirthdayCakeVideo3 from "@/assets/BirthdayCakes/celebration-3.mp4";
import BirthdayCakeVideo4 from "@/assets/BirthdayCakes/celebration-8.mp4";
import BirthdayCakeVideo5 from "@/assets/BirthdayCakes/celebration-9.mp4";

import WeddingCakeImg1 from "@/assets/WeddingCakes/IMG-20250519-WA0013.jpg.jpeg";
import WeddingCakeImg2 from "@/assets/WeddingCakes/IMG-20250519-WA0020.jpg.jpeg";
import WeddingCakeVideo1 from "@/assets/WeddingCakes/celebration-4.mp4";
import WeddingCakeVideo2 from "@/assets/WeddingCakes/celebration-5.mp4";

import PartyOrdersCakeVideo1 from "@/assets/PartyOrdersCakes/celebration-6.mp4";
import PartyOrdersCakeVideo2 from "@/assets/PartyOrdersCakes/celebration-7.mp4";
import PartyOrdersCakeVideo3 from "@/assets/PartyOrdersCakes/VID-20260130-WA0020.mp4";
import PartyOrdersCakeVideo4 from "@/assets/PartyOrdersCakes/IMG_6385.MOV (1).mp4";
import PartyOrdersCakeVideo5 from "@/assets/PartyOrdersCakes/IMG_6098.MOV (1).mp4";

// ── Types ──────────────────────────────────────────────
type MediaItem = { type: "image" | "video"; src: string; caption?: string };
type Category = {
  img: string;
  name: string;
  tagline: string;
  media: MediaItem[];
};

// ── Gallery Media per Category ─────────────────────────
const items: Category[] = [
  {
    img: birthdayCake,
    name: "Birthday Cakes",
    tagline: "Made for Every Birthday",
    media: [
      { type: "image", src: BirthdayCakeImg1, caption: "Birthday Cake" },
      { type: "image", src: BirthdayCakeImg2, caption: "Birthday Cake" },
      { type: "image", src: BirthdayCakeImg3, caption: "Birthday Cake" },
      { type: "image", src: BirthdayCakeImg4, caption: "Birthday Cake" },
      { type: "image", src: BirthdayCakeImg5, caption: "Birthday Cake" },
      { type: "video", src: BirthdayCakeVideo1, caption: "Birthday Cake" },
      { type: "video", src: BirthdayCakeVideo2, caption: "Birthday Cake" },
      { type: "video", src: BirthdayCakeVideo3, caption: "Birthday Cake" },
      { type: "video", src: BirthdayCakeVideo4, caption: "Birthday Cake" },
      { type: "video", src: BirthdayCakeVideo5, caption: "Birthday Cake" },
    ],
  },
  {
    img: customCake,
    name: "Wedding Cakes",
    tagline: "Elegance in Every Slice",
    media: [
      { type: "image", src: WeddingCakeImg1, caption: "Wedding Cake" },
      { type: "image", src: WeddingCakeImg2, caption: "Wedding Cake" },
      { type: "video", src: WeddingCakeVideo1, caption: "Wedding Cake" },
      { type: "video", src: WeddingCakeVideo2, caption: "Wedding Cake" },
    ],
  },
  {
    img: miniDesserts,
    name: "Party Orders",
    tagline: "For Every Celebration",
    media: [
      { type: "video", src: PartyOrdersCakeVideo1, caption: "Party Orders" },
      { type: "video", src: PartyOrdersCakeVideo2, caption: "Party Orders" },
      { type: "video", src: PartyOrdersCakeVideo3, caption: "Party Orders" },
      { type: "video", src: PartyOrdersCakeVideo4, caption: "Party Orders" },
      { type: "video", src: PartyOrdersCakeVideo5, caption: "Party Orders" },
    ],
  },
  {
    img: iceCream,
    name: "Signature Treats",
    tagline: "Bites You'll Love",
    media: [
      { type: "image", src: SignatureTreatsImg1, caption: "Strawberry Mouse" },
      { type: "image", src: SignatureTreatsImg2, caption: "Irish Coffee Mouse" },
      { type: "image", src: SignatureTreatsImg3, caption: "Red Velvet Pastrys" },
      { type: "image", src: SignatureTreatsImg4, caption: "Strawberry Cheese Cake" },
      { type: "image", src: SignatureTreatsImg5, caption: "Real Mango Mouse" },
      { type: "image", src: SignatureTreatsImg6, caption: "Chocotruffel Pastrys" },
      { type: "image", src: SignatureTreatsImg7, caption: "BlackForest Pastrys" },
      { type: "video", src: SignatureTreatsVideo1, caption: "Mojito" },
      { type: "video", src: SignatureTreatsVideo2, caption: "Minion Burger" },
    ],
  },
];

// ── useIsMobile hook ───────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

// ── Gallery Modal ──────────────────────────────────────
const GalleryModal = ({
  category,
  onClose,
}: {
  category: Category;
  onClose: () => void;
}) => {
  const [current, setCurrent] = useState(0);
  // animating tracks the "in-flight" index so CSS transition plays fully
  const [animating, setAnimating] = useState(false);
  const total = category.media.length;
  const isMobile = useIsMobile();

  const navigate = (nextIndex: number) => {
    if (animating) return; // block rapid clicks during transition
    setAnimating(true);
    setCurrent(nextIndex);
    setTimeout(() => setAnimating(false), 450); // match transition duration
  };

  const prev = () => navigate((current - 1 + total) % total);
  const next = () => navigate((current + 1) % total);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, animating]);

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Render 5 slots: -2, -1, 0, +1, +2
  const visibleIndices = [-2, -1, 0, 1, 2].map(
    (offset) => ((current + offset) % total + total) % total
  );

  // Responsive widths & spacing
  const activeWidth  = isMobile ? "72%" : "42%";
  const sideWidth    = isMobile ? "48%" : "30%";
  const translateGap = isMobile ? 62 : 52; // % spread between slots

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdrop}
    >
      <div
        className="relative bg-card rounded-2xl w-full max-w-4xl flex flex-col shadow-2xl"
        style={{ height: "96vh", maxHeight: "96vh" }}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-2">
            <CakeIcon className="text-primary" sx={{ fontSize: 20 }} />
            <div>
              <h3 className="font-heading font-bold text-foreground text-base leading-tight">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-xs">{category.tagline}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition"
            aria-label="Close"
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </button>
        </div>

        {/* ── Fan Carousel ── */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-0">
          {visibleIndices.map((mediaIndex, i) => {
            const slot = i - 2; // -2, -1, 0, 1, 2
            const isActive = slot === 0;
            const mediaItem = category.media[mediaIndex];

            const translateX = slot * translateGap;
            const scale      = isActive ? 1 : Math.abs(slot) === 1 ? 0.82 : 0.65;
            const zIndex     = isActive ? 30 : Math.abs(slot) === 1 ? 20 : 10;
            const opacity    = isActive ? 1 : Math.abs(slot) === 1 ? 0.75 : 0.4;
            const rotateY    = slot * -8;
            const width      = isActive ? activeWidth : sideWidth;

            return (
              <div
                key={mediaIndex} // ✅ stable key = smooth CSS transition, no remount
                onClick={() => !isActive && (slot < 0 ? prev() : next())}
                style={{
                  position: "absolute",
                  width,
                  height: "96%",
                  // ✅ all transforms in one property so browser interpolates smoothly
                  transform: `translateX(${translateX}%) scale(${scale}) perspective(800px) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  // ✅ transition on every animatable property
                  transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.45s ease, width 0.45s ease",
                  cursor: isActive ? "default" : "pointer",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: isActive
                    ? "0 25px 60px rgba(0,0,0,0.35)"
                    : "0 8px 24px rgba(0,0,0,0.2)",
                }}
              >
                {mediaItem.type === "image" ? (
                  <img
                    src={mediaItem.src}
                    alt={mediaItem.caption || category.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      pointerEvents: "none",
                    }}
                  />
                ) : (
                  <video
                    src={mediaItem.src}
                    controls={isActive}
                    playsInline
                    muted={!isActive}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      background: "#000",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  />
                )}
              </div>
            );
          })}

          {/* Prev Arrow */}
          {total > 1 && (
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-lg transition hover:scale-110"
              aria-label="Previous"
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
            </button>
          )}

          {/* Next Arrow */}
          {total > 1 && (
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-lg transition hover:scale-110"
              aria-label="Next"
            >
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </button>
          )}
        </div>

        {/* ── Caption + Dots + Counter ── */}
        <div className="px-5 pb-5 pt-3 text-center shrink-0">
          {category.media[current].caption && (
            <p className="text-foreground text-sm font-medium mb-3">
              {category.media[current].caption}
            </p>
          )}

          {total > 1 && (
            <div className="flex justify-center gap-1.5 mb-1">
              {category.media.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary w-5 h-2"
                      : "bg-muted-foreground/30 w-2 h-2"
                  }`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
          )}

          {total > 1 && (
            <p className="text-muted-foreground text-xs mt-1">
              {current + 1} / {total}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// ── BestSellers ────────────────────────────────────────
const BestSellers = () => {
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background" id="menu">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
          Our <span className="text-gradient">Best Sellers</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              onClick={() => setSelected(item)}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-1 duration-300"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-semibold bg-black/50 px-3 py-1.5 rounded-full transition-all duration-300">
                    View Gallery
                  </span>
                </div>
              </div>
              <div className="p-3 md:p-4 text-center">
                <h3 className="font-heading font-semibold text-foreground text-base md:text-lg">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">
                  {item.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <GalleryModal
          category={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
};

export default BestSellers;