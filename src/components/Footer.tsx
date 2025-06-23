import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-sky-600 p-2 rounded-xl">
                <Heart className="h-6 w-6 text-white fill-current" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MediCare</h3>
                <p className="text-sm text-gray-400">Hospital</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Providing exceptional healthcare services with compassion, expertise, and cutting-edge medical technology since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Medical Departments
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Emergency Care</li>
              <li className="text-gray-300">Surgery</li>
              <li className="text-gray-300">Cardiology</li>
              <li className="text-gray-300">Pediatrics</li>
              <li className="text-gray-300">Orthopedics</li>
              <li className="text-gray-300">Radiology</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Medical Center Drive</p>
                  <p className="text-gray-300">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300 text-sm">Emergency: +1 (555) 999-0000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <p className="text-gray-300">info@medicare-hospital.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">24/7 Emergency</p>
                  <p className="text-gray-300 text-sm">Mon-Fri: 8AM-8PM</p>
                  <p className="text-gray-300 text-sm">Sat-Sun: 9AM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MediCare Hospital. All rights reserved. | Licensed Healthcare Provider
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;