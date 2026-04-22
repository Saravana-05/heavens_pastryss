import birthdayCake from "@/assets/birthday-cake.jpg";
import customCake from "@/assets/custom-cake.jpg";
import miniDesserts from "@/assets/mini-desserts.jpg";
import iceCream from "@/assets/ice-cream.jpg";
import miniBurgers from "@/assets/mini-burgers.jpg";
import juices from "@/assets/juices.jpg";
import premiumIceStick from "@/assets/IMG_1456.JPG.jpeg";
import iceCandySipup from "@/assets/IMG_1457.JPG.jpeg";
import premiumMiniIceStick from "@/assets/IMG_1458.JPG.jpeg";

const items = [
  { img: birthdayCake, name: "Birthday Cakes", tagline: "Made for Every Birthday" },
  { img: customCake, name: "Wedding Cakes", tagline: "Elegance in Every Slice" },
  { img: miniDesserts, name: "Party Orders", tagline: "For Every Celebration" },
  { img: iceCream, name: "Signature Treats", tagline: "Bites You’ll Love" },
  // { img: miniBurgers, name: "Mini Burgers", tagline: "Perfect Bites for Parties & Events" },
  // { img: juices, name: "Juices", tagline: "Fresh & Refreshing Drinks" },
  
  // { img: premiumIceStick, name: "Premium Ice Stick", tagline: "Rich & Indulgent Frozen Delight" },
  // { img: iceCandySipup, name: "Ice Candy Sipup", tagline: "Cool, Sweet & Refreshing Sips" },
  // { img: premiumMiniIceStick, name: "Premium Mini Ice Stick", tagline: "Tiny Treats, Big Flavours" },
];

const BestSellers = () => (
  <section className="py-16 md:py-24 bg-background" id="menu">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
        Our <span className="text-gradient">Best Sellers</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
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
  </section>
);

export default BestSellers;