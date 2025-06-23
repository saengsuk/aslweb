import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'ปรัชญาโรงเรียน | ASL - Assumption Convent Lam Narai',
  description: 'ปรัชญา วิสัยทัศน์ พันธกิจ และเป้าหมายของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์',
};

export default function PhilosophyPage() {
  // Core values
  const coreValues = [
    {
      title: 'ความเป็นเลิศทางวิชาการ',
      description: 'มุ่งมั่นพัฒนาการเรียนการสอนที่มีคุณภาพ เพื่อให้นักเรียนมีความรู้และทักษะที่จำเป็นในศตวรรษที่ 21',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'คุณธรรมจริยธรรม',
      description: 'ปลูกฝังคุณธรรม จริยธรรม และค่านิยมที่ดีงาม เพื่อให้นักเรียนเป็นคนดีของสังคม',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'ทักษะชีวิต',
      description: 'พัฒนาทักษะชีวิตที่จำเป็น เพื่อให้นักเรียนสามารถดำรงชีวิตในสังคมได้อย่างมีความสุข',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'ความเป็นสากล',
      description: 'เตรียมความพร้อมให้นักเรียนเป็นพลเมืองโลก มีความเข้าใจในความหลากหลายทางวัฒนธรรม',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <PageHeader 
        title="ปรัชญาโรงเรียน" 
        subtitle="ปรัชญา วิสัยทัศน์ พันธกิจ และเป้าหมายของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
        bgImage="/images/slides/01.png"
      />

      <section className="py-16">
        <div className="container mx-auto">
          {/* Philosophy Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ปรัชญาโรงเรียน</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">"ความรู้คู่คุณธรรม นำชีวิตสู่ความสำเร็จ"</h3>
              <p className="text-gray-600 mb-4">
                โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์มุ่งมั่นที่จะพัฒนานักเรียนให้เป็นผู้มีความรู้ทางวิชาการควบคู่ไปกับการมีคุณธรรม จริยธรรม 
                เพื่อให้นักเรียนสามารถดำเนินชีวิตได้อย่างมีความสุขและประสบความสำเร็จในทุกด้าน
              </p>
              <p className="text-gray-600">
                เราเชื่อว่าการศึกษาที่แท้จริงไม่ได้มุ่งเน้นเพียงการพัฒนาสติปัญญาเท่านั้น แต่ยังรวมถึงการพัฒนาร่างกาย จิตใจ อารมณ์ และสังคม 
                เพื่อให้นักเรียนเติบโตเป็นมนุษย์ที่สมบูรณ์
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">วิสัยทัศน์</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  "โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์มุ่งมั่นที่จะเป็นสถาบันการศึกษาชั้นนำที่มีคุณภาพตามมาตรฐานสากล 
                  พัฒนานักเรียนให้มีความเป็นเลิศทางวิชาการ มีคุณธรรมจริยธรรม มีทักษะชีวิต และมีความพร้อมในการเป็นพลเมืองโลกในศตวรรษที่ 21"
                </p>
                <p className="text-gray-600">
                  เรามุ่งสร้างสภาพแวดล้อมการเรียนรู้ที่เอื้อต่อการพัฒนาศักยภาพของนักเรียนทุกคน ส่งเสริมการใช้เทคโนโลยีและนวัตกรรมในการจัดการเรียนการสอน 
                  และสร้างเครือข่ายความร่วมมือกับผู้ปกครอง ชุมชน และองค์กรต่างๆ เพื่อร่วมกันพัฒนาการศึกษาอย่างยั่งยืน
                </p>
              </div>
              <div>
                <Image 
                  src="/images/slides/02.png"
                  alt="วิสัยทัศน์โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ค่านิยมหลัก</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">พันธกิจ</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                  <p className="text-gray-600">
                    จัดการศึกษาที่มีคุณภาพตามมาตรฐานการศึกษา มุ่งเน้นการพัฒนาความรู้และทักษะที่จำเป็นในศตวรรษที่ 21
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                  <p className="text-gray-600">
                    ปลูกฝังคุณธรรม จริยธรรม และค่านิยมที่ดีงาม ตามหลักคำสอนของศาสนาและวัฒนธรรมไทย
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                  <p className="text-gray-600">
                    พัฒนาทักษะชีวิต ทักษะอาชีพ และความสามารถในการปรับตัวให้เข้ากับสังคมที่เปลี่ยนแปลงอย่างรวดเร็ว
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                  <p className="text-gray-600">
                    ส่งเสริมการใช้เทคโนโลยีและนวัตกรรมในการจัดการเรียนการสอน เพื่อพัฒนาการเรียนรู้ของนักเรียน
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                  <p className="text-gray-600">
                    สร้างเครือข่ายความร่วมมือกับผู้ปกครอง ชุมชน และองค์กรต่างๆ ในการพัฒนาการศึกษาและสังคม
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}