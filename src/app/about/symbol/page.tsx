import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'สัญลักษณ์โรงเรียน | ASL - Assumption Convent Lam Narai',
  description: 'ความหมายของตราสัญลักษณ์และสีประจำโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์',
};

export default function SymbolPage() {
  // School colors with meanings
  const schoolColors = [
    {
      color: 'แดง',
      hex: '#dd3333',
      meaning: 'สีแดงเป็นสัญลักษณ์ของความกล้าหาญ ความเสียสละ และความรัก เป็นสีที่แสดงถึงพลังและความมุ่งมั่นในการพัฒนาตนเองและสังคม',
    },
    {
      color: 'ขาว',
      hex: '#ffffff',
      meaning: 'สีขาวเป็นสัญลักษณ์ของความบริสุทธิ์ ความจริงใจ และความซื่อสัตย์ เป็นสีที่แสดงถึงคุณธรรมและจริยธรรมที่โรงเรียนปลูกฝังให้แก่นักเรียน',
    },
  ];

  // Logo elements with meanings
  const logoElements = [
    {
      element: 'ดาวห้าแฉก',
      meaning: 'เป็นสัญลักษณ์ของแสงสว่างแห่งความรู้และปัญญา นำทางให้นักเรียนก้าวไปสู่ความสำเร็จในชีวิต',
    },
    {
      element: 'ไม้กางเขน',
      meaning: 'เป็นสัญลักษณ์ของความเชื่อและความศรัทธาในศาสนาคริสต์ แสดงถึงความรักและการเสียสละ',
    },
    {
      element: 'อักษร A.S.L.',
      meaning: 'ย่อมาจาก Assumption Convent Lam Narai ซึ่งเป็นชื่อของโรงเรียนในภาษาอังกฤษ',
    },
    {
      element: 'พื้นโล่สีแดง',
      meaning: 'แสดงถึงความกล้าหาญและความเข้มแข็งในการเผชิญกับความท้าทายต่างๆ ในชีวิต',
    },
    {
      element: 'ขอบโล่สีขาว',
      meaning: 'แสดงถึงความบริสุทธิ์และความซื่อสัตย์ที่ล้อมรอบชีวิตของนักเรียน',
    },
  ];

  return (
    <>
      <PageHeader 
        title="สัญลักษณ์โรงเรียน" 
        subtitle="ความหมายของตราสัญลักษณ์และสีประจำโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
        bgImage="/images/slides/01.png"
      />

      <section className="py-16">
        <div className="container mx-auto">
          {/* School Logo Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ตราสัญลักษณ์โรงเรียน</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md inline-block">
                  <Image 
                    src="/images/logo.png" 
                    alt="ตราสัญลักษณ์โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์" 
                    width={300} 
                    height={300}
                    className="mx-auto"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">ความหมายของตราสัญลักษณ์</h3>
                <p className="text-gray-600 mb-6">
                  ตราสัญลักษณ์ของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ เป็นรูปโล่กับสัญลักษณ์ต่างๆ ที่มีความหมายเฉพาะ 
                  แสดงถึงเอกลักษณ์และปรัชญาของโรงเรียน ตราสัญลักษณ์นี้ได้รับการออกแบบให้สะท้อนถึงคุณค่าและความเชื่อที่โรงเรียนยึดถือ
                </p>
                <p className="text-gray-600">
                  ตราสัญลักษณ์นี้เป็นสิ่งที่นักเรียนทุกคนภาคภูมิใจและเป็นเครื่องเตือนใจให้ระลึกถึงคุณค่าและปรัชญาของโรงเรียน 
                  ที่มุ่งพัฒนานักเรียนให้เป็นผู้มีความรู้คู่คุณธรรม
                </p>
              </div>
            </div>
          </div>

          {/* Logo Elements Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">องค์ประกอบของตราสัญลักษณ์</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-6">
                {logoElements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{item.element}</h3>
                      <p className="text-gray-600">{item.meaning}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* School Colors Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">สีประจำโรงเรียน</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {schoolColors.map((color, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                  <div 
                    className="w-24 h-24 rounded-full mb-6" 
                    style={{ backgroundColor: color.hex, border: color.hex === '#ffffff' ? '1px solid #e5e7eb' : 'none' }}
                  ></div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">สี{color.color}</h3>
                  <p className="text-gray-600 text-center">{color.meaning}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">ความหมายของสีประจำโรงเรียน</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                สีแดงและสีขาวเป็นสีประจำโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ ซึ่งเป็นสัญลักษณ์ของความกล้าหาญ ความบริสุทธิ์ และความรัก 
                สีทั้งสองนี้ยังเป็นสีที่ใช้ในเครื่องแบบนักเรียนและกิจกรรมต่างๆ ของโรงเรียน เพื่อเป็นการปลูกฝังคุณค่าและความภาคภูมิใจในสถาบัน
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}