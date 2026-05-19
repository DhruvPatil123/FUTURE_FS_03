import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide a warranty on second-hand phones?",
    answer: "Yes! All our premium used phones undergo strict quality checks. Depending on the model, we provide a testing warranty so you can buy with complete peace of mind."
  },
  {
    question: "Can I exchange my old phone for a new one?",
    answer: "Absolutely. We offer the best exchange values in the Sitabuldi area. Bring your old device to our store, and we'll evaluate it on the spot to give you an instant discount on your new purchase."
  },
  {
    question: "How long do screen repairs usually take?",
    answer: "Most screen replacements and minor repairs are done within 1-2 hours depending on part availability. We value your time and try to provide same-day service."
  },
  {
    question: "Do you sell original accessories?",
    answer: "Yes, we stock genuine charging cables, adapters, and high-quality cases and screen protectors to keep your device safe."
  },
  {
    question: "Are you an authorized retailer?",
    answer: "We are an official JioMart Digital Partner, which means you get access to genuine products, official warranties, and competitive pricing."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers. If you don't see your question here, feel free to reach out.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`shrink-0 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary-600' : ''}`}
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
