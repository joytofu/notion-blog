import { siteConfig } from '@/lib/config'
import { useState, useEffect } from 'react';

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  const [websiteNameUpper, setWebsiteNameUpper] = useState('PIXOMNI');
  const [websiteNameLower, setWebsiteNameLower] = useState('PIXOMNI');

  useEffect(() => {
    const currentDomain = window.location.hostname;
    const hostnameWithoutPort = currentDomain.split(':')[0]; 
    
    
    if (currentDomain === 'localhost'){
      setWebsiteNameUpper('LOCALHOST')
      setWebsiteNameLower('localhost')
    }else{
      const domainPrefix = hostnameWithoutPort.split('.')[0];
      const domainUpper = domainPrefix.toUpperCase();
      const domainLower = domainPrefix.toLowerCase();
      setWebsiteNameUpper(domainUpper)
      setWebsiteNameLower(domainLower)
    }
  }, []);

  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <a href={`https://${websiteNameLower}.com`}>{websiteNameUpper}</a>. All Rights Reserved.
    </div>
  )
}
