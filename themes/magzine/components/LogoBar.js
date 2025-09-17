import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function LogoBar({ siteInfo, className }) {
  const [siteTitle, setSiteTitle] = useState('Default Title');

  useEffect(() => {
    const domain = window.location.hostname;
    const siteConfig = getSiteConfig(domain);
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

function getSiteConfig(domain) {
  if (domain === 'yesterdayly.com') {
    return {
      TITLE: 'YESTERDAYLY',
    };
  }
  if (domain === 'rtrro.com') {
    return {
      TITLE: 'RTRRO',
    };
  }
  if (domain === 'localhost') {
    return {
      TITLE: 'RTRRO',
    };
  }
  // Default configuration
  return {
    TITLE: 'Default Title',
  };
}
