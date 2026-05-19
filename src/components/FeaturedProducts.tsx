import { motion } from "motion/react";
import { Smartphone, Zap, MessageCircle } from "lucide-react";

const products = [
  {
    id: 1,
    name: "iPhone 13 (128GB)",
    condition: "Premium Used",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=600&auto=format&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    condition: "Like New (Used)",
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=600&auto=format&fit=crop",
    badge: "Top Rated",
  },
  {
    id: 3,
    name: "AirPods Pro (2nd Gen)",
    condition: "Brand New",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600&auto=format&fit=crop",
    badge: "Discounted",
  },
  {
    id: 4,
    name: "Apple Watch Series 8",
    condition: "Premium Used",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop",
    badge: "Great Deal",
  }
];

export default function FeaturedProducts() {
  const handleInquire = (productName: string) => {
    const message = `Hi, I am interested in the ${productName} featured on your website. Is it available?`;
    window.open(`https://wa.me/919326370959?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="products" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Featured Devices
            </h2>
            <p className="text-lg text-gray-600">
              Check out some of our current best deals. Stock moves fast, so drop us a message to check availability!
            </p>
          </div>
          <a
            href="#services"
            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center gap-1"
          >
            View All Services &rarr;
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img
                  referrerPolicy="no-referrer"
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 select-none flex items-center justify-center rounded-lg shadow-sm border border-gray-100/50">
                   {product.condition.includes("Used") ? <Zap size={16} className="text-orange-500 mr-1" /> : <Smartphone size={16} className="text-primary-500 mr-1" />}
                   <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700">{product.condition}</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-6">{product.name}</h3>
                
                <button
                  onClick={() => handleInquire(product.name)}
                  className="mt-auto w-full flex items-center justify-center gap-2 py-3 bg-gray-50 border border-gray-200 hover:bg-green-50 hover:text-green-700 hover:border-green-200 text-gray-800 font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle size={18} />
                  Get Latest Price
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
