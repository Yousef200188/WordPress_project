import React, { useState } from 'react';
import { MapPin, Clock, Award, GraduationCap, Phone, Mail } from 'lucide-react';

const Doctors = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Emergency', 'Oncology'];

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      title: 'Chief of Cardiology',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '15 years',
      education: 'MD Harvard Medical School',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@medicare.com',
      availability: 'Mon-Fri: 9AM-5PM',
      specialties: ['Interventional Cardiology', 'Heart Surgery', 'Cardiac Rehabilitation'],
      awards: ['Top Doctor Award 2023', 'Best Cardiac Surgeon 2022']
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      title: 'Senior Neurologist',
      image: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '12 years',
      education: 'MD Johns Hopkins University',
      phone: '+1 (555) 234-5678',
      email: 'michael.chen@medicare.com',
      availability: 'Mon-Wed: 8AM-6PM',
      specialties: ['Stroke Treatment', 'Epilepsy', 'Movement Disorders'],
      awards: ['Excellence in Neurology 2023', 'Research Achievement Award']
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      title: 'Pediatric Department Head',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '18 years',
      education: 'MD Stanford University',
      phone: '+1 (555) 345-6789',
      email: 'emily.rodriguez@medicare.com',
      availability: 'Tue-Sat: 8AM-4PM',
      specialties: ['Pediatric Cardiology', 'Neonatal Care', 'Adolescent Medicine'],
      awards: ['Outstanding Pediatrician 2023', 'Children\'s Choice Award']
    },
    {
      name: 'Dr. David Thompson',
      specialty: 'Orthopedics',  
      title: 'Orthopedic Surgeon',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '20 years',
      education: 'MD Mayo Clinic',
      phone: '+1 (555) 456-7890',
      email: 'david.thompson@medicare.com',
      availability: 'Mon-Thu: 7AM-3PM',
      specialties: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery'],
      awards: ['Best Orthopedic Surgeon 2023', 'Innovation in Surgery Award']
    },
    {
      name: 'Dr. Lisa Park',
      specialty: 'Emergency',
      title: 'Emergency Medicine Director',
      image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '14 years',
      education: 'MD University of Chicago',
      phone: '+1 (555) 567-8901',
      email: 'lisa.park@medicare.com',
      availability: '24/7 Emergency',
      specialties: ['Trauma Care', 'Critical Care', 'Emergency Surgery'],
      awards: ['Emergency Medicine Excellence 2023', 'Life Saver Award']
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Oncology',
      title: 'Medical Oncologist',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '16 years',
      education: 'MD Memorial Sloan Kettering',
      phone: '+1 (555) 678-9012',
      email: 'james.wilson@medicare.com',
      availability: 'Mon-Fri: 9AM-5PM',
      specialties: ['Medical Oncology', 'Hematology', 'Clinical Trials'],
      awards: ['Oncology Research Award 2023', 'Compassionate Care Award']
    }
  ];

  const filteredDoctors = selectedDepartment === 'All' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedDepartment);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Doctors</h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              Meet our team of board-certified physicians and specialists committed to providing 
              exceptional healthcare with expertise, compassion, and personalized attention.
            </p>
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-sky-100'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                    <p className="text-sky-600 font-medium mb-1">{doctor.title}</p>
                    <p className="text-gray-600 text-sm">{doctor.specialty}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2 text-sky-600" />
                      {doctor.education}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-sky-600" />
                      {doctor.experience} experience
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-sky-600" />
                      {doctor.availability}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, specIndex) => (
                        <span key={specIndex} className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-sky-600" />
                      {doctor.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-sky-600" />
                      {doctor.email}
                    </div>
                  </div>

                  <button className="w-full bg-sky-600 text-white py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Meet Our Doctors?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with one of our expert physicians today and experience 
            personalized healthcare tailored to your needs.
          </p>
          <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Doctors;