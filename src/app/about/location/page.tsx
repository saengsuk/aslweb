import React from 'react';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'ที่ตั้งโรงเรียน | ASL - Assumption Convent Lam Narai',
  description: 'ข้อมูลที่ตั้งและแผนที่การเดินทางมาโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์',
};

export default function LocationPage() {
  return (
    <>
      <PageHeader 
        title="ที่ตั้งโรงเรียน" 
        subtitle="ข้อมูลที่ตั้งและแผนที่การเดินทางมาโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
        bgImage="/images/slides/02.png"
      />

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Address and Contact Information */}
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
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    โทรศัพท์: 036-461-234
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    อีเมล: info@asl.ac.th
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    เว็บไซต์: www.asl.ac.th
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    เวลาทำการ: จันทร์-ศุกร์ 7:30 - 16:30 น.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">การเดินทาง</h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h4 className="font-bold mb-2">โดยรถยนต์ส่วนตัว</h4>
                    <p>จากกรุงเทพฯ ใช้ถนนพหลโยธิน (ทางหลวงหมายเลข 1) มุ่งหน้าไปทางจังหวัดสระบุรี จากนั้นเข้าสู่ถนนสายสระบุรี-หล่มสัก (ทางหลวงหมายเลข 21) มุ่งหน้าไปทางอำเภอชัยบาดาล จังหวัดลพบุรี โรงเรียนตั้งอยู่บนถนนสุระนารายณ์ในเขตอำเภอชัยบาดาล</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">โดยรถโดยสารประจำทาง</h4>
                    <p>มีรถโดยสารประจำทางจากกรุงเทพฯ (หมอชิต 2) ไปยังอำเภอชัยบาดาล จังหวัดลพบุรี หลายเที่ยวต่อวัน เมื่อถึงอำเภอชัยบาดาลสามารถใช้บริการรถสองแถวหรือรถจักรยานยนต์รับจ้างมายังโรงเรียน</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">แผนที่</h2>
              <div className="bg-white p-4 rounded-lg shadow-md h-[600px]">
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
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">พิกัด GPS</h3>
                <p className="text-gray-600 mb-4">ละติจูด: 15.6325° N, ลองจิจูด: 101.0472° E</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.google.com/maps/dir//15.6325,101.0472/@15.6325,101.0472,15z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2"
                  >
                    นำทางด้วย Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}