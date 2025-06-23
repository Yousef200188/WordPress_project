import React from 'react';
import { 
  Clock, 
  Shield, 
  Heart, 
  Microscope, 
  Zap, 
  Stethoscope, 
  Scissors,
  Pill,
  Activity,
  Brain,
  Baby,
  Eye
} from 'lucide-react';

const Services = () => {
  const emergencyServices = [
    {
      name: '24/7 Emergency Care',
      icon: Zap,
      description: 'Round-the-clock emergency medical services with immediate response and critical care capabilities.'
    },
    {
      name: 'Trauma Center',
      icon: Shield,
      description: 'Level II trauma center equipped to handle severe injuries and life-threatening emergencies.'
    },
    {
      name: 'Emergency Surgery',
      icon: Scissors,
      description: 'Immediate surgical interventions available 24/7 with specialized emergency surgical teams.'
    }
  ];

  const specialtyServices = [
    {
      name: 'Cardiac Care',
      icon: Heart,
      description: 'Comprehensive heart care including catheterization, surgery, and rehabilitation programs.',
      features: ['Cardiac Catheterization', 'Heart Surgery', 'Pacemaker Implantation', 'Cardiac Rehabilitation']
    },
    {
      name: 'Neurology & Neurosurgery',
      icon: Brain,
      description: 'Advanced treatment for brain, spine, and nervous system disorders with cutting-edge technology.',
      features: ['Brain Surgery', 'Spine Surgery', 'Stroke Treatment', 'Epilepsy Care']
    },
    {
      name: 'Maternal & Child Health',
      icon: Baby,
      description: 'Complete care for mothers and children from pregnancy through adolescence.',
      features: ['Obstetrics', 'Neonatal ICU', 'Pediatric Surgery', 'Child Development']
    },
    {
      name: 'Cancer Care',
      icon: Activity,
      description: 'Comprehensive oncology services with chemotherapy, radiation, and surgical treatments.',
      features: ['Medical Oncology', 'Radiation Therapy', 'Surgical Oncology', 'Cancer Screening']
    }
  ];

  const diagnosticServices = [
    {
      name: 'Advanced Imaging',
      icon: Eye,
      description: 'State-of-the-art imaging technology for accurate diagnosis and treatment planning.',
      services: ['MRI', 'CT Scan', 'Ultrasound', 'X-Ray', 'Mammography', 'Nuclear Medicine']
    },
    {
      name: 'Laboratory Services',
      icon: Microscope,
      description: 'Comprehensive laboratory testing with rapid results and specialized diagnostic capabilities.',
      services: ['Blood Tests', 'Microbiology', 'Pathology', 'Genetics', 'Toxicology', 'Immunology']
    },
    {
      name: 'Cardiology Diagnostics',
      icon: Activity,
      description: 'Specialized cardiac testing and monitoring for heart health assessment.',
      services: ['EKG', 'Echocardiogram', 'Stress Testing', 'Holter Monitoring', 'Cardiac Catheterization']
    }
  ];

  const supportServices = [
    'Physical Therapy',
    'Occupational Therapy',
    'Speech Therapy',
    'Nutrition Counseling',
    'Social Services',
    'Chaplain Services',
    'Patient Education',
    'Discharge Planning'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Services</h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              Comprehensive healthcare services delivered by expert medical professionals using 
              state-of-the-art technology and evidence-based treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Emergency Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              24/7 emergency care when you need it most, staffed by experienced emergency medicine specialists
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Specialty Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced medical specialties with board-certified physicians and cutting-edge treatments
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {specialtyServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:bg-sky-50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-100 p-4 rounded-2xl">
                    <service.icon className="h-8 w-8 text-sky-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Diagnostic Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced diagnostic capabilities for accurate and timely medical evaluations
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {diagnosticServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.services.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Support Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive support services to assist in your recovery and well-being
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportServices.map((service, index) => (
                <div key={index} className="bg-sky-50 p-6 rounded-xl text-center hover:bg-sky-100 transition-colors">
                  <Stethoscope className="h-8 w-8 text-sky-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Quality & Accreditation</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-sky-200" />
                <h3 className="text-xl font-bold mb-2">Joint Commission Accredited</h3>
                <p className="text-sky-100">Highest standards of patient safety and quality care</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-sky-200" />
                <h3 className="text-xl font-bold mb-2">Magnet Recognition</h3>
                <p className="text-sky-100">Excellence in nursing care and patient outcomes</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-sky-200" />
                <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                <p className="text-sky-100">Round-the-clock medical care when you need it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Medical Services?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our services or schedule an appointment with one of our specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
              Book Appointment
            </button>
            <button className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 hover:text-white transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;