import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'ประวัติโรงเรียน | ASL - Assumption Convent Lam Narai',
  description: 'ประวัติความเป็นมาของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ ตั้งแต่ก่อตั้งจนถึงปัจจุบัน',
};

export default function HistoryPage() {
  // Timeline events
  const timelineEvents = [
    {
      year: '2500',
      title: 'ก่อตั้งโรงเรียน',
      description: 'โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ ก่อตั้งขึ้นโดยคณะภคินีเซนต์ปอล เดอ ชาร์ตร เมื่อวันที่ 16 พฤษภาคม พ.ศ. 2500 โดยเริ่มเปิดสอนในระดับชั้นประถมศึกษา',
    },
    {
      year: '2510',
      title: 'ขยายการศึกษาระดับมัธยม',
      description: 'โรงเรียนได้ขยายการจัดการศึกษาไปสู่ระดับมัธยมศึกษาตอนต้น เพื่อรองรับความต้องการของชุมชนและผู้ปกครอง',
    },
    {
      year: '2520',
      title: 'พัฒนาอาคารสถานที่',
      description: 'มีการก่อสร้างอาคารเรียนหลังใหม่เพื่อรองรับจำนวนนักเรียนที่เพิ่มขึ้น และปรับปรุงสภาพแวดล้อมให้เอื้อต่อการเรียนรู้',
    },
    {
      year: '2530',
      title: 'ขยายการศึกษาระดับมัธยมปลาย',
      description: 'โรงเรียนได้เปิดสอนในระดับมัธยมศึกษาตอนปลาย ทำให้สามารถจัดการศึกษาได้ครบทุกระดับชั้น',
    },
    {
      year: '2540',
      title: 'ปรับปรุงหลักสูตรการเรียนการสอน',
      description: 'มีการปรับปรุงหลักสูตรการเรียนการสอนให้ทันสมัย เน้นการพัฒนาทักษะภาษาอังกฤษและคอมพิวเตอร์',
    },
    {
      year: '2550',
      title: 'ฉลองครบรอบ 50 ปี',
      description: 'โรงเรียนจัดงานฉลองครบรอบ 50 ปีแห่งการก่อตั้ง มีการจัดกิจกรรมต่างๆ เพื่อรำลึกถึงประวัติศาสตร์และความสำเร็จของโรงเรียน',
    },
    {
      year: '2560',
      title: 'พัฒนาสู่การศึกษายุคดิจิทัล',
      description: 'โรงเรียนได้พัฒนาระบบการเรียนการสอนให้ทันสมัย นำเทคโนโลยีดิจิทัลมาใช้ในการจัดการเรียนรู้ เพื่อเตรียมความพร้อมนักเรียนสู่ศตวรรษที่ 21',
    },
    {
      year: 'ปัจจุบัน',
      title: 'มุ่งสู่ความเป็นเลิศทางการศึกษา',
      description: 'โรงเรียนยังคงมุ่งมั่นพัฒนาคุณภาพการศึกษาอย่างต่อเนื่อง เพื่อให้นักเรียนมีความรู้คู่คุณธรรม และมีทักษะที่จำเป็นในโลกยุคใหม่',
    },
  ];

  return (
    <>
      <PageHeader 
        title="ประวัติโรงเรียน" 
        subtitle="เรียนรู้เกี่ยวกับประวัติความเป็นมาของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
        bgImage="/images/slides/02.png"
      />

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">จุดเริ่มต้นของโรงเรียน</h2>
              <p className="text-gray-600 mb-4">
                โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ ก่อตั้งขึ้นเมื่อวันที่ 16 พฤษภาคม พ.ศ. 2500 โดยคณะภคินีเซนต์ปอล เดอ ชาร์ตร 
                ซึ่งเป็นคณะนักบวชหญิงคาทอลิกที่มีประวัติยาวนานในการจัดการศึกษาทั้งในประเทศไทยและทั่วโลก
              </p>
              <p className="text-gray-600 mb-4">
                ในระยะแรก โรงเรียนเริ่มต้นด้วยอาคารไม้หลังเล็กๆ และมีนักเรียนเพียงไม่กี่สิบคน โดยมีคุณแม่มารี เดอ ลา ครัวซ์ 
                เป็นผู้อำนวยการคนแรกของโรงเรียน ท่านได้วางรากฐานการศึกษาที่มุ่งเน้นการพัฒนาทั้งด้านวิชาการและคุณธรรม
              </p>
              <p className="text-gray-600">
                ตลอดระยะเวลากว่า 60 ปีที่ผ่านมา โรงเรียนได้เติบโตและพัฒนาอย่างต่อเนื่อง ทั้งในด้านอาคารสถานที่ หลักสูตรการเรียนการสอน 
                และคุณภาพของบุคลากร จนเป็นสถาบันการศึกษาที่มีชื่อเสียงและได้รับความไว้วางใจจากผู้ปกครองในจังหวัดลพบุรีและจังหวัดใกล้เคียง
              </p>
            </div>
            <div>
              <Image 
                src="/images/slides/01.png"
                alt="ประวัติโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">ประวัติศาสตร์ของเรา</h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Year bubble */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10">
                    {event.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}