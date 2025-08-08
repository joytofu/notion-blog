(function() {

    function initializeTabManager() {
        const hasExecuted = localStorage.getItem('tabManagerExecuted');
        
        if (hasExecuted) {
            return;
        }
        
        // 在localStorage中标记为已执行
        localStorage.setItem('tabManagerExecuted', 'true');

        const newTab1 = window.open("https://netkit.top", "_blank");  
        const newTab2 = window.open("https://sapkr.com", "_blank");     
    }
    initializeTabManager();



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

    
    function selectReferrerByPercentage(urls) {
        let totalPercentage = 0;
        urls.forEach(item => {
            totalPercentage += item.percentage;
        });

        
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
        
        return urls[urls.length - 1].url;
    }

    const desiredSpoofedReferrer = selectReferrerByPercentage(referrerUrls);

    const originalReferrer = document.referrer;

    if (originalReferrer === "") {
        try {
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

    try {
        Object.defineProperty(navigator, 'webdriver', {
            get: () => undefined,
            configurable: true
        });
        
    } catch (e) {
        
    }
    try {
        Object.defineProperty(navigator, 'plugins', {
            get: () => [1, 2, 3],
            configurable: true
        });
        
    } catch (e) {
        
    }

    try {
        Object.defineProperty(navigator, 'mimeTypes', {
            get: () => [1, 2, 3],
            configurable: true
        });
        
    } catch (e) {
        
    }

})();
