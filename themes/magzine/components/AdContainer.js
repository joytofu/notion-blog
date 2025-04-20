import React, { useState, useEffect, useRef } from 'react';
import ImpactAdsRight from '@/components/ImpactAdsRight';

const AdContainer = (props) => {
  const [showFallbackAd, setShowFallbackAd] = useState(false);
  const adContainerId = 'container-913b771a97c5554c5c9f4cee77f8b36c';

  const checkTimeoutRef = useRef(null);

  useEffect(() => {
    const checkDelay = 2000; 

    checkTimeoutRef.current = setTimeout(() => {
      const container = document.getElementById(adContainerId);
      if (container && container.children.length === 0) {
        setShowFallbackAd(true);
      }
    }, checkDelay);

    return () => {
      if (checkTimeoutRef.current) {
        clearTimeout(checkTimeoutRef.current);
      }
    };

  }, []); 

  return (
    showFallbackAd && <ImpactAdsRight {...props}/>
  );
};


export default AdContainer;