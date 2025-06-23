import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  bgImage = "/images/slides/01.png" 
}) => {
  return (
    <div 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;