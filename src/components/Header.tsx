'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'หน้าหลัก', href: '/' },
    { 
      name: 'เกี่ยวกับเรา', 
      href: '/about',
      submenu: [
        { name: 'ประวัติโรงเรียน', href: '/about/history' },
        { name: 'ปรัชญาโรงเรียน', href: '/about/philosophy' },
        { name: 'ที่ตั้ง', href: '/about/location' },
        { name: 'สัญลักษณ์', href: '/about/symbol' },
        { name: 'คำขวัญ', href: '/about/motto' },
      ]
    },
    { name: 'วิชาการ', href: '/academics' },
    { name: 'การรับสมัคร', href: '/admissions' },
    { name: 'ข่าวสาร', href: '/news' },
    { name: 'บุคลากร', href: '/staff' },
    { name: 'กิจกรรมนักเรียน', href: '/student-life' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="ASL School Logo" 
            width={isScrolled ? 50 : 60} 
            height={isScrolled ? 50 : 60}
            className="transition-all duration-300"
          />
          <div className="ml-3">
            <h1 className="text-primary font-bold text-lg md:text-xl">โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์</h1>
            <p className="text-gray-600 text-xs md:text-sm">Assumption Convent Lam Narai School</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link 
                href={item.href}
                className="text-gray-800 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
              
              {/* Submenu for desktop */}
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top z-50">
                  {item.submenu.map((subItem) => (
                    <Link 
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto py-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link 
                  href={item.href}
                  className="block py-2 px-4 text-gray-800 hover:bg-primary hover:text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                
                {/* Submenu for mobile */}
                {item.submenu && (
                  <div className="pl-8 bg-gray-50">
                    {item.submenu.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;