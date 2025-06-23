import React from 'react';
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Eye, 
  Zap, 
  Stethoscope, 
  Activity,
  Scissors,
  X,
  Shield,
  Pill
} from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      name: 'Cardiology',
      icon: Heart,
      color: 'bg-red-500',
      description: 'Comprehensive heart care including diagnostics, interventional procedures, and cardiac surgery.',
      services: ['Cardiac Catheterization', 'Echocardiography', 'Heart Surgery', 'Pacemaker Implantation', 'Cardiac Rehabilitation'],
      specialists: 8
    },
    {
      name: 'Neurology',
      icon: Brain,
      color: 'bg-purple-500',
      description: 'Advanced neurological care for brain, spine, and nervous system disorders.',
      services: ['Stroke Treatment', 'Epilepsy Care', 'Brain Surgery', 'Spine Surgery', 'Neurological Rehabilitation'],
      specialists: 6
    },
    {
      name: 'Orthopedics',
      icon: Bone,
      color: 'bg-blue-500',
      description: 'Expert care for bones, joints, muscles, and musculoskeletal system disorders.',
      services: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Arthroscopy', 'Physical Therapy'],
      specialists: 10
    },
    {
      name: 'Pediatrics',
      icon: Baby,
      color: 'bg-pink-500',
      description: 'Specialized medical care for infants, children, and adolescents.',
      services: ['Newborn Care', 'Vaccinations', 'Pediatric Surgery', 'Child Development', 'Adolescent Medicine'],
      specialists: 12
    },
    {
      name: 'Emergency Medicine',
      icon: Zap,
      color: 'bg-yellow-500',
      description: '24/7 emergency care with trauma center and critical care capabilities.',
      services: ['Trauma Care', 'Emergency Surgery', 'Critical Care', 'Poison Control', 'Emergency Pediatrics'],
      specialists: 15
    },
    {
      name: 'Ophthalmology',
      icon: Eye,
      color: 'bg-green-500',
      description: 'Complete eye care including surgery, vision correction, and retinal treatments.',
      services: ['Cataract Surgery', 'LASIK Surgery', 'Retinal Treatment', 'Glaucoma Care', 'Pediatric Ophthalmology'],
      specialists: 5
    },
    {
      name: 'Internal Medicine',
      icon: Stethoscope,
      color: 'bg-indigo-500',
      description: 'Primary care and treatment for adult diseases and chronic conditions.',
      services: ['Preventive Care', 'Chronic Disease Management', 'Health Screenings', 'Geriatric Care', 'Infectious Diseases'],
      specialists: 18
    },
    {
      name: 'Surgery',
      icon: Scissors,
      color: 'bg-gray-600',
      description: 'Advanced surgical procedures with minimally invasive and robotic surgery options.',
      services: ['General Surgery', 'Minimally Invasive Surgery', 'Robotic Surgery', 'Bariatric Surgery', 'Vascular Surgery'],
      specialists: 14
    },
    {
      name: 'Oncology',
      icon: Activity,
      color: 'bg-orange-500',
      description: 'Comprehensive cancer care with chemotherapy, radiation, and surgical oncology.',
      services: ['Chemotherapy', 'Radiation Therapy', 'Surgical Oncology', 'Immunotherapy', 'Cancer Screening'],
      specialists: 8
    },
    {
      name: 'Radiology',
      icon: X,
      color: 'bg-teal-500',
      description: 'Advanced imaging services including MRI, CT, ultrasound, and interventional radiology.',
      services: ['MRI Imaging', 'CT Scans', 'Ultrasound', 'X-rays', 'Interventional Radiology'],
      specialists: 7
    },
    {
      name: 'Anesthesiology',
      icon: Shield,
      color: 'bg-cyan-500',
      description: 'Pain management and anesthesia services for surgical and medical procedures.',
      services: ['Surgical Anesthesia', 'Pain Management', 'Critical Care', 'Regional Anesthesia', 'Chronic Pain Treatment'],
      specialists: 9
    },
    {
      name: 'Pharmacy',
      icon: Pill,
      color: 'bg-emerald-500',
      description: 'Clinical pharmacy services with medication management and drug information.',
      services: ['Medication Dispensing', 'Drug Information', 'Clinical Consultations', 'IV Compounding', 'Medication Reviews'],
      specialists: 6
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Departments</h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              Comprehensive healthcare services across multiple specialties with expert medical professionals 
              and state-of-the-art technology to ensure the best possible patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`${dept.color} p-4 rounded-2xl`}>
                      <dept.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{dept.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{dept.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Services:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dept.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        {dept.specialists} Specialists Available
                      </div>
                      <button className="text-sky-600 hover:text-sky-700 font-medium text-sm hover:underline">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Medical Consultation?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Our expert specialists are here to provide you with the best possible care. 
            Schedule an appointment with the right department for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors">
              Book Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;