import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'การรับสมัคร | ASL - Assumption Convent Lam Narai',
  description: 'ข้อมูลการรับสมัครนักเรียนใหม่ ค่าเล่าเรียน ปฏิทินการศึกษา และคำถามที่พบบ่อยของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์',
};

export default function AdmissionsPage() {
  // Admission steps
  const admissionSteps = [
    {
      step: 'ขั้นตอนที่ 1',
      title: 'ศึกษาข้อมูลและเตรียมเอกสาร',
      description: 'ศึกษาข้อมูลเกี่ยวกับโรงเรียน หลักสูตร และคุณสมบัติของผู้สมัคร พร้อมเตรียมเอกสารประกอบการสมัคร',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: 'ขั้นตอนที่ 2',
      title: 'กรอกใบสมัครและยื่นเอกสาร',
      description: 'กรอกใบสมัครให้ครบถ้วนและยื่นพร้อมเอกสารประกอบการสมัครที่ฝ่ายทะเบียนของโรงเรียน หรือสมัครออนไลน์ผ่านเว็บไซต์',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      step: 'ขั้นตอนที่ 3',
      title: 'ชำระค่าสมัครสอบ',
      description: 'ชำระค่าสมัครสอบตามอัตราที่กำหนด โดยสามารถชำระได้ที่ฝ่ายการเงินของโรงเรียน หรือโอนเงินผ่านธนาคาร',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      step: 'ขั้นตอนที่ 4',
      title: 'เข้าสอบคัดเลือก',
      description: 'เข้าสอบคัดเลือกตามวัน เวลา และสถานที่ที่โรงเรียนกำหนด โดยนำบัตรประจำตัวผู้สมัครและอุปกรณ์การสอบมาด้วย',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      step: 'ขั้นตอนที่ 5',
      title: 'ประกาศผลสอบ',
      description: 'ตรวจสอบผลการสอบคัดเลือกตามวันที่กำหนด โดยสามารถตรวจสอบได้ที่โรงเรียนหรือทางเว็บไซต์',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      step: 'ขั้นตอนที่ 6',
      title: 'รายงานตัวและมอบตัว',
      description: 'ผู้ที่สอบผ่านการคัดเลือกต้องมารายงานตัวและมอบตัวตามวัน เวลาที่กำหนด พร้อมชำระค่าธรรมเนียมแรกเข้าและค่าเล่าเรียน',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  // Required documents
  const requiredDocuments = [
    'สำเนาสูติบัตรของนักเรียน',
    'สำเนาทะเบียนบ้านของนักเรียน',
    'สำเนาบัตรประชาชนของนักเรียน (ถ้ามี)',
    'สำเนาบัตรประชาชนของบิดาและมารดา',
    'สำเนาทะเบียนบ้านของบิดาและมารดา',
    'รูปถ่ายนักเรียนขนาด 1 นิ้ว จำนวน 3 รูป (ถ่ายไม่เกิน 6 เดือน)',
    'หลักฐานการเปลี่ยนชื่อ-สกุล (ถ้ามี)',
    'ใบรับรองผลการเรียน (ปพ.1) หรือสมุดรายงานผลการเรียน',
    'ใบรับรองการเป็นนักเรียน (ปพ.7) จากโรงเรียนเดิม',
  ];

  // Tuition fees
  const tuitionFees = [
    {
      level: 'ระดับปฐมวัย',
      fees: [
        { item: 'ค่าธรรมเนียมแรกเข้า', amount: '5,000 บาท', note: 'ชำระครั้งเดียวแรกเข้า' },
        { item: 'ค่าเล่าเรียน', amount: '15,000 บาท', note: 'ต่อภาคเรียน' },
        { item: 'ค่าอาหารกลางวัน', amount: '3,500 บาท', note: 'ต่อภาคเรียน' },
        { item: 'ค่าเรียนพิเศษ', amount: '2,500 บาท', note: 'ต่อภาคเรียน' },
      ],
    },
    {
      level: 'ระดับประถมศึกษา',
      fees: [
        { item: 'ค่าธรรมเนียมแรกเข้า', amount: '5,000 บาท', note: 'ชำระครั้งเดียวแรกเข้า' },
        { item: 'ค่าเล่าเรียน', amount: '16,000 บาท', note: 'ต่อภาคเรียน' },
        { item: 'ค่าอาหารกลางวัน', amount: '3,500 บาท', note: 'ต่อภาคเรียน' },
        { item: 'ค่าเรียนพิเศษ', amount: '3,000 บาท', note: 'ต่อภาคเรียน' },
      ],
    },
    {
      level: 'ระดับมัธยมศึกษาตอนต้น',
      fees: [
        { item: 'ค่าธรรมเนียมแรกเข้า', amount: '5,000 บาท', note: 'ชำระครั้งเดียวแรกเข้า' },
        { item: 'ค่าเล่าเรียน', amount: '18,000 บาท', note: 'ต่อภาคเรียน' },
        { item: 'ค่าอาหารกลางวัน', amount: '3,500 บาท', note: 'ต่อภาคเรียน' },
        { item: 'ค่าเรียนพิเศษ', amount: '3,500 บาท', note: 'ต่อภาคเรียน' },
      ],
    },
    {
      level: 'ระดับมัธยมศึกษาตอนปลาย',
      fees: [
        { item: 'ค่าธรรมเนียมแรกเข้า', amount: '5,000 บาท', note: 'ชำระครั้งเดียวแรกเข้า' },
        { item: 'ค่าเล่าเรียน', amount: '20,000 บาท', note: 'ต่อภาคเรียน' },
        { item: 'ค่าอาหารกลางวัน', amount: '3,500 บาท', note: 'ต่อภาคเรียน' },
        { item: 'ค่าเรียนพิเศษ', amount: '4,000 บาท', note: 'ต่อภาคเรียน' },
      ],
    },
  ];

  // FAQ
  const faqs = [
    {
      question: 'โรงเรียนเปิดรับสมัครนักเรียนใหม่เมื่อไร?',
      answer: 'โรงเรียนเปิดรับสมัครนักเรียนใหม่ในช่วงเดือนธันวาคมถึงกุมภาพันธ์ของทุกปี สำหรับปีการศึกษาถัดไป อย่างไรก็ตาม หากมีที่นั่งว่าง โรงเรียนอาจเปิดรับสมัครเพิ่มเติมในช่วงอื่นๆ ของปี',
    },
    {
      question: 'นักเรียนต้องมีคุณสมบัติอย่างไรบ้าง?',
      answer: 'คุณสมบัติของนักเรียนจะแตกต่างกันไปตามระดับชั้น โดยทั่วไปนักเรียนต้องมีอายุเหมาะสมกับระดับชั้น มีสุขภาพแข็งแรง และผ่านการทดสอบความพร้อมหรือการสอบคัดเลือกตามเกณฑ์ที่โรงเรียนกำหนด',
    },
    {
      question: 'การสอบคัดเลือกมีวิชาอะไรบ้าง?',
      answer: 'วิชาที่ใช้ในการสอบคัดเลือกจะแตกต่างกันตามระดับชั้น สำหรับระดับปฐมวัยจะเป็นการทดสอบความพร้อม ส่วนระดับประถมศึกษาและมัธยมศึกษาจะมีการสอบวิชาหลัก ได้แก่ ภาษาไทย คณิตศาสตร์ วิทยาศาสตร์ ภาษาอังกฤษ และสังคมศึกษา',
    },
    {
      question: 'โรงเรียนมีทุนการศึกษาหรือไม่?',
      answer: 'โรงเรียนมีทุนการศึกษาสำหรับนักเรียนที่มีผลการเรียนดีแต่ขาดแคลนทุนทรัพย์ โดยผู้ปกครองสามารถยื่นความจำนงขอรับทุนการศึกษาได้ที่ฝ่ายแนะแนวของโรงเรียน ซึ่งจะมีการพิจารณาตามเกณฑ์ที่กำหนด',
    },
    {
      question: 'โรงเรียนมีรถรับ-ส่งนักเรียนหรือไม่?',
      answer: 'โรงเรียนมีบริการรถรับ-ส่งนักเรียนในเขตพื้นที่ใกล้เคียง โดยผู้ปกครองสามารถสมัครใช้บริการได้ที่ฝ่ายธุรการของโรงเรียน ค่าบริการจะแตกต่างกันไปตามระยะทาง',
    },
    {
      question: 'นักเรียนต้องเตรียมตัวอย่างไรในวันสอบ?',
      answer: 'นักเรียนควรเตรียมบัตรประจำตัวผู้สมัคร ดินสอ 2B ยางลบ และอุปกรณ์การเขียนอื่นๆ มาในวันสอบ ควรมาถึงสนามสอบก่อนเวลาอย่างน้อย 30 นาที และแต่งกายด้วยชุดนักเรียนหรือชุดสุภาพ',
    },
  ];

  // Academic calendar
  const academicCalendar = [
    {
      period: 'ธันวาคม - กุมภาพันธ์',
      events: [
        'เปิดรับสมัครนักเรียนใหม่',
        'สอบคัดเลือกนักเรียนใหม่',
        'ประกาศผลสอบและรายงานตัว',
      ],
    },
    {
      period: 'พฤษภาคม',
      events: [
        'เปิดภาคเรียนที่ 1',
        'ปฐมนิเทศนักเรียนใหม่',
        'กิจกรรมวันไหว้ครู',
      ],
    },
    {
      period: 'มิถุนายน - กันยายน',
      events: [
        'การสอบกลางภาคเรียนที่ 1',
        'กิจกรรมวันสำคัญทางศาสนาและวันแม่แห่งชาติ',
        'การสอบปลายภาคเรียนที่ 1',
      ],
    },
    {
      period: 'ตุลาคม',
      events: [
        'ปิดภาคเรียนที่ 1',
        'ค่ายวิชาการและทัศนศึกษา',
      ],
    },
    {
      period: 'พฤศจิกายน - กุมภาพันธ์',
      events: [
        'เปิดภาคเรียนที่ 2',
        'การสอบกลางภาคเรียนที่ 2',
        'กิจกรรมกีฬาสี',
        'กิจกรรมวันคริสต์มาสและวันปีใหม่',
        'การสอบปลายภาคเรียนที่ 2',
      ],
    },
    {
      period: 'มีนาคม - เมษายน',
      events: [
        'พิธีมอบประกาศนียบัตรและปัจฉิมนิเทศ',
        'ปิดภาคเรียนที่ 2',
        'กิจกรรมค่ายฤดูร้อน',
      ],
    },
  ];

  return (
    <>
      <PageHeader 
        title="การรับสมัคร" 
        subtitle="ข้อมูลการรับสมัครนักเรียนใหม่ ค่าเล่าเรียน ปฏิทินการศึกษา และคำถามที่พบบ่อย"
        bgImage="/images/slides/02.png"
      />

      <section className="py-16">
        <div className="container mx-auto">
          {/* Admission Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ขั้นตอนการสมัครเรียน</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {admissionSteps.map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{step.step}</h3>
                  <h4 className="text-lg font-semibold text-primary mb-4 text-center">{step.title}</h4>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">เอกสารประกอบการสมัคร</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Image 
                    src="/images/slides/01.png"
                    alt="เอกสารประกอบการสมัคร"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div>
                  <ul className="space-y-3">
                    {requiredDocuments.map((doc, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold">หมายเหตุ:</span> เอกสารทุกฉบับต้องลงนามรับรองสำเนาถูกต้อง และนำเอกสารตัวจริงมาแสดงในวันสมัคร
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tuition Fees */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ค่าธรรมเนียมการศึกษา</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              {tuitionFees.map((level, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-primary text-white p-4">
                    <h3 className="text-xl font-bold">{level.level}</h3>
                  </div>
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-3 text-left text-gray-700">รายการ</th>
                            <th className="px-4 py-3 text-right text-gray-700">จำนวนเงิน</th>
                            <th className="px-4 py-3 text-left text-gray-700">หมายเหตุ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {level.fees.map((fee, feeIndex) => (
                            <tr key={feeIndex} className="border-t border-gray-200">
                              <td className="px-4 py-3 text-gray-700">{fee.item}</td>
                              <td className="px-4 py-3 text-right text-gray-700">{fee.amount}</td>
                              <td className="px-4 py-3 text-gray-600 text-sm">{fee.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">หมายเหตุ:</span> ค่าธรรมเนียมการศึกษาอาจมีการเปลี่ยนแปลงตามความเหมาะสม โดยทางโรงเรียนจะแจ้งให้ทราบล่วงหน้า
              </p>
              <p className="text-gray-600">
                นอกจากนี้ ยังมีค่าใช้จ่ายอื่นๆ เช่น ค่าชุดนักเรียน ค่าหนังสือเรียน และค่ากิจกรรมพิเศษ ซึ่งจะแจ้งให้ทราบในวันมอบตัวนักเรียน
              </p>
            </div>
          </div>

          {/* Academic Calendar */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ปฏิทินการศึกษา</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="relative">
                {/* Center line */}
                <div className="absolute left-16 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
                
                {/* Timeline events */}
                <div className="space-y-8">
                  {academicCalendar.map((period, index) => (
                    <div key={index} className="flex flex-col md:flex-row">
                      <div className="md:w-32 flex-shrink-0 mb-4 md:mb-0">
                        <div className="font-bold text-primary">{period.period}</div>
                      </div>
                      <div className="md:ml-12 relative">
                        {/* Circle marker */}
                        <div className="absolute left-[-41px] top-1 w-6 h-6 rounded-full bg-primary hidden md:block"></div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <ul className="space-y-2">
                            {period.events.map((event, eventIndex) => (
                              <li key={eventIndex} className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-700">{event}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">คำถามที่พบบ่อย</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">Q</span>
                      {faq.question}
                    </h3>
                    <div className="ml-9 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">พร้อมสมัครเรียนกับเราแล้วหรือยัง?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            หากคุณมีคำถามเพิ่มเติมเกี่ยวกับการสมัครเรียน สามารถติดต่อเราได้โดยตรง
            เรายินดีให้คำปรึกษาและข้อมูลเพิ่มเติมเกี่ยวกับโรงเรียนและหลักสูตรการเรียนการสอน
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              ติดต่อเรา
            </Link>
            <a href="#" className="btn-outline border-white text-white hover:bg-white/20">
              ดาวน์โหลดใบสมัคร
            </a>
          </div>
        </div>
      </section>
    </>
  );
}