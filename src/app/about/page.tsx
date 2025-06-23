import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'เกี่ยวกับเรา | ASL - Assumption Convent Lam Narai',
  description: 'ประวัติ ปรัชญา และข้อมูลเกี่ยวกับโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์',
};

export default function AboutPage() {
  // About sections with links to subpages
  const aboutSections = [
    {
      title: 'ประวัติโรงเรียน',
      description: 'เรียนรู้เกี่ยวกับประวัติความเป็นมาของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ ตั้งแต่ก่อตั้งจนถึงปัจจุบัน',
      image: '/images/slides/01.png',
      link: '/about/history',
    },
    {
      title: 'ปรัชญาโรงเรียน',
      description: 'ปรัชญาและวิสัยทัศน์ที่เป็นแนวทางในการจัดการศึกษาของโรงเรียน',
      image: '/images/slides/02.png',
      link: '/about/philosophy',
    },
    {
      title: 'ที่ตั้ง',
      description: 'ข้อมูลที่ตั้งและแผนที่การเดินทางมาโรงเรียน',
      image: '/images/slides/01.png',
      link: '/about/location',
    },
    {
      title: 'สัญลักษณ์',
      description: 'ความหมายของตราสัญลักษณ์และสีประจำโรงเรียน',
      image: '/images/slides/02.png',
      link: '/about/symbol',
    },
    {
      title: 'คำขวัญ',
      description: 'คำขวัญและปณิธานของโรงเรียนที่ยึดถือเป็นแนวทางในการพัฒนานักเรียน',
      image: '/images/slides/01.png',
      link: '/about/motto',
    },
  ];

  return (
    <>
      <PageHeader 
        title="เกี่ยวกับเรา" 
        subtitle="เรียนรู้เกี่ยวกับประวัติ ปรัชญา และข้อมูลของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
      />

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์</h2>
              <p className="text-gray-600 mb-4">
                โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ เป็นโรงเรียนเอกชนคาทอลิกที่มุ่งมั่นพัฒนาการศึกษาและคุณธรรมแก่เยาวชน 
                ก่อตั้งขึ้นเมื่อปี พ.ศ. 2500 โดยคณะภคินีเซนต์ปอล เดอ ชาร์ตร
              </p>
              <p className="text-gray-600 mb-4">
                ตลอดระยะเวลากว่า 60 ปี โรงเรียนได้มุ่งมั่นพัฒนาคุณภาพการศึกษา ควบคู่ไปกับการปลูกฝังคุณธรรม จริยธรรม 
                และค่านิยมที่ดีงาม เพื่อให้นักเรียนเติบโตเป็นพลเมืองที่ดีของสังคมและประเทศชาติ
              </p>
              <p className="text-gray-600">
                โรงเรียนมีความโดดเด่นในด้านวิชาการ ศิลปะ ดนตรี กีฬา และกิจกรรมพัฒนาผู้เรียน โดยมุ่งเน้นการพัฒนานักเรียนให้เป็นผู้มีความรู้คู่คุณธรรม 
                มีทักษะในศตวรรษที่ 21 และมีความพร้อมในการเป็นพลเมืองโลก
              </p>
            </div>
            <div>
              <Image 
                src="/images/slides/01.png"
                alt="โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutSections.map((section, index) => (
              <Link 
                key={index} 
                href={section.link}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <span className="text-primary font-medium">อ่านเพิ่มเติม &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}