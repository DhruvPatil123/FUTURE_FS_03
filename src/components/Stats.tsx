import { motion } from "motion/react";

const stats = [
  { value: "4.9", suffix: "/5", label: "Google Rating" },
  { value: "118", suffix: "+", label: "Verified Reviews" },
  { value: "1,000", suffix: "+", label: "Repairs Done" },
  { value: "5", suffix: "+", label: "Years in Business" },
];

export default function Stats() {
  return (
    <section className="bg-gray-900 py-16 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-800">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center flex flex-col items-center justify-center"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl lg:text-5xl font-display font-black text-white">{stat.value}</span>
                <span className="text-xl lg:text-2xl font-bold text-primary-500">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
