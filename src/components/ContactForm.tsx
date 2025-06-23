'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Validation state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'กรุณากรอกชื่อ-นามสกุล';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'กรุณากรอกอีเมล';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'กรุณากรอกอีเมลให้ถูกต้อง';
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'กรุณากรอกข้อความ';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">ส่งข้อความสำเร็จ!</span>
          </div>
          <p className="mt-2 text-sm">ขอบคุณที่ติดต่อเรา เราจะติดต่อกลับโดยเร็วที่สุด</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="col-span-1">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                ชื่อ-นามสกุล <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="กรุณากรอกชื่อ-นามสกุล"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                อีเมล <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="example@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="col-span-1">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                เบอร์โทรศัพท์
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="0xx-xxx-xxxx"
              />
            </div>

            {/* Subject */}
            <div className="col-span-1">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                เรื่องที่ติดต่อ
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">เลือกเรื่องที่ติดต่อ</option>
                <option value="admission">สอบถามการรับสมัคร</option>
                <option value="curriculum">สอบถามหลักสูตรการเรียนการสอน</option>
                <option value="tuition">สอบถามค่าธรรมเนียมการศึกษา</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>

            {/* Message */}
            <div className="col-span-2">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                ข้อความ <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="กรุณากรอกข้อความที่ต้องการติดต่อ"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="btn w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  กำลังส่งข้อความ...
                </span>
              ) : (
                'ส่งข้อความ'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;