import { motion } from "motion/react";
import { Tag, Zap, Gift } from "lucide-react";

const offers = [
  {
    title: "Weekend Exchange Bonus",
    description: "Get up to ₹2,000 extra value on your old smartphone when you upgrade to a new 5G device this weekend.",
    icon: <Zap size={24} />,
    color: "bg-amber-100 text-amber-600 border-amber-200",
    ribbon: "Limited Time"
  },
  {
    title: "Free Accessories Bundle",
    description: "Receive a premium screen protector, protective case, and earphones with every new premium smartphone purchase.",
    icon: <Gift size={24} />,
    color: "bg-rose-100 text-rose-600 border-rose-200",
    ribbon: "Popular"
  },
  {
    title: "Repair Discount",
    description: "Flat 15% off on all screen and battery replacements. Book your repair slot today and get your phone fixed in an hour.",
    icon: <Tag size={24} />,
    color: "bg-emerald-100 text-emerald-600 border-emerald-200",
    ribbon: "Best Value"
  }
];

export default function SpecialOffers() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Exclusive In-Store Offers
          </h2>
          <p className="text-lg text-gray-600">
            Don't miss out on our latest deals and bundles available exclusively at our Sitabuldi store.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white p-8 rounded-3xl border-2 ${offer.color} shadow-sm hover:shadow-lg transition-shadow overflow-hidden`}
            >
              <div className="absolute top-6 right-0 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-l-full uppercase tracking-wider">
                {offer.ribbon}
              </div>
              <div className={`inline-flex p-3 rounded-xl mb-6 bg-white shadow-sm border ${offer.color}`}>
                {offer.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{offer.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {offer.description}
              </p>
              <a 
                href="https://wa.me/919326370959" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-auto font-semibold text-gray-900 hover:text-primary-600 transition-colors"
              >
                Claim Offer &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
