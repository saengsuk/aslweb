import React from 'react';
import PageHeader from '@/components/PageHeader';
import NewsCard from '@/components/NewsCard';

export const metadata = {
  title: 'ข่าวสาร | ASL - Assumption Convent Lam Narai',
  description: 'ข่าวสาร ประกาศ และกิจกรรมต่างๆ ของโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์',
};

export default function NewsPage() {
  // Sample news items
  const newsItems = [
    {
      id: 1,
      title: "การรับสมัครนักเรียนใหม่ ปีการศึกษา 2567",
      date: "15 มิถุนายน 2567",
      excerpt: "โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์เปิดรับสมัครนักเรียนใหม่ ระดับชั้นอนุบาล 1 ถึงมัธยมศึกษาปีที่ 6 ประจำปีการศึกษา 2567 ผู้ปกครองที่สนใจสามารถติดต่อขอรับใบสมัครได้ที่ฝ่ายทะเบียนของโรงเรียน หรือดาวน์โหลดใบสมัครได้ทางเว็บไซต์ พร้อมยื่นเอกสารประกอบการสมัครให้ครบถ้วน",
      image: "/images/slides/01.png",
      featured: true,
    },
    {
      id: 2,
      title: "กิจกรรมวันไหว้ครู ประจำปีการศึกษา 2567",
      date: "10 มิถุนายน 2567",
      excerpt: "โรงเรียนจัดกิจกรรมวันไหว้ครูประจำปีการศึกษา 2567 เพื่อให้นักเรียนได้แสดงความเคารพและระลึกถึงพระคุณของครูอาจารย์ โดยมีการจัดพิธีไหว้ครู การมอบพานดอกไม้ ธูปเทียน และการแสดงของนักเรียนในแต่ละระดับชั้น เพื่อแสดงความกตัญญูกตเวทีต่อคุณครู",
      image: "/images/slides/02.png",
    },
    {
      id: 3,
      title: "การแข่งขันทักษะวิชาการระดับจังหวัด",
      date: "5 มิถุนายน 2567",
      excerpt: "นักเรียนโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ได้รับรางวัลชนะเลิศการแข่งขันทักษะวิชาการระดับจังหวัด ในหลายรายการ ได้แก่ การแข่งขันคณิตศาสตร์ วิทยาศาสตร์ ภาษาไทย และภาษาอังกฤษ ซึ่งสะท้อนให้เห็นถึงคุณภาพการจัดการเรียนการสอนของโรงเรียน",
      image: "/images/slides/01.png",
    },
    {
      id: 4,
      title: "กิจกรรมวันสุนทรภู่และวันภาษาไทยแห่งชาติ",
      date: "26 พฤษภาคม 2567",
      excerpt: "กลุ่มสาระการเรียนรู้ภาษาไทยจัดกิจกรรมวันสุนทรภู่และวันภาษาไทยแห่งชาติ เพื่อส่งเสริมให้นักเรียนเห็นความสำคัญของภาษาไทยและวรรณคดีไทย โดยมีการจัดนิทรรศการ การประกวดแต่งคำประพันธ์ การเล่านิทาน และการแสดงละครเกี่ยวกับวรรณคดีไทย",
      image: "/images/slides/02.png",
    },
    {
      id: 5,
      title: "การอบรมพัฒนาศักยภาพครูด้านการใช้เทคโนโลยีในการสอน",
      date: "15 พฤษภาคม 2567",
      excerpt: "โรงเรียนจัดการอบรมพัฒนาศักยภาพครูด้านการใช้เทคโนโลยีในการสอน เพื่อเพิ่มประสิทธิภาพในการจัดการเรียนการสอนให้ทันสมัยและสอดคล้องกับการเรียนรู้ในศตวรรษที่ 21 โดยเชิญวิทยากรผู้เชี่ยวชาญมาให้ความรู้และฝึกปฏิบัติการใช้เทคโนโลยีต่างๆ",
      image: "/images/slides/01.png",
    },
    {
      id: 6,
      title: "การแข่งขันกีฬาสีประจำปีการศึกษา 2567",
      date: "10 พฤษภาคม 2567",
      excerpt: "โรงเรียนจัดการแข่งขันกีฬาสีประจำปีการศึกษา 2567 เพื่อส่งเสริมให้นักเรียนได้ออกกำลังกาย รู้แพ้ รู้ชนะ รู้อภัย และมีน้ำใจนักกีฬา โดยแบ่งนักเรียนออกเป็น 4 สี ได้แก่ สีแดง สีเหลือง สีน้ำเงิน และสีเขียว แข่งขันกีฬาประเภทต่างๆ ทั้งกรีฑาและกีฬาประเภททีม",
      image: "/images/slides/02.png",
    },
    {
      id: 7,
      title: "พิธีเปิดปีการศึกษา 2567",
      date: "1 พฤษภาคม 2567",
      excerpt: "โรงเรียนจัดพิธีเปิดปีการศึกษา 2567 อย่างเป็นทางการ โดยมีการทำบุญตักบาตร พิธีสงฆ์ และพิธีเปิดโดยท่านผู้อำนวยการโรงเรียน พร้อมทั้งมีการมอบโล่และเกียรติบัตรให้แก่นักเรียนที่สร้างชื่อเสียงให้กับโรงเรียนในปีการศึกษาที่ผ่านมา",
      image: "/images/slides/01.png",
    },
    {
      id: 8,
      title: "การปฐมนิเทศนักเรียนใหม่ ปีการศึกษา 2567",
      date: "30 เมษายน 2567",
      excerpt: "โรงเรียนจัดการปฐมนิเทศนักเรียนใหม่ ปีการศึกษา 2567 เพื่อให้นักเรียนและผู้ปกครองได้รับทราบนโยบาย ระเบียบ และแนวปฏิบัติของโรงเรียน รวมทั้งได้พบปะกับคณะผู้บริหารและคณะครู เพื่อสร้างความเข้าใจและความสัมพันธ์อันดีระหว่างบ้านและโรงเรียน",
      image: "/images/slides/02.png",
    },
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'announcement', name: 'ประกาศ' },
    { id: 'activity', name: 'กิจกรรม' },
    { id: 'academic', name: 'วิชาการ' },
    { id: 'award', name: 'รางวัล' },
  ];

  return (
    <>
      <PageHeader 
        title="ข่าวสารและกิจกรรม" 
        subtitle="ติดตามข่าวสาร ประกาศ และกิจกรรมต่างๆ ของโรงเรียน"
        bgImage="/images/slides/02.png"
      />

      <section className="py-16">
        <div className="container mx-auto">
          {/* Categories */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.id === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="mb-12">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ค้นหาข่าวสาร..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.date}
                excerpt={item.excerpt}
                image={item.image}
                featured={index === 0 && item.featured}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="py-2 px-4 border border-gray-300 bg-white rounded-l-md text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                &laquo; ก่อนหน้า
              </a>
              <a
                href="#"
                className="py-2 px-4 border-t border-b border-gray-300 bg-primary text-sm font-medium text-white"
              >
                1
              </a>
              <a
                href="#"
                className="py-2 px-4 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="py-2 px-4 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="py-2 px-4 border border-gray-300 bg-white rounded-r-md text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                ถัดไป &raquo;
              </a>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}