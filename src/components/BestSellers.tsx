import birthdayCake from "@/assets/birthday-cake.jpg";
import customCake from "@/assets/custom-cake.jpg";
import miniDesserts from "@/assets/mini-desserts.jpg";
import iceCream from "@/assets/ice-cream.jpg";
import miniBurgers from "@/assets/mini-burgers.jpg";
import juices from "@/assets/juices.jpg";

const items = [
  { img: birthdayCake, name: "Birthday Cakes", tagline: "Perfect for Every Celebration" },
  { img: customCake, name: "Custom Cakes", tagline: "Designed Just for Your Special Moments" },
  { img: miniDesserts, name: "Mini Desserts", tagline: "Sweet Treats for Every Occasion" },
  { img: iceCream, name: "Ice Cream", tagline: "Fresh, Creamy & Delicious" },
  { img: miniBurgers, name: "Mini Burgers", tagline: "Perfect Bites for Parties & Events" },
  { img: juices, name: "Juices", tagline: "Fresh & Refreshing Drinks" },
];

const BestSellers = () => (
  <section className="py-16 md:py-24 bg-background" id="menu">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
        Our <span className="text-gradient">Best Sellers</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
