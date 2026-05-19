import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquareQuote, CheckCircle, Send } from "lucide-react";

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
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      const formData = new FormData(e.currentTarget);
      formData.append('rating', rating.toString());
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      setFormState('success');
      setTimeout(() => {
        setIsFormOpen(false);
        setFormState('idle');
        setRating(5);
      }, 3000);
    } catch (err) {
      console.error(err);
      setFormState('idle');
    }
  };

  return (
    <section id="reviews" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="lg:w-1/3">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Loved by Our Community
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Don't just take our word for it. See what our customers say about their experience with us in Nagpur.
            </p>
            
            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
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

            <button 
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="w-full py-4 px-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors mb-4 border border-transparent"
            >
              Write a Review
            </button>

            <AnimatePresence>
              {isFormOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    {formState === 'success' ? (
                      <div className="text-center py-8">
                        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h3>
                        <p className="text-gray-600">Your review has been submitted successfully.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className={`p-1 focus:outline-none ${star <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
                              >
                                <Star size={24} className={star <= rating ? 'fill-current' : ''} />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                          <textarea 
                            id="review" 
                            name="review" 
                            rows={3}
                            required
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none resize-none"
                            placeholder="Tell us about your experience..."
                          ></textarea>
                        </div>
                        <button 
                          type="submit" 
                          disabled={formState === 'submitting'}
                          className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {formState === 'submitting' ? 'Submitting...' : 'Submit Review'}
                          <Send size={16} />
                        </button>
                      </form>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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
