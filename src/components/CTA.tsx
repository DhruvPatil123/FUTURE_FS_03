import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-primary-600/20"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to find your next phone?
            </h2>
            <p className="text-primary-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Visit Shri Krishna Mobiles in Sitabuldi today for the best prices on new devices, authorized repairs, and premium pre-owned phones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-full shadow-lg hover:bg-gray-50 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <MapPin size={20} />
                Get Directions
              </a>
              <a
                href="tel:09326370959"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary-700 text-white font-bold rounded-full border border-primary-500 hover:bg-primary-800 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Call Us Now
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
