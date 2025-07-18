import React from 'react';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'ติดต่อเรา | ASL - Assumption Convent Lam Narai',
  description: 'ข้อมูลการติดต่อโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ ที่อยู่ เบอร์โทรศัพท์ อีเมล และแบบฟอร์มติดต่อ',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="ติดต่อเรา" 
        subtitle="ข้อมูลการติดต่อและแบบฟอร์มสำหรับสอบถามข้อมูลเพิ่มเติม"
        bgImage="/images/slides/01.png"
      />

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">ข้อมูลติดต่อ</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">ที่อยู่</h3>
                <address className="not-italic text-gray-600 mb-6">
                  <p className="mb-2">โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์</p>
                  <p className="mb-2">เลขที่ 123 ถนนสุระนารายณ์ ตำบลลำนารายณ์</p>
                  <p className="mb-2">อำเภอชัยบาดาล จังหวัดลพบุรี 15130</p>
                </address>
                
                <h3 className="text-xl font-bold text-primary mb-4">ติดต่อเรา</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>โทรศัพท์: 036-461-234</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>อีเมล: info@asl.ac.th</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span>เว็บไซต์: www.asl.ac.th</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>เวลาทำการ: จันทร์-ศุกร์ 7:30 - 16:30 น.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">ติดตามเรา</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">ส่งข้อความถึงเรา</h2>
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">แผนที่</h2>
            <div className="bg-white p-4 rounded-lg shadow-md h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.990557053455!2d101.0472!3d15.6325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM3JzU3LjAiTiAxMDHCsDAyJzQ5LjkiRQ!5e0!3m2!1sen!2sth!4v1623825645789!5m2!1sen!2sth" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="แผนที่โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
                className="rounded"
              ></iframe>
            </div>
          </div>

          {/* Departments */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">ฝ่ายงานต่างๆ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">ฝ่ายวิชาการ</h3>
                <p className="text-gray-600 mb-2">ติดต่อสอบถามเกี่ยวกับหลักสูตรการเรียนการสอน</p>
                <p className="text-gray-600">โทร: 036-461-234 ต่อ 101</p>
                <p className="text-gray-600">อีเมล: academic@asl.ac.th</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">ฝ่ายทะเบียน</h3>
                <p className="text-gray-600 mb-2">ติดต่อสอบถามเกี่ยวกับการรับสมัครนักเรียน</p>
                <p className="text-gray-600">โทร: 036-461-234 ต่อ 102</p>
                <p className="text-gray-600">อีเมล: admission@asl.ac.th</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">ฝ่ายการเงิน</h3>
                <p className="text-gray-600 mb-2">ติดต่อสอบถามเกี่ยวกับค่าธรรมเนียมการศึกษา</p>
                <p className="text-gray-600">โทร: 036-461-234 ต่อ 103</p>
                <p className="text-gray-600">อีเมล: finance@asl.ac.th</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">ฝ่ายกิจการนักเรียน</h3>
                <p className="text-gray-600 mb-2">ติดต่อสอบถามเกี่ยวกับกิจกรรมนักเรียน</p>
                <p className="text-gray-600">โทร: 036-461-234 ต่อ 104</p>
                <p className="text-gray-600">อีเมล: student@asl.ac.th</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">ฝ่ายแนะแนว</h3>
                <p className="text-gray-600 mb-2">ติดต่อสอบถามเกี่ยวกับการแนะแนวการศึกษาต่อ</p>
                <p className="text-gray-600">โทร: 036-461-234 ต่อ 105</p>
                <p className="text-gray-600">อีเมล: guidance@asl.ac.th</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">ฝ่ายธุรการ</h3>
                <p className="text-gray-600 mb-2">ติดต่อสอบถามทั่วไป</p>
                <p className="text-gray-600">โทร: 036-461-234 ต่อ 100</p>
                <p className="text-gray-600">อีเมล: info@asl.ac.th</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}