import { Instagram, Smartphone, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 pt-20 pb-10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="bg-primary-600 p-2 rounded-xl">
                <Smartphone size={24} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Shri Krishna <span className="text-primary-500">Mobiles</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for all things mobile in Nagpur. Premium devices, reliable repairs, and unmatched service.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/shree_krishna_mobile03/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-all text-gray-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-primary-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary-500 transition-colors">Services</a></li>
              <li><a href="#reviews" className="hover:text-primary-500 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-4">
              <li><span className="hover:text-white transition-colors cursor-default">New Smartphones</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Second-hand Mobiles</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Mobile Repairs</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Mobile Accessories</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Phone Exchange</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="text-primary-500 shrink-0" />
                <span>Modi No.4, Hanuman Gali, beside Gujrat Lodge, Sitabuldi, Nagpur</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={20} className="text-primary-500 shrink-0" />
                <span>093263 70959</span>
              </li>
              <li className="flex gap-3 items-center">
                <Instagram size={20} className="text-primary-500 shrink-0" />
                <span>@shree_krishna_mobile03</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Shri Krishna Mobiles. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Powered by Local Business Trust</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
