import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=800&auto=format&fit=crop", // iPhone detail
  "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=800&auto=format&fit=crop", // desk setup
  "https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=800&auto=format&fit=crop", // phone edge
  "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=800&auto=format&fit=crop", // colorful back
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Premium Collection
            </h2>
            <p className="text-lg text-gray-600">
              A glimpse of the top-tier devices and accessories available at our Sitabuldi store.
            </p>
          </div>
          <a href="https://www.instagram.com/shree_krishna_mobile03/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            Follow us on Instagram &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer"
            >
              <img 
                referrerPolicy="no-referrer"
                src={src} 
                alt="Gallery item" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
