import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function LogoBar({ siteInfo, className }) {
  const [siteTitle, setSiteTitle] = useState('Default Title');

  useEffect(() => {
    const siteConfig = getSiteConfig();
    setSiteTitle(siteConfig.TITLE);
  }, []);
  
  return (
    <div
      id='top-wrapper'
      className={`w-full flex items-center ${className || ''}`}>
      <Link
        href='/'
        className='inline-flex items-center whitespace-nowrap logo font-semibold hover:bg-black hover:text-white p-2 rounded-xl duration-200 dark:text-gray-200'>
        <LazyImage
          priority
          src={siteInfo?.icon}
          width={24}
          height={20}
          alt={siteConfig('AUTHOR')}
          className='mr-2 hidden md:inline-block'
        />
        <span>{siteTitle}</span>
      </Link>
    </div>
  )
}

function getSiteConfig() {
  const currentDomain = window.location.hostname;
  if (currentDomain === 'localhost'){
    return {
      TITLE: 'LOCALHOST',
    };
  }else{
    const hostnameWithoutPort = currentDomain.split(':')[0]; 
    const domainPrefix = hostnameWithoutPort.split('.')[0];
    return {
      TITLE: domainPrefix.toUpperCase(),
    };
  };
}