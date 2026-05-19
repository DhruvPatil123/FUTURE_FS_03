import { motion } from "motion/react";

const brands = [
  { name: "Apple", logo: "🍎" }, // Placeholder icons, in real app use SVGs
  { name: "Samsung", logo: "📱" },
  { name: "OnePlus", logo: "1️⃣" },
  { name: "Vivo", logo: "🇻" },
  { name: "Oppo", logo: "🅾️" },
  { name: "Xiaomi", logo: "Ⓜ️" },
];

export default function Brands() {
  return (
    <section className="py-12 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
          Authorized Retailer & Expert Service for Top Brands
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-primary-600 transition-colors"
            >
              <span className="text-2xl">{brand.logo}</span>
              {brand.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
