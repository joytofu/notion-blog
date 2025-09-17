import { siteConfig } from '@/lib/config'
import { useState, useEffect } from 'react';

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  const [websiteName, setWebsiteName] = useState('RTRRO');

  useEffect(() => {
    // This code runs only in the browser
    const currentDomain = window.location.hostname;

    if (currentDomain === 'yesterdayly.com') { // Add a condition to only change the specific link
      setWebsiteName('YESTERDAYLY');
    } else if (currentDomain === 'rtrro.com') { 
      setWebsiteName('RTRRO');
    } else if (currentDomain === 'localhost'){
      setWebsiteName('RTRRO');
    } else {
      setWebsiteName('RTRRO');
    }
  }, []);

  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <a href='https://yesterdayly.com'>{websiteName}</a>. All Rights Reserved.
    </div>
  )
}
