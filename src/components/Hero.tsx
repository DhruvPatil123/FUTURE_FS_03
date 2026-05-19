import { motion } from "motion/react";
import { ArrowRight, Star, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-50 via-white to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
              <Star size={16} className="fill-primary-600 text-primary-600" />
              <span>4.9/5 from 118+ Happy Customers</span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
              Nagpur's Most Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Mobile Hub</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Official JioMart Digital Partner offering the best deals on new smartphones, high-quality second-hand devices, and expert repair services in Sitabuldi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-0.5"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services
                <ArrowRight size={20} />
              </a>
              
              <a 
                href="#contact"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-full shadow-sm border border-gray-200 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <MapPin size={20} className="text-gray-500" />
                Visit Store
              </a>
            </div>
          </motion.div>

          {/* Image hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-gray-100">
              <iframe 
                className="absolute inset-x-0 inset-y-0 w-full h-[150%] -top-[25%] pointer-events-none"
                src="https://www.youtube.com/embed/c347oYQO57A?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playsinline=1&playlist=c347oYQO57A"
                allow="autoplay; encrypted-media"
                title="Smartphone showcase"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg inline-flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Star size={24} className="fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">JioMart Partner</p>
                    <p className="text-sm text-gray-600">Verified Seller</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
