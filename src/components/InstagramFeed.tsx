import { motion } from "motion/react";
import { Instagram } from "lucide-react";

// Placeholder images for the Instagram grid
const igImages = [
  "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=400&auto=format&fit=crop", // Phones display
  "https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=400&auto=format&fit=crop", // Customer happy (abstract)
  "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=400&auto=format&fit=crop", // Phone repair
  "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=400&auto=format&fit=crop", // iPhone detail
  "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=400&auto=format&fit=crop", // Smartphone in hand
  "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=400&auto=format&fit=crop", // Watch/Accessories
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-pink-50 p-4 rounded-full text-pink-600 mb-6">
            <Instagram size={32} />
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Join our 9.1K+ followers for daily updates on new stock, exclusive deals, and behind-the-scenes at Shri Krishna Mobiles.
          </p>
          <a 
            href="https://www.instagram.com/shree_krishna_mobile03/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 inline-flex justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all hover:-translate-y-0.5"
          >
            @shree_krishna_mobile03
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {igImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Instagram post ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
