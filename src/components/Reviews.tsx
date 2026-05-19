import { motion } from "motion/react";
import { Star, MessageSquareQuote } from "lucide-react";

const reviews = [
  {
    name: "Regular Customer",
    excerpt: "The owner and staff all are very polite and knowledgeable.",
    rating: 5,
    date: "A month ago"
  },
  {
    name: "Happy Buyer",
    excerpt: "Best shop in burdi area ..best price given for my used phone",
    rating: 5,
    date: "2 months ago"
  },
  {
    name: "Tech Enthusiast",
    excerpt: "Best quality second hand mobile 📲",
    rating: 5,
    date: "3 months ago"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/3">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Loved by Our Community
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Don't just take our word for it. See what our customers say about their experience with us in Nagpur.
            </p>
            
            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-5xl font-display font-bold text-gray-900">4.9</div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-current" />
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-500">Based on 118+ Google Reviews</div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6 w-full">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-3xl shadow-sm border border-gray-100 ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                    <MessageSquareQuote size={24} />
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 font-medium text-lg mb-6 line-clamp-4">
                  "{review.excerpt}"
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.date}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
