import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'คำขวัญโรงเรียน | ASL - Assumption Convent Lam Narai',
  description: 'คำขวัญและปณิธานของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ที่ยึดถือเป็นแนวทางในการพัฒนานักเรียน',
};

export default function MottoPage() {
  // Core values based on the motto
  const coreValues = [
    {
      title: 'ความรู้',
      description: 'มุ่งมั่นพัฒนาความรู้ทางวิชาการและทักษะที่จำเป็นในศตวรรษที่ 21 เพื่อให้นักเรียนมีพื้นฐานที่มั่นคงสำหรับการศึกษาต่อและการประกอบอาชีพในอนาคต',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'คุณธรรม',
      description: 'ปลูกฝังคุณธรรม จริยธรรม และค่านิยมที่ดีงาม เพื่อให้นักเรียนเป็นคนดีของสังคม มีความซื่อสัตย์ มีวินัย และมีความรับผิดชอบต่อตนเองและผู้อื่น',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'ความสำเร็จ',
      description: 'ส่งเสริมให้นักเรียนมีเป้าหมายในชีวิตและมุ่งมั่นที่จะไปให้ถึงเป้าหมายนั้น โดยใช้ความรู้และคุณธรรมเป็นเครื่องนำทาง เพื่อให้ประสบความสำเร็จทั้งในด้านการเรียน การทำงาน และการดำเนินชีวิต',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <PageHeader 
        title="คำขวัญโรงเรียน" 
        subtitle="คำขวัญและปณิธานของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
        bgImage="/images/slides/02.png"
      />

      <section className="py-16">
        <div className="container mx-auto">
          {/* Motto Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">คำขวัญโรงเรียน</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-primary text-white p-12 rounded-lg shadow-lg text-center max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">"ความรู้คู่คุณธรรม นำชีวิตสู่ความสำเร็จ"</h3>
              <p className="text-xl">Knowledge and Virtue Lead to Success</p>
            </div>
          </div>

          {/* Meaning Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ความหมายของคำขวัญ</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  คำขวัญ "ความรู้คู่คุณธรรม นำชีวิตสู่ความสำเร็จ" สะท้อนถึงปรัชญาและความเชื่อของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ 
                  ที่มุ่งเน้นการพัฒนานักเรียนให้เป็นผู้มีความรู้ทางวิชาการควบคู่ไปกับการมีคุณธรรม จริยธรรม
                </p>
                <p className="text-gray-600 mb-4">
                  โรงเรียนเชื่อว่าความรู้เพียงอย่างเดียวไม่เพียงพอสำหรับการดำเนินชีวิตที่ดี แต่ต้องมีคุณธรรมกำกับด้วย 
                  เมื่อนักเรียนมีทั้งความรู้และคุณธรรม จะสามารถนำพาชีวิตไปสู่ความสำเร็จที่แท้จริงและยั่งยืน
                </p>
                <p className="text-gray-600">
                  คำขวัญนี้เป็นเสมือนเข็มทิศที่ชี้นำทิศทางในการจัดการศึกษาของโรงเรียน และเป็นแนวทางให้นักเรียนยึดถือในการดำเนินชีวิต 
                  ทั้งในระหว่างที่ศึกษาอยู่ในโรงเรียนและเมื่อจบการศึกษาไปแล้ว
                </p>
              </div>
              <div>
                <Image 
                  src="/images/slides/01.png"
                  alt="คำขวัญโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">คุณค่าหลักตามคำขวัญ</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">การนำคำขวัญไปใช้ในชีวิตประจำวัน</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">สำหรับนักเรียน</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>ตั้งใจศึกษาเล่าเรียน แสวงหาความรู้อย่างสม่ำเสมอ</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>ประพฤติตนเป็นคนดี มีคุณธรรม จริยธรรม และค่านิยมที่ดีงาม</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>มีเป้าหมายในชีวิตและมุ่งมั่นที่จะไปให้ถึงเป้าหมายนั้น</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>ช่วยเหลือผู้อื่นและสังคมตามกำลังความสามารถ</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">สำหรับครูและบุคลากร</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>พัฒนาตนเองอย่างต่อเนื่อง เพื่อให้มีความรู้และทักษะที่ทันสมัย</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>เป็นแบบอย่างที่ดีในด้านคุณธรรม จริยธรรม และการดำเนินชีวิต</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>จัดการเรียนการสอนที่ส่งเสริมทั้งความรู้และคุณธรรม</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>สร้างแรงบันดาลใจให้นักเรียนมุ่งสู่ความสำเร็จในชีวิต</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}