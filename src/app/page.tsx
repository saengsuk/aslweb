import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  // Slide images for the hero carousel
  const slides = [
    "/images/slides/01.png",
    "/images/slides/02.png",
  ];

  // Sample news items
  const newsItems = [
    {
      id: 1,
      title: "การรับสมัครนักเรียนใหม่ ปีการศึกษา 2567",
      date: "15 มิถุนายน 2567",
      excerpt: "โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์เปิดรับสมัครนักเรียนใหม่ ระดับชั้นอนุบาล 1 ถึงมัธยมศึกษาปีที่ 6 ประจำปีการศึกษา 2567",
      image: "/images/slides/01.png",
      url: "/news/1"
    },
    {
      id: 2,
      title: "กิจกรรมวันไหว้ครู ประจำปีการศึกษา 2567",
      date: "10 มิถุนายน 2567",
      excerpt: "โรงเรียนจัดกิจกรรมวันไหว้ครูประจำปีการศึกษา 2567 เพื่อให้นักเรียนได้แสดงความเคารพและระลึกถึงพระคุณของครูอาจารย์",
      image: "/images/slides/02.png",
      url: "/news/2"
    },
    {
      id: 3,
      title: "การแข่งขันทักษะวิชาการระดับจังหวัด",
      date: "5 มิถุนายน 2567",
      excerpt: "นักเรียนโรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์ได้รับรางวัลชนะเลิศการแข่งขันทักษะวิชาการระดับจังหวัด",
      image: "/images/slides/01.png",
      url: "/news/3"
    },
  ];

  return (
    <>
      {/* Hero Section with Carousel */}
      <HeroCarousel slides={slides} />

      {/* About Summary Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">เกี่ยวกับโรงเรียน</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image 
                src="/images/slides/01.png"
                alt="โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์</h3>
              <p className="text-gray-600 mb-6">
                สืบเนื่องจากโรงเรียนอัสสัมชัญคอนแวนต์ บางรัก กรุงเทพมหานคร และด้วยความเห็นชอบของแมร์ มีเรียม กิจเจริญ อธิการิณีเจ้าคณะฯ แขวงแห่งประเทศไทยในขณะนั้น ในปีการศึกษา 2540 ท่านจึงมอบหมายให้เซอร์อัลฟองส์ สะอาด วรศิลป์ ครูใหญ่โรงเรียนอัสสัมชัญคอนแวนต์ เขตบางรัก กรุงเทพมหานคร เป็นผู้ดำเนินการก่อตั้งโรงเรียนอัสสัมชัญคอนแวนต์ ลำนารายณ์ จังหวัดลพบุรี ในบริเวณพื้นที่ ที่ได้รับบริจาคจากนายสมพงษ์ วงศ์นพรัตน์เลิศ ผู้ปกครองของนักเรียนโรงเรียนอัสสัมชัญคอนแวนต์ บางรัก ฝ่ายมัธยมและอัสสัมชัญคอนแวนต์ สีลม ฝ่ายประถม
              </p>
              <p className="text-gray-600 mb-6">
                โรงเรียนอัสสัมชัญคอนแวนต์ ลำนารายณ์ ก่อตั้งในปี พ.ศ. 2541 โดยได้รับบริจาคที่ดิน ที่ตำบลห้วยหิน อำเภอชัยบาดาล จังหวัดลพบุรี จากผู้มีจิตศรัทธาและเห็นความสำคัญของการขยายการศึกษาสู่ชนบท ให้เยาวชนได้มีโอกาสศึกษาหาความรู้ ทัดเทียมกับระดับการศึกษาของเยาวชนในกรุงเทพมหานคร จึงเสนอให้คณะภคินีเซนต์ปอล เดอ ชาร์ตร ขยายกิจการโรงเรียนอัสสัมชัญคอนแวนต์ ไปที่ ลำนารายณ์ ตำบลห้วยหิน อำเภอชัยบาดาล จังหวัดลพบุรี โดยผู้บริจาคยินดีก่อสร้างอาคารเรียนและอาคารประกอบให้ส่วนหนึ่งโรงเรียนอัสสัมชัญคอนแวนต์ จึงได้รับอนุญาตให้ขยายกิจการ จัดตั้งโรงเรียนอัสสัมชัญคอนแวนต์ ลำนารายณ์ สายสามัญ เปิดทำการสอนตั้งแต่ระดับเตรียมอนุบาล ถึงมัธยมศึกษาปีที่ 6 รับนักเรียนประจำและไป-กลับ ปัจจุบันมีเซอร์โยเซฟีนา ทิพย์วรรณ คำเหลา เป็นผู้ทำการแทนผู้รับใบอนุญาต ผู้จัดการ และผู้อำนวยการ
              </p>
              <Link href="/about" className="btn">
                อ่านเพิ่มเติม
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">ข่าวสารและกิจกรรม</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  <Link href={item.url} className="text-primary font-medium hover:underline">
                    อ่านเพิ่มเติม
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/news" className="btn-outline">
              ดูข่าวทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">สนใจสมัครเรียนหรือต้องการข้อมูลเพิ่มเติม?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            เรายินดีให้คำปรึกษาและข้อมูลเกี่ยวกับการเรียนการสอน การรับสมัคร และกิจกรรมต่างๆ ของโรงเรียน
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              ติดต่อเรา
            </Link>
            <Link href="/admissions" className="btn-outline border-white text-white hover:bg-white/20">
              ข้อมูลการรับสมัคร
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
