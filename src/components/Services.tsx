import { motion } from "motion/react";
import { Smartphone, Wrench, RefreshCw, HeadphonesIcon, BadgeCheck, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "New Smartphones",
    description: "Latest models from top brands at unbeatable prices. Experience the newest technology firsthand.",
    icon: <Smartphone size={28} />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Premium Used Phones",
    description: "Best quality second-hand mobiles, thoroughly tested and certified for your peace of mind.",
    icon: <RefreshCw size={28} />,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Expert Repairs",
    description: "Fast, reliable screen replacements, battery changes, and motherboard repairs by qualified technicians.",
    icon: <Wrench size={28} />,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Accessories",
    description: "A wide range of durable cases, fast chargers, earphones, and screen protectors.",
    icon: <HeadphonesIcon size={28} />,
    color: "bg-purple-50 text-purple-600",
  },
];

const features = [
  {
    title: "JioMart Digital Partner",
    description: "Authorized digital partner ensuring genuine products and official warranties.",
    icon: <BadgeCheck size={24} className="text-primary-600" />
  },
  {
    title: "Best Exchange Value",
    description: "Get the best market price in Burdi area for your old mobile phones.",
    icon: <ShieldCheck size={24} className="text-primary-600" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Everything You Need for Your Mobile life
          </h2>
          <p className="text-lg text-gray-600">
            From purchasing your dream phone to keeping it running perfectly, we are your one-stop mobile solution in Sitabuldi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className={`inline-flex p-4 rounded-2xl mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-32 bg-primary-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold mb-6">Why Choose Shri Krishna Mobiles?</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                We believe in building relationships through polite service, transparent pricing, and extensive technical knowledge. 
              </p>
              <div className="space-y-6">
                {features.map(f => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{f.title}</h4>
                      <p className="text-gray-400">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden hidden md:block">
               <img 
                 referrerPolicy="no-referrer"
                 src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop" 
                 alt="Store interior"
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
