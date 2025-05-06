
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/PPF-LOGO.jpg" alt="Pentapolis Foundation Logo" className="h-20 w-20" />
              <span className="text-xl lg:text-4xl font-bold text-white">Pentapolis Foundation</span>
            </div>
            <p className="text-sm">
              Empowering communities through sustainable development and education. Together, we can make a lasting difference in people's lives.
            </p>
            <h3 className="text-lg font-semibold text-white mb-4 mt-4">Follow Us</h3>
            <div className="flex space-x-4 items-center justify-center lg:justify-start">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center lg:text-left">
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/finance" className="hover:text-yellow-400 transition-colors">Financials</Link></li>
              <li><Link to="/projects" className="hover:text-yellow-400 transition-colors">Our Projects</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><Link to="/donate" className="hover:text-yellow-400 transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us: Chennai</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center lg:justify-start">
                <Mail className="h-5 w-5 mr-2 text-yellow-400" />
                <a href="mailto:pppmo@pentapolisfoundation.com" className="hover:text-yellow-400 transition-colors">
                  pppmo@pentapolisfoundation.com
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <Phone className="h-5 w-5 mr-2 text-yellow-400" />
                <a href="tel:+91 4427156754" className="hover:text-yellow-400 transition-colors">
                  +91 4427156754
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <MapPin className="h-8 w-8 mr-2 text-yellow-400" />
                <p>11, Nehru Street, Irrungattukottai Sriperumbudur, Kancheepuram,<br />Chennai, Tamil Nadu, 602117</p>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us: Kolkata</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center lg:justify-start">
                <Mail className="h-5 w-5 mr-2 text-yellow-400" />
                <a href="mailto:pppmo@pentapolisfoundation.com" className="hover:text-yellow-400 transition-colors">
                  pppmo@pentapolisfoundation.com
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <Phone className="h-5 w-5 mr-2 text-yellow-400" />
                <a href="tel:+91 4427156754" className="hover:text-yellow-400 transition-colors">
                  +91 4427156754
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <MapPin className="h-8 w-10 mr-2 text-yellow-400" />
                <p>1st Floor, 14A Radhanath Chowdhury Road, China Building, Near Seva Kendra,<br /> Kolkata, West Bengal, 700015</p>
              </li>
            </ul>
            
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pentapolis Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;