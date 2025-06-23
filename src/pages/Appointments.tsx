import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';

const Appointments = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    department: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
    insurance: '',
    isNewPatient: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = [
    'Cardiology',
    'Neurology', 
    'Orthopedics',
    'Pediatrics',
    'Emergency Medicine',
    'Oncology',
    'Internal Medicine',
    'Surgery'
  ];

  const doctors = {
    'Cardiology': ['Dr. Sarah Johnson', 'Dr. Robert Williams'],
    'Neurology': ['Dr. Michael Chen', 'Dr. Jennifer Davis'],
    'Orthopedics': ['Dr. David Thompson', 'Dr. Maria Garcia'],
    'Pediatrics': ['Dr. Emily Rodriguez', 'Dr. Kevin Park'],
    'Emergency Medicine': ['Dr. Lisa Park', 'Dr. James Miller'],
    'Oncology': ['Dr. James Wilson', 'Dr. Susan Lee'],
    'Internal Medicine': ['Dr. Patricia Brown', 'Dr. Daniel Taylor'],
    'Surgery': ['Dr. Christopher Jones', 'Dr. Amanda White']
  };

  const timeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Appointment data:', formData);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mx-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointment Requested!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for scheduling your appointment. Our team will contact you within 24 hours to confirm your appointment details.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-2">Appointment Summary:</h3>
            <p className="text-sm text-gray-600">Patient: {formData.firstName} {formData.lastName}</p>
            <p className="text-sm text-gray-600">Department: {formData.department}</p>
            <p className="text-sm text-gray-600">Doctor: {formData.doctor}</p>
            <p className="text-sm text-gray-600">Date: {formData.appointmentDate}</p>
            <p className="text-sm text-gray-600">Time: {formData.appointmentTime}</p>
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors"
          >
            Schedule Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              Schedule your visit with our expert medical professionals. We're here to provide 
              you with the best possible healthcare experience.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Form Header */}
              <div className="bg-sky-600 text-white p-8">
                <h2 className="text-3xl font-bold mb-2">Schedule Your Appointment</h2>
                <p className="text-sky-100">Please fill out the form below and we'll contact you to confirm your appointment.</p>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                      <User className="h-6 w-6 mr-2 text-sky-600" />
                      Personal Information
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider</label>
                        <input
                          type="text"
                          name="insurance"
                          value={formData.insurance}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder="Enter your insurance provider"
                        />
                      </div>
                      <div>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.isNewPatient}
                            onChange={(e) => setFormData(prev => ({ ...prev, isNewPatient: e.target.checked }))}
                            className="mr-2 h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">I am a new patient</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                      <Calendar className="h-6 w-6 mr-2 text-sky-600" />
                      Appointment Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        >
                          <option value="">Select a department</option>
                          {departments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Doctor</label>
                        <select
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          disabled={!formData.department}
                        >
                          <option value="">Select a doctor</option>
                          {formData.department && doctors[formData.department as keyof typeof doctors]?.map(doctor => (
                            <option key={doctor} value={doctor}>{doctor}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          name="appointmentDate"
                          value={formData.appointmentDate}
                          onChange={handleInputChange}
                          min={getTomorrowDate()}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <select
                          name="appointmentTime"
                          value={formData.appointmentTime}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit *</label>
                        <textarea
                          name="reason"
                          value={formData.reason}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder="Please describe the reason for your visit..."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <button
                    type="submit"
                    className="w-full bg-sky-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Request Appointment
                  </button>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    * Required fields. We'll contact you within 24 hours to confirm your appointment.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help Scheduling?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="h-12 w-12 mx-auto mb-4 text-sky-200" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-sky-100">+1 (555) 123-4567</p>
                <p className="text-sky-100 text-sm">Mon-Fri: 8AM-8PM</p>
              </div>
              <div className="text-center">
                <Mail className="h-12 w-12 mx-auto mb-4 text-sky-200" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-sky-100">appointments@medicare.com</p>
                <p className="text-sky-100 text-sm">We'll respond within 4 hours</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-sky-200" />
                <h3 className="text-xl font-bold mb-2">Emergency</h3>
                <p className="text-sky-100">+1 (555) 999-0000</p>
                <p className="text-sky-100 text-sm">24/7 Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;