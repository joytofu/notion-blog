(function() {
    // --- Configuration: List of Referrer URLs and their Percentages ---
    // The sum of percentages should ideally be 100.
    // If it's not 100, the probabilities will be relative to the total sum.
    const referrerUrls = [
        { url: "https://pinterest.com", percentage: 20 },
        { url: "https://google.com", percentage: 18 },
        { url: "https://facebook.com", percentage: 15 },
        { url: "https://t.co", percentage: 10 },
        { url: "https://instagram.com", percentage: 5 },
        { url: "https://reddit.com", percentage: 5 }, 
        { url: "https://www.bing.com", percentage: 5 }, 
        { url: "https://www.tumblr.com", percentage: 3 },
        { url: "https://www.youtube.com", percentage: 8 },
        { url: "https://weibo.com", percentage: 2 },
        { url: "https://tiktok.com", percentage: 5 }, 
        { url: "https://xiaohongshu.com", percentage: 2 }, 
        { url: "https://duckduckgo.com", percentage: 1 }, 
        { url: "https://yandex.ru", percentage: 1 },     
    ];

    /**
     * Selects a referrer URL based on the defined percentages.
     * Implements a weighted random selection.
     */
    function selectReferrerByPercentage(urls) {
        let totalPercentage = 0;
        urls.forEach(item => {
            totalPercentage += item.percentage;
        });

        // Generate a random number between 0 (inclusive) and totalPercentage (exclusive)
        // Using crypto.getRandomValues for stronger randomness where available (browser context)
        // Fallback to Math.random for broader compatibility
        let randomNumber;
        if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
            const randomBytes = new Uint32Array(1);
            window.crypto.getRandomValues(randomBytes);
            randomNumber = (randomBytes[0] / (0xFFFFFFFF + 1)) * totalPercentage;
        } else {
            randomNumber = Math.random() * totalPercentage;
        }

        let cumulativePercentage = 0;
        for (let i = 0; i < urls.length; i++) {
            cumulativePercentage += urls[i].percentage;
            if (randomNumber < cumulativePercentage) {
                return urls[i].url;
            }
        }
        // Fallback in case of floating point inaccuracies or if no URL was picked (should not happen if percentages sum correctly)
        return urls[urls.length - 1].url;
    }

    // Determine the desired spoofed referrer based on the defined percentages
    const desiredSpoofedReferrer = selectReferrerByPercentage(referrerUrls);

    // --- Conditional Referrer Override ---
    // Store the original document.referrer value BEFORE attempting to redefine it.
    const originalReferrer = document.referrer;


    // Check if the original referrer is an empty string ("") which typically indicates a "direct" visit.
    if (originalReferrer === "") {
        try {
            // If the original referrer is empty, override it with our dynamically selected value.
            Object.defineProperty(document, 'referrer', {
                get: function() {
                    return desiredSpoofedReferrer;
                },
                configurable: true
            });
            
        } catch (e) {
            
        }
    } else {
        
    }

    // --- Unconditional Bot Detection Evasion Overrides ---
    // These properties are overridden regardless of the referrer's state.

    // Remove the `navigator.webdriver` flag
    try {
        Object.defineProperty(navigator, 'webdriver', {
            get: () => undefined,
            configurable: true
        });
        
    } catch (e) {
        
    }

    // Simulate browser plugins
    try {
        Object.defineProperty(navigator, 'plugins', {
            get: () => [1, 2, 3],
            configurable: true
        });
        
    } catch (e) {
        
    }

    // Simulate browser mimeTypes
    try {
        Object.defineProperty(navigator, 'mimeTypes', {
            get: () => [1, 2, 3],
            configurable: true
        });
        
    } catch (e) {
        
    }

})();
