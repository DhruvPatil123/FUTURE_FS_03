import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";

const businessHours = [
  { day: "Monday", hours: "11:30 am – 9:00 pm" },
  { day: "Tuesday", hours: "11:30 am – 9:00 pm" },
  { day: "Wednesday", hours: "11:30 am – 9:00 pm" },
  { day: "Thursday", hours: "11:30 am – 9:00 pm" },
  { day: "Friday", hours: "11:30 am – 9:00 pm" },
  { day: "Saturday", hours: "11:30 am – 9:00 pm" },
  { day: "Sunday", hours: "12:00 pm – 5:00 pm" },
];

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate or actually call backend
    try {
      const formData = new FormData(e.currentTarget);
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      setFormState('success');
    } catch (err) {
      console.error(err);
      setFormState('idle');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-gray-600">
            We're located in the heart of Nagpur. Drop by for the best mobile deals, or reach out to us with any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Info Panels */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-primary-600">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-xl text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Modi No.4, Hanuman Gali, beside Gujrat Lodge,<br />
                Sitabuldi, Nagpur,<br />
                Maharashtra 440012
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-primary-600">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-xl text-gray-900">Contact</h3>
              </div>
              <a href="tel:09326370959" className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
                093263 70959
              </a>
              <p className="text-gray-500 mt-2 text-sm">Call us or text via WhatsApp</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-xl shadow-sm text-primary-600">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-xl text-gray-900">Hours</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((bh) => (
                  <div key={bh.day} className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">{bh.day}</span>
                    <span className="text-gray-900 font-semibold">{bh.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Form and Map */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-800 p-6 rounded-2xl flex flex-col items-center text-center gap-4"
                >
                  <CheckCircle size={48} className="text-green-500" />
                  <div>
                    <p className="font-bold text-xl mb-2">Message Sent!</p>
                    <p>Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-4 px-6 py-2 bg-green-100 hover:bg-green-200 text-green-800 font-medium rounded-full transition-colors"
                  >
                    Send Another Box
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                        placeholder="Your mobile number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none resize-none"
                      placeholder="I'm looking for a second-hand iPhone 13..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="w-full h-80 rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4398322615564!2d79.08375681146743!3d21.1348825804555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c08cd4a123eb%3A0xe7261a99fba248ab!2sSitabuldi%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Shri Krishna Mobiles Location"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
