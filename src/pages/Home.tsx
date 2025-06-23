import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  Award, 
  Stethoscope,
  Brain,
  Zap,
  Eye,
  Baby,
  Bone
} from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '25+', label: 'Years of Excellence', icon: Award },
    { number: '50+', label: 'Expert Doctors', icon: Users },
    { number: '24/7', label: 'Emergency Care', icon: Clock },
    { number: '10000+', label: 'Happy Patients', icon: Heart },
  ];

  const departments = [
    { name: 'Cardiology', icon: Heart, color: 'text-red-500' },
    { name: 'Neurology', icon: Brain, color: 'text-purple-500' },
    { name: 'Emergency', icon: Zap, color: 'text-yellow-500' },
    { name: 'Pediatrics', icon: Baby, color: 'text-pink-500' },
    { name: 'Orthopedics', icon: Bone, color: 'text-blue-500' },
    { name: 'Ophthalmology', icon: Eye, color: 'text-green-500' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-600 to-sky-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Health is Our
              <span className="block text-sky-200">Priority</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-sky-100 leading-relaxed">
              Experience world-class healthcare with our team of expert doctors, 
              state-of-the-art facilities, and compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointments"
                className="bg-white text-sky-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-50 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-sky-700 transition-all duration-200 inline-flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Leading Healthcare Excellence Since 1985
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                MediCare Hospital has been at the forefront of medical innovation, 
                providing comprehensive healthcare services with a patient-centered approach. 
                Our commitment to excellence has earned us recognition as a leading healthcare institution.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-sky-600" />
                  <span className="text-gray-700">Internationally Accredited Facility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-sky-600" />
                  <span className="text-gray-700">Board-Certified Specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-sky-600" />
                  <span className="text-gray-700">Compassionate Patient Care</span>
                </div>
              </div>
              <Link
                to="/about"
                className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <div className="bg-sky-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Quality Healthcare</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Our multidisciplinary team of healthcare professionals works together 
                to provide personalized treatment plans and ensure the best possible outcomes for our patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Medical Departments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services across multiple specialties with expert medical professionals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-gray-50 p-6 rounded-2xl hover:bg-sky-50 transition-all duration-200 group-hover:shadow-lg">
                  <dept.icon className={`h-12 w-12 mx-auto mb-4 ${dept.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold text-gray-800 group-hover:text-sky-600 transition-colors">
                    {dept.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/departments"
              className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors inline-flex items-center"
            >
              View All Departments
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Better Healthcare?</h2>
          <p className="text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
            Schedule your appointment today and let our expert medical team take care of your health needs.
          </p>
          <Link
            to="/appointments"
            className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-50 transition-colors inline-flex items-center shadow-lg hover:shadow-xl"
          >
            Book Your Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;