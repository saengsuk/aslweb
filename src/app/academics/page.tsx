import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'วิชาการ | ASL - Assumption Convent Lam Narai',
  description: 'ข้อมูลหลักสูตรการเรียนการสอน ระดับชั้น และโปรแกรมการศึกษาของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์',
};

export default function AcademicsPage() {
  // Educational levels
  const educationalLevels = [
    {
      level: 'ระดับปฐมวัย',
      grades: 'อนุบาล 1-3',
      ageRange: '3-6 ปี',
      description: 'มุ่งเน้นการพัฒนาเด็กรอบด้าน ทั้งด้านร่างกาย อารมณ์ สังคม และสติปัญญา ผ่านการเล่นและกิจกรรมที่เหมาะสมกับวัย เพื่อเตรียมความพร้อมสู่การเรียนในระดับประถมศึกษา',
      image: '/images/slides/01.png',
    },
    {
      level: 'ระดับประถมศึกษา',
      grades: 'ประถมศึกษาปีที่ 1-6',
      ageRange: '6-12 ปี',
      description: 'มุ่งพัฒนาทักษะพื้นฐานที่จำเป็น เช่น การอ่าน การเขียน คณิตศาสตร์ และวิทยาศาสตร์ ควบคู่ไปกับการปลูกฝังคุณธรรม จริยธรรม และทักษะชีวิต',
      image: '/images/slides/02.png',
    },
    {
      level: 'ระดับมัธยมศึกษาตอนต้น',
      grades: 'มัธยมศึกษาปีที่ 1-3',
      ageRange: '12-15 ปี',
      description: 'มุ่งเน้นการพัฒนาความรู้และทักษะในวิชาหลัก เพิ่มเติมความรู้เฉพาะด้าน และส่งเสริมการค้นพบความถนัดและความสนใจของนักเรียน',
      image: '/images/slides/01.png',
    },
    {
      level: 'ระดับมัธยมศึกษาตอนปลาย',
      grades: 'มัธยมศึกษาปีที่ 4-6',
      ageRange: '15-18 ปี',
      description: 'มุ่งเน้นการเตรียมความพร้อมสู่การศึกษาระดับอุดมศึกษา โดยเปิดสอนทั้งแผนการเรียนวิทยาศาสตร์-คณิตศาสตร์ และแผนการเรียนศิลป์-ภาษา',
      image: '/images/slides/02.png',
    },
  ];

  // Special programs
  const specialPrograms = [
    {
      title: 'โปรแกรมภาษาอังกฤษเข้มข้น (Intensive English Program)',
      description: 'โปรแกรมที่เน้นการพัฒนาทักษะภาษาอังกฤษอย่างเข้มข้น โดยมีการเรียนการสอนวิชาภาษาอังกฤษและวิชาอื่นๆ เป็นภาษาอังกฤษ เพื่อให้นักเรียนมีความสามารถในการใช้ภาษาอังกฤษได้อย่างคล่องแคล่ว',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      title: 'โปรแกรมวิทยาศาสตร์-คณิตศาสตร์ (Science-Mathematics Program)',
      description: 'โปรแกรมที่เน้นการพัฒนาความรู้และทักษะด้านวิทยาศาสตร์และคณิตศาสตร์ เพื่อเตรียมความพร้อมสำหรับนักเรียนที่สนใจศึกษาต่อในสาขาวิทยาศาสตร์ วิศวกรรมศาสตร์ แพทยศาสตร์ และสาขาที่เกี่ยวข้อง',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'โปรแกรมศิลป์-ภาษา (Arts-Language Program)',
      description: 'โปรแกรมที่เน้นการพัฒนาความรู้และทักษะด้านภาษาและสังคมศึกษา เพื่อเตรียมความพร้อมสำหรับนักเรียนที่สนใจศึกษาต่อในสาขามนุษยศาสตร์ สังคมศาสตร์ นิติศาสตร์ และสาขาที่เกี่ยวข้อง',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'โปรแกรมพัฒนาทักษะดิจิทัล (Digital Skills Development Program)',
      description: 'โปรแกรมที่เน้นการพัฒนาทักษะด้านเทคโนโลยีดิจิทัล การเขียนโปรแกรม และการใช้เทคโนโลยีสารสนเทศ เพื่อเตรียมความพร้อมสำหรับนักเรียนในยุคดิจิทัล',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <PageHeader 
        title="วิชาการ" 
        subtitle="หลักสูตรการเรียนการสอน ระดับชั้น และโปรแกรมการศึกษา"
        bgImage="/images/slides/01.png"
      />

      <section className="py-16">
        <div className="container mx-auto">
          {/* Curriculum Overview */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">หลักสูตรการเรียนการสอน</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์จัดการเรียนการสอนตามหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช 2551 (ฉบับปรับปรุง พ.ศ. 2560) 
                  ของกระทรวงศึกษาธิการ โดยมีการปรับให้เหมาะสมกับบริบทและเอกลักษณ์ของโรงเรียน
                </p>
                <p className="text-gray-600 mb-4">
                  หลักสูตรของโรงเรียนมุ่งพัฒนานักเรียนให้มีความรู้และทักษะที่จำเป็นในศตวรรษที่ 21 ควบคู่ไปกับการปลูกฝังคุณธรรม จริยธรรม 
                  และค่านิยมที่ดีงาม ตามปรัชญาของโรงเรียนที่ว่า "ความรู้คู่คุณธรรม นำชีวิตสู่ความสำเร็จ"
                </p>
                <p className="text-gray-600">
                  นอกจากนี้ โรงเรียนยังมีการจัดกิจกรรมเสริมหลักสูตรที่หลากหลาย เพื่อส่งเสริมให้นักเรียนได้พัฒนาศักยภาพของตนเองอย่างเต็มที่ 
                  และค้นพบความถนัดและความสนใจของตนเอง
                </p>
              </div>
              <div>
                <Image 
                  src="/images/slides/02.png"
                  alt="หลักสูตรการเรียนการสอนโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Educational Levels */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ระดับชั้นที่เปิดสอน</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              {educationalLevels.map((level, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-1">
                      <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                        <Image
                          src={level.image}
                          alt={level.level}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-bold text-primary mb-2">{level.level}</h3>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {level.grades}
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          อายุ {level.ageRange}
                        </span>
                      </div>
                      <p className="text-gray-600">{level.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Programs */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">โปรแกรมการศึกษาพิเศษ</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialPrograms.map((program, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-6">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Excellence */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ความเป็นเลิศทางวิชาการ</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">ผลสัมฤทธิ์ทางการเรียน</h3>
                  <p className="text-gray-600">นักเรียนของเรามีผลการทดสอบระดับชาติ (O-NET) สูงกว่าค่าเฉลี่ยระดับประเทศในทุกรายวิชา</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">ครูผู้สอนคุณภาพ</h3>
                  <p className="text-gray-600">ครูของเราเป็นผู้มีความรู้ความสามารถ มีประสบการณ์ และได้รับการพัฒนาอย่างต่อเนื่อง</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">สิ่งแวดล้อมการเรียนรู้</h3>
                  <p className="text-gray-600">โรงเรียนมีสภาพแวดล้อมที่เอื้อต่อการเรียนรู้ มีสื่อและเทคโนโลยีที่ทันสมัย</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">สนใจสมัครเรียนกับเรา?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            เราเปิดรับสมัครนักเรียนใหม่ทุกระดับชั้น ตั้งแต่อนุบาลถึงมัธยมศึกษาปีที่ 6
            หากคุณสนใจให้บุตรหลานได้รับการศึกษาที่มีคุณภาพ สามารถติดต่อสอบถามข้อมูลเพิ่มเติมได้
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="btn bg-white text-primary hover:bg-gray-100">
              ข้อมูลการรับสมัคร
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white/20">
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}