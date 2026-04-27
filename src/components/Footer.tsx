import { ChevronDown, Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Waves } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* country selection */}
        <div className="mb-12">
          <span className="text-xs font-bold text-gray-400 uppercase block mb-3">Change Country</span>
          <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 text-[#000E55] font-semibold text-sm">
            Corporate | English
            <ChevronDown className="w-4 h-4 text-[#FF690E]" />
          </button>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-t border-gray-100 pt-12">
          <div>
            <h4 className="text-[#000E55] font-bold uppercase text-xs mb-6 tracking-wider">Corporate Info</h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#000E55] font-bold uppercase text-xs mb-6 tracking-wider">Travel Info</h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Before you go</a></li>
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Our Fares</a></li>
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Insurance</a></li>
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Terms and conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#000E55] font-bold uppercase text-xs mb-6 tracking-wider">News & Contacts</h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Media room</a></li>
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Online Brochures</a></li>
              <li><a href="#" className="hover:text-[#FF690E] transition-colors">Accessibility Statement</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="flex flex-col items-center gap-8 border-t border-gray-100 pt-12">
          <div className="flex items-center gap-6">
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#FF690E] hover:text-white transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#FF690E] hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#FF690E] hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#FF690E] hover:text-white transition-all">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#FF690E] hover:text-white transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-[#FF690E] p-1 rounded-sm">
                <Waves className="w-5 h-5 text-[#000E55]" />
              </div>
              <span className="text-xl font-bold tracking-[0.2em] text-[#000E55]">ATREA</span>
            </div>
            <p className="text-xs text-gray-400 font-medium whitespace-pre-line">
              © 2026 Atrea Cruises S.A. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
