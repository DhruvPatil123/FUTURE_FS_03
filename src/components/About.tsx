import { motion } from "motion/react";
import { CheckCircle, Shield, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-64 md:h-80 rounded-3xl overflow-hidden mt-8"
              >
                <img 
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=1000&auto=format&fit=crop" 
                  alt="Mobile Store" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-64 md:h-80 rounded-3xl overflow-hidden"
              >
                <img 
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop" 
                  alt="Phone Repair" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-primary-50 w-40 h-40"
            >
              <span className="text-4xl font-bold text-primary-600 mb-1">5+</span>
              <span className="text-sm font-medium text-gray-500 text-center leading-tight">Years of<br/>Trust</span>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
              <Award size={16} />
              <span>About Shri Krishna Mobiles</span>
            </div>
            
            <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Your Trusted Mobile Partner in Nagpur
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Located in the bustling heart of Sitabuldi, Nagpur, Shri Krishna Mobiles has grown to become the go-to destination for smartphone enthusiasts and everyday users alike. We combine technical expertise with polite, customer-first service.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="bg-blue-50 p-2 rounded-xl text-blue-600 shrink-0 h-fit">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Guaranteed Authenticity</h4>
                  <p className="text-gray-600">As a JioMart Digital Partner, all our new devices come with an official brand warranty and guarantee of authenticity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-50 p-2 rounded-xl text-green-600 shrink-0 h-fit">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Rigorous Testing</h4>
                  <p className="text-gray-600">Every second-hand device passes through a strict 30-point quality check before it hits our shelves.</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
