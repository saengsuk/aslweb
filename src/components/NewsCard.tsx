import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  id, 
  title, 
  date, 
  excerpt, 
  image, 
  featured = false 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`relative ${featured ? 'h-64 md:h-80' : 'h-48'}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{date}</span>
        </div>
        <h3 className={`font-bold text-gray-800 mb-2 ${featured ? 'text-2xl' : 'text-xl'}`}>{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link href={`/news/${id}`} className="text-primary font-medium hover:underline inline-flex items-center">
          อ่านเพิ่มเติม
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;