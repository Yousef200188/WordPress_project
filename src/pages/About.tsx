import React from 'react';
import { Award, Users, Heart, Shield, Target, Eye } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and dignity, ensuring comfort throughout their healthcare journey.'
    },
    {
      icon: Shield,
      title: 'Excellence & Safety',
      description: 'Maintaining the highest standards of medical excellence while prioritizing patient safety in all our procedures.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Our multidisciplinary teams work together to provide comprehensive, coordinated care for optimal outcomes.'
    }
  ];

  const achievements = [
    'Joint Commission Accredited Hospital',
    'Magnet Recognition for Nursing Excellence',  
    'Top 100 Hospitals Award',
    'Center of Excellence for Cardiac Care',
    'American College of Surgeons Verified Trauma Center',
    'Press Ganey Excellence Award for Patient Experience'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MediCare Hospital</h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              For over 35 years, we've been dedicated to providing exceptional healthcare services 
              with a commitment to medical excellence, innovation, and compassionate patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-sky-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-sky-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide exceptional, patient-centered healthcare services that improve the health 
                and well-being of our community. We are committed to delivering safe, effective, 
                and compassionate care while fostering medical education, research, and innovation.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading healthcare provider in our region, recognized for clinical excellence, 
                innovative treatments, and exceptional patient experience. We strive to set the standard 
                for quality healthcare and be the hospital of choice for patients and medical professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our History</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-sky-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">1985 - Foundation</h3>
                  <p className="text-gray-600">
                    MediCare Hospital was established with a vision to provide accessible, 
                    quality healthcare to the community with just 50 beds and 20 medical staff.
                  </p>
                </div>
                <div className="border-l-4 border-sky-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2000 - Major Expansion</h3>
                  <p className="text-gray-600">
                    Expanded to 200 beds and added specialized departments including cardiology, 
                    neurology, and orthopedics with state-of-the-art equipment.
                  </p>
                </div>
                <div className="border-l-4 border-sky-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2015 - Research Center</h3>
                  <p className="text-gray-600">
                    Established our Medical Research Center, contributing to breakthrough 
                    treatments and participating in international clinical trials.
                  </p>
                </div>
                <div className="border-l-4 border-sky-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2020 - Digital Innovation</h3>
                  <p className="text-gray-600">
                    Launched telemedicine services and implemented AI-assisted diagnostics, 
                    leading healthcare innovation in the digital age.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-sky-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-200">35+</div>
                  <div className="text-sky-100">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-200">300</div>
                  <div className="text-sky-100">Hospital Beds</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-200">500+</div>
                  <div className="text-sky-100">Medical Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-200">50K+</div>
                  <div className="text-sky-100">Patients Annually</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading healthcare organizations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;