import { motion } from "motion/react";
import { Smartphone, ClipboardCheck, Wallet } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Bring Your Device",
    description: "Visit our store in Sitabuldi with your used smartphone and its original accessories, if available.",
    icon: <Smartphone size={32} />,
  },
  {
    id: "02",
    title: "Fast Evaluation",
    description: "Our experts will thoroughly inspect your device's condition and software to offer you the best market value.",
    icon: <ClipboardCheck size={32} />,
  },
  {
    id: "03",
    title: "Instant Cash/Upgrade",
    description: "Get paid on the spot or use the exchange value as a discount on a brand new smartphone.",
    icon: <Wallet size={32} />,
  },
];

export default function TradeInProcess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Sell or Exchange Your Old Phone
          </h2>
          <p className="text-lg text-gray-600">
            Getting the best value for your used device has never been easier. Follow our simple 3-step process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gray-100 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-24 h-24 bg-white border-4 border-gray-50 flex items-center justify-center rounded-full shadow-lg shadow-primary-500/10 text-primary-600 mb-8 relative z-10">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded-full text-sm font-bold shadow-sm">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
