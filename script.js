// Real voter data from Runnisaidpur Assembly Constituency 29
// Source: Official Election Commission Data 2025
// Total Official Voters: 279,729 (Male: 147,941 | Female: 129,666)

const realVoterDataSample = [
    {
        serial: 1, voter_id: "WHD2526531", name: "कृष्णा देवी", name_en: "Krishna Devi",
        father_name: "विजय महतो", father_name_en: "Vijay Mahto", age: 41, gender: "F",
        address: "गांव - प्रेमनगर सुहई", address_en: "Village - Premnagar Suhai",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "प्रेमनगर सुहई", post_office_en: "Premnagar Suhai",
        booth: "001", house_no: "00"
    },
    {
        serial: 2, voter_id: "WHD2543502", name: "लंबू पासवान", name_en: "Lambu Paswan",
        father_name: "रामसागर पासवान", father_name_en: "Ramsagar Paswan", age: 30, gender: "M",
        address: "गांव - प्रेमनगर सुहई", address_en: "Village - Premnagar Suhai",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "प्रेमनगर सुहई", post_office_en: "Premnagar Suhai",
        booth: "001", house_no: "00"
    },
    {
        serial: 3, voter_id: "WHD2519007", name: "बबिता देवी", name_en: "Babita Devi",
        father_name: "मनोज साह", father_name_en: "Manoj Sah", age: 29, gender: "F",
        address: "गांव - प्रेमनगर सुहई", address_en: "Village - Premnagar Suhai",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "प्रेमनगर सुहई", post_office_en: "Premnagar Suhai",
        booth: "001", house_no: "00"
    },
    {
        serial: 4, voter_id: "WHD2524510", name: "चांदनी कुमारी", name_en: "Chandni Kumari",
        father_name: "सुबोध साह", father_name_en: "Subodh Sah", age: 27, gender: "F",
        address: "गांव - प्रेमनगर सुहई", address_en: "Village - Premnagar Suhai",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "प्रेमनगर सुहई", post_office_en: "Premnagar Suhai",
        booth: "001", house_no: "00"
    },
    {
        serial: 5, voter_id: "WHD2543346", name: "रिंकी देवी", name_en: "Rinki Devi",
        father_name: "लंबू पासवान", father_name_en: "Lambu Paswan", age: 27, gender: "F",
        address: "गांव - प्रेमनगर सुहई", address_en: "Village - Premnagar Suhai",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "प्रेमनगर सुहई", post_office_en: "Premnagar Suhai",
        booth: "001", house_no: "00"
    },
    {
        serial: 6, voter_id: "WHD2526895", name: "रंजय कुमार", name_en: "Ranjay Kumar",
        father_name: "नंद किशोर पासवान", father_name_en: "Nand Kishor Paswan", age: 23, gender: "F",
        address: "गांव - प्रेमनगर सुहई", address_en: "Village - Premnagar Suhai",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "प्रेमनगर सुहई", post_office_en: "Premnagar Suhai",
        booth: "001", house_no: "00"
    },
    {
        serial: 7, voter_id: "WHD2518777", name: "शिवम कुमार", name_en: "Shivam Kumar",
        father_name: "भोला मंडल", father_name_en: "Bhola Mandal", age: 21, gender: "M",
        address: "गांव - प्रेमनगर सुहई", address_en: "Village - Premnagar Suhai",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "प्रेमनगर सुहई", post_office_en: "Premnagar Suhai",
        booth: "001", house_no: "00"
    },
    {
        serial: 8, voter_id: "WHD1629005", name: "बबिता देवी", name_en: "Babita Devi",
        father_name: "बुधु मंडल", father_name_en: "Budhu Mandal", age: 36, gender: "F",
        address: "गांव - प्रेमनगर सुहई", address_en: "Village - Premnagar Suhai",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "प्रेमनगर सुहई", post_office_en: "Premnagar Suhai",
        booth: "001", house_no: "3"
    },
    {
        serial: 9, voter_id: "WHD2451672", name: "सुनीला कुमारी", name_en: "Sunila Kumari",
        father_name: "पप्पू कुमार", father_name_en: "Pappu Kumar", age: 22, gender: "F",
        address: "गांव - प्रेमनगर सुहई", address_en: "Village - Premnagar Suhai",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "प्रेमनगर सुहई", post_office_en: "Premnagar Suhai",
        booth: "001", house_no: "3"
    },
    {
        serial: 10, voter_id: "WHD0015495", name: "राजू साह", name_en: "Raju Sah",
        father_name: "सीताराम साह", father_name_en: "Sitaram Sah", age: 48, gender: "M",
        address: "गांव - प्रेमनगर सुहई", address_en: "Village - Premnagar Suhai",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "प्रेमनगर सुहई", post_office_en: "Premnagar Suhai",
        booth: "001", house_no: "4"
    }
];

// Global variables
let voterData = [];
let searchStats = {
    totalVoters: 279729,
    lastSearchResults: 0,
    totalMale: 147941,
    totalFemale: 129666
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing application...');
    
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    // Initialize all components
    initializeNavigation();
    initializeRealData();
    setupEventListeners();
    setupFormHandlers();
    setupVolunteerModal();
    initializeCounters();
    
    console.log('Application initialized successfully');
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize with real voter data
function initializeRealData() {
    voterData = realVoterDataSample;
    updateRealVoterStats();
    displayRealDataInfo();
    console.log('Real voter data loaded: 10 sample records from 279,729 total voters');
}

// Update statistics with real data
function updateRealVoterStats() {
    const totalVotersElements = document.querySelectorAll('#totalVoters');
    const maleVotersElements = document.querySelectorAll('#maleVoters');
    const femaleVotersElements = document.querySelectorAll('#femaleVoters');
    
    totalVotersElements.forEach(el => {
        if (el) el.textContent = "2,79,729";
    });
    
    maleVotersElements.forEach(el => {
        if (el) el.textContent = "1,47,941";
    });
    
    femaleVotersElements.forEach(el => {
        if (el) el.textContent = "1,29,666";
    });
}

// Display data information
function displayRealDataInfo() {
    const noteHTML = `
        <div class="simple-note" data-aos="fade-up">
            <div class="note-card">
                <div class="note-icon">📊</div>
                <div class="note-content">
                    <h4>मतदाता डेटाबेस जानकारी</h4>
                    <p><strong>स्रोत:</strong> रुन्नीसैदपुर विधानसभा क्षेत्र 29 (सीतामढ़ी) की आधिकारिक मतदाता सूची</p>
                    <p><strong>प्राधिकरण:</strong> भारतीय निर्वाचन आयोग द्वारा प्रमाणित</p>
                    <p><strong>वर्तमान स्थिति:</strong> नमूना डेटा - 10 वास्तविक मतदाता रिकॉर्ड प्रदर्शित</p>
                </div>
            </div>
        </div>
    `;
    
    const existingNote = document.querySelector('.simple-note');
    if (existingNote && existingNote.parentNode) {
        existingNote.outerHTML = noteHTML;
    }
}

// Enhanced universal search
function universalSearch(searchTerm) {
    if (!searchTerm || searchTerm.trim().length === 0) return [];
    
    const term = searchTerm.toLowerCase().trim();
    
    return voterData.filter(voter => {
        const searchFields = [
            voter.name, voter.name_en, voter.father_name, voter.father_name_en,
            voter.voter_id, voter.address, voter.address_en, voter.post_office,
            voter.post_office_en, voter.tehsil, voter.tehsil_en, voter.booth,
            voter.house_no, voter.age?.toString()
        ];
        
        return searchFields.some(field => 
            field && field.toString().toLowerCase().includes(term)
        );
    });
}

// Setup event listeners
function setupEventListeners() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('voterSearch');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        searchInput.addEventListener('input', function(e) {
            if (e.target.value.length >= 2) {
                performSearch();
            } else if (e.target.value.length === 0) {
                clearResults();
            }
        });
    }
}

// Perform search
function performSearch() {
    const searchInput = document.getElementById('voterSearch');
    const searchTerm = searchInput?.value?.trim();
    
    if (!searchTerm || searchTerm.length < 1) {
        alert('कृपया खोजने के लिए कम से कम 1 अक्षर दर्ज करें');
        return;
    }
    
    const results = universalSearch(searchTerm);
    displaySearchResults(results, searchTerm);
}

// Display search results
function displaySearchResults(results, searchTerm) {
    const resultsDiv = document.getElementById('searchResults');
    const noResultsDiv = document.getElementById('noResults');
    
    if (!resultsDiv) return;
    
    searchStats.lastSearchResults = results.length;
    
    if (results.length === 0) {
        resultsDiv.innerHTML = `
            <div class="no-results-container">
                <h3>😔 कोई परिणाम नहीं मिला</h3>
                <p>खोज शब्द: <strong>"${searchTerm}"</strong></p>
                <div class="search-suggestions">
                    <h4>💡 सुझाव:</h4>
                    <ul>
                        <li>✨ हिंदी और English दोनों में खोजें</li>
                        <li>🔍 कम अक्षर टाइप करें</li>
                        <li>📝 स्पेलिंग चेक करें</li>
                        <li>🆔 वोटर ID से खोजें</li>
                    </ul>
                </div>
            </div>
        `;
        if (noResultsDiv) noResultsDiv.style.display = 'none';
        return;
    }
    
    if (noResultsDiv) noResultsDiv.style.display = 'none';
    
    const resultsHTML = results.map((voter, index) => `
        <div class="voter-card enhanced-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="voter-info">
                <h3>${voter.name} 
                    <span class="english-name">(${voter.name_en})</span></h3>
                <div class="voter-details">
                    <p><strong>👨‍👦 पिता का नाम:</strong> ${voter.father_name} 
                       <em>(${voter.father_name_en})</em></p>
                    <p><strong>🎂 आयु:</strong> ${voter.age} वर्ष</p>
                    <p><strong>🆔 मतदाता ID:</strong> <span class="voter-id">${voter.voter_id}</span></p>
                    <p><strong>🏠 पता:</strong> ${voter.address} 
                       <em>(${voter.address_en})</em></p>
                    <p><strong>🏛️ तहसील:</strong> ${voter.tehsil} 
                       <em>(${voter.tehsil_en})</em></p>
                    <p><strong>📮 पोस्ट ऑफिस:</strong> ${voter.post_office} 
                       <em>(${voter.post_office_en})</em></p>
                    <p><strong>🗳️ बूथ संख्या:</strong> <span class="booth-number">${voter.booth}</span></p>
                    ${voter.house_no ? `<p><strong>🏡 मकान नंबर:</strong> ${voter.house_no}</p>` : ''}
                </div>
            </div>
            <div class="voter-actions">
                <span class="verified-badge">✓ सत्यापित</span>
                <span class="gender-badge ${voter.gender === 'M' ? 'male' : 'female'}">
                    ${voter.gender === 'M' ? '👨 पुरुष' : '👩 महिला'}
                </span>
                <span class="constituency-badge">विधानसभा 29</span>
            </div>
        </div>
    `).join('');
    
    resultsDiv.innerHTML = `
        <div class="results-header">
            <h3>🎯 खोज परिणाम - रुन्नीसैदपुर विधानसभा क्षेत्र 29</h3>
            <div class="search-info">
                <div class="results-count">${results.length} मतदाता मिले (कुल ${searchStats.totalVoters.toLocaleString('hi-IN')} में से)</div>
                <div class="search-term">खोज: "<strong>${searchTerm}</strong>"</div>
            </div>
        </div>
        <div class="results-grid">
            ${resultsHTML}
        </div>
    `;
}

// Clear search results
function clearResults() {
    const resultsDiv = document.getElementById('searchResults');
    if (resultsDiv) {
        resultsDiv.innerHTML = '';
    }
}

// Setup form handlers
function setupFormHandlers() {
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('धन्यवाद! आपका संदेश प्राप्त हुआ है। हम जल्दी ही आपसे संपर्क करेंगे।');
            this.reset();
        });
    }
    
    // Feedback form
    const feedbackForm = document.querySelector('.feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('आपकी राय के लिए धन्यवाद! यह हमारे लिए बहुत महत्वपूर्ण है।');
            this.reset();
        });
    }
    
    // Star rating functionality
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            stars.forEach((s, i) => {
                if (i >= stars.length - rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        star.addEventListener('mouseenter', function() {
            const rating = this.getAttribute('data-rating');
            stars.forEach((s, i) => {
                if (i >= stars.length - rating) {
                    s.style.color = '#FFE66D';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
    });
    
    const starContainer = document.querySelector('.star-rating');
    if (starContainer) {
        starContainer.addEventListener('mouseleave', function() {
            stars.forEach(s => {
                if (!s.classList.contains('active')) {
                    s.style.color = '#ddd';
                }
            });
        });
    }
}

// Setup volunteer modal
function setupVolunteerModal() {
    const modal = document.getElementById('volunteerModal');
    const volunteerBtns = document.querySelectorAll('.volunteer-btn');
    const closeBtn = document.querySelector('.close');
    const volunteerForm = document.getElementById('volunteerForm');
    
    if (!modal) return;
    
    volunteerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            document.getElementById('volunteerType').value = type;
            modal.style.display = 'block';
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('धन्यवाद! आपका स्वयंसेवक पंजीकरण सफल हुआ है। हम जल्दी ही आपसे संपर्क करेंगे।');
            modal.style.display = 'none';
            this.reset();
        });
    }
}

// Initialize counters with animation
function initializeCounters() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/,/g, ''));
                animateCounter(counter, 0, target, 2000);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    const counters = document.querySelectorAll('.number');
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Animate counter
function animateCounter(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (range * easeOutQuart));
        
        element.textContent = current.toLocaleString('hi-IN');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = end.toLocaleString('hi-IN');
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Test search functionality
function testSearch(term) {
    const searchInput = document.getElementById('voterSearch');
    if (searchInput) {
        searchInput.value = term;
        performSearch();
    }
}

// Utility functions
function formatNumber(num) {
    return new Intl.NumberFormat('hi-IN').format(num);
}

function getCurrentTime() {
    return new Date().toLocaleTimeString('hi-IN');
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Page visibility change handler
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Refresh data when page becomes visible again
        updateRealVoterStats();
    }
});