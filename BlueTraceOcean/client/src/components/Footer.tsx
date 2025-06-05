import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-water text-ocean-light text-2xl animate-wave"></i>
              <span className="text-xl font-bold">BlueTrace</span>
            </div>
            <p className="text-ocean-light text-sm">
              Empowering ocean conservation through education and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-ocean-light">
              <li><Link href="/math" className="hover:text-white transition-colors">Mathematics</Link></li>
              <li><Link href="/science" className="hover:text-white transition-colors">Marine Science</Link></li>
              <li><Link href="/geography" className="hover:text-white transition-colors">Ocean Geography</Link></li>
              <li><Link href="/engineering" className="hover:text-white transition-colors">Engineering Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-ocean-light">
              <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Sets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Teacher Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <i className="fab fa-twitter text-xl text-ocean-light hover:text-white cursor-pointer transition-colors"></i>
              <i className="fab fa-facebook text-xl text-ocean-light hover:text-white cursor-pointer transition-colors"></i>
              <i className="fab fa-instagram text-xl text-ocean-light hover:text-white cursor-pointer transition-colors"></i>
              <i className="fab fa-linkedin text-xl text-ocean-light hover:text-white cursor-pointer transition-colors"></i>
            </div>
          </div>
        </div>
        
        <div className="border-t border-ocean-surface/30 mt-8 pt-8 text-center text-sm text-ocean-light">
          <p>&copy; 2024 BlueTrace. All rights reserved. | Protecting our oceans for future generations.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
