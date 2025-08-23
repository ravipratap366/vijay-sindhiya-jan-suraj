// Enhanced JavaScript for Jan Suraj Party Campaign Website - Runnisaidpur Vidhan Sabha 29

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

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

// Enhanced Voter Data Search Functionality with Hindi-English Support
let voterData = [];
let searchStats = {
    totalSearches: 0,
    lastSearch: null,
    totalVoters: 0
};

// Hindi to English transliteration mapping
const hindiToEnglishMap = {
    // Vowels
    'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ee', 'उ': 'u', 'ऊ': 'oo', 'ऋ': 'ri', 
    'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au',
    // Consonants
    'क': 'ka', 'ख': 'kha', 'ग': 'ga', 'घ': 'gha', 'ङ': 'nga',
    'च': 'cha', 'छ': 'chha', 'ज': 'ja', 'झ': 'jha', 'ञ': 'nya',
    'ट': 'ta', 'ठ': 'tha', 'ड': 'da', 'ढ': 'dha', 'ण': 'na',
    'त': 'ta', 'थ': 'tha', 'द': 'da', 'ध': 'dha', 'न': 'na',
    'प': 'pa', 'फ': 'pha', 'ब': 'ba', 'भ': 'bha', 'म': 'ma',
    'य': 'ya', 'र': 'ra', 'ल': 'la', 'व': 'va', 'श': 'sha',
    'ष': 'sha', 'स': 'sa', 'ह': 'ha',
    // Numbers
    '०': '0', '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9'
};

// English to Hindi transliteration mapping (reverse)
const englishToHindiMap = Object.fromEntries(
    Object.entries(hindiToEnglishMap).map(([hindi, english]) => [english, hindi])
);

// Common name variations for better search
const nameVariations = {
    // Hindi variations
    'राम': ['ram', 'raam'], 'श्याम': ['shyam', 'shyaam'], 'गोपाल': ['gopal', 'gopaal'],
    'विजय': ['vijay', 'vijaya'], 'सिंह': ['singh', 'sing'], 'कुमार': ['kumar', 'kumarr'],
    'देवी': ['devi', 'devii'], 'प्रसाद': ['prasad', 'prasaad'], 'यादव': ['yadav', 'yaadav'],
    'शर्मा': ['sharma', 'sharmaa'], 'सिंधिया': ['sindhiya', 'sindhia'],
    // Village names
    'रामपुर': ['rampur', 'raampurr'], 'शिवपुर': ['shivpur', 'shivpurr'], 
    'कृष्णपुर': ['krishnapur', 'krishnpurr'], 'गंगापुर': ['gangapur', 'gangapurr'],
    'हनुमानपुर': ['hanumanpur', 'hanumaan'], 'लक्ष्मीपुर': ['laxmipur', 'lakshmipur'],
    'नारायणपुर': ['narayanpur', 'naaraayan'], 'रुन्नीसैदपुर': ['runnisaidpur', 'runnisaipur']
};

// Enhanced demo voter data with both Hindi and English variants
const enhancedDemoVoterData = [
    {
        name: "राम कुमार सिंह", name_en: "Ram Kumar Singh",
        father_name: "श्याम कुमार सिंह", father_name_en: "Shyam Kumar Singh",
        age: 45, voter_id: "ABC1234567",
        address: "गांव - रामपुर", address_en: "Village - Rampur",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "रामपुर", post_office_en: "Rampur",
        booth: "001", gender: "M", house_no: "12/A"
    },
    {
        name: "सीता देवी", name_en: "Sita Devi",
        father_name: "गोपाल सिंह", father_name_en: "Gopal Singh",
        age: 38, voter_id: "DEF2345678",
        address: "गांव - शिवपुर", address_en: "Village - Shivpur",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "शिवपुर", post_office_en: "Shivpur",
        booth: "002", gender: "F", house_no: "25/B"
    },
    {
        name: "अजय कुमार यादव", name_en: "Ajay Kumar Yadav",
        father_name: "सुरेश यादव", father_name_en: "Suresh Yadav",
        age: 29, voter_id: "GHI3456789",
        address: "गांव - कृष्णपुर", address_en: "Village - Krishnapur",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "कृष्णपुर", post_office_en: "Krishnapur",
        booth: "001", gender: "M", house_no: "8/C"
    },
    {
        name: "प्रिया शर्मा", name_en: "Priya Sharma",
        father_name: "राजेश शर्मा", father_name_en: "Rajesh Sharma",
        age: 25, voter_id: "JKL4567890",
        address: "गांव - गंगापुर", address_en: "Village - Gangapur",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "गंगापुर", post_office_en: "Gangapur",
        booth: "003", gender: "F", house_no: "15/D"
    },
    {
        name: "विकास सिंह", name_en: "Vikas Singh",
        father_name: "महेश सिंह", father_name_en: "Mahesh Singh",
        age: 33, voter_id: "MNO5678901",
        address: "गांव - हनुमानपुर", address_en: "Village - Hanumanpur",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "हनुमानपुर", post_office_en: "Hanumanpur",
        booth: "002", gender: "M", house_no: "30/E"
    },
    {
        name: "सुनीता कुमारी", name_en: "Sunita Kumari",
        father_name: "रामेश्वर प्रसाद", father_name_en: "Rameshwar Prasad",
        age: 42, voter_id: "PQR6789012",
        address: "गांव - लक्ष्मीपुर", address_en: "Village - Laxmipur",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "लक्ष्मीपुर", post_office_en: "Laxmipur",
        booth: "001", gender: "F", house_no: "7/F"
    },
    {
        name: "राहुल कुमार", name_en: "Rahul Kumar",
        father_name: "अनिल कुमार", father_name_en: "Anil Kumar",
        age: 22, voter_id: "STU7890123",
        address: "गांव - नारायणपुर", address_en: "Village - Narayanpur",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "नारायणपुर", post_office_en: "Narayanpur",
        booth: "003", gender: "M", house_no: "45/G"
    },
    {
        name: "विजय सिंधिया", name_en: "Vijay Sindhiya",
        father_name: "लालू प्रसाद सिंधिया", father_name_en: "Lalu Prasad Sindhiya",
        age: 48, voter_id: "VJS9999999",
        address: "गांव - रुन्नीसैदपुर मुख्य", address_en: "Village - Main Runnisaidpur",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "रुन्नीसैदपुर", post_office_en: "Runnisaidpur",
        booth: "001", gender: "M", house_no: "1/A"
    },
    {
        name: "रवि प्रताप", name_en: "Ravi Pratap",
        father_name: "अशोक कुमार", father_name_en: "Ashok Kumar",
        age: 35, voter_id: "RVI8888888",
        address: "गांव - डेवलपर नगर", address_en: "Village - Developer Nagar",
        tehsil: "रुन्नीसैदपुर", tehsil_en: "Runnisaidpur",
        post_office: "डेवलपर नगर", post_office_en: "Developer Nagar",
        booth: "002", gender: "M", house_no: "29/B"
    }
];

// Load voter data from JSON file
async function loadVoterData() {
    try {
        const response = await fetch('voter-data.json');
        if (response.ok) {
            voterData = await response.json();
            console.log('✅ Voter data loaded successfully');
            
            // Add English variants if not present
            voterData = voterData.map(voter => ({
                ...voter,
                name_en: voter.name_en || transliterateToEnglish(voter.name),
                father_name_en: voter.father_name_en || transliterateToEnglish(voter.father_name),
                address_en: voter.address_en || transliterateToEnglish(voter.address),
                tehsil_en: voter.tehsil_en || transliterateToEnglish(voter.tehsil || 'रुन्नीसैदपुर'),
                post_office_en: voter.post_office_en || transliterateToEnglish(voter.post_office || '')
            }));
            
            updateVoterStats();
        } else {
            console.log('📝 Voter data file not found. Using demo data.');
            initializeDemoData();
        }
    } catch (error) {
        console.log('⚠️ Error loading voter data:', error);
        initializeDemoData();
    }
}

// Initialize with demo data
function initializeDemoData() {
    voterData = enhancedDemoVoterData;
    updateVoterStats();
    displayDataInstructions();
}

// Transliterate Hindi text to English (basic implementation)
function transliterateToEnglish(hindiText) {
    if (!hindiText) return '';
    
    let result = '';
    for (let char of hindiText) {
        result += hindiToEnglishMap[char] || char;
    }
    return result.toLowerCase();
}

// Transliterate English text to Hindi patterns
function transliterateToHindi(englishText) {
    if (!englishText) return '';
    
    let result = englishText.toLowerCase();
    // Convert common English patterns to Hindi equivalents
    Object.entries(englishToHindiMap).forEach(([eng, hin]) => {
        result = result.replace(new RegExp(eng, 'g'), hin);
    });
    return result;
}

// Enhanced universal search with multi-language support
function universalSearch(searchTerm) {
    if (!searchTerm || searchTerm.trim().length === 0) return [];
    
    const originalTerm = searchTerm.toLowerCase().trim();
    const searchTerms = [originalTerm];
    
    // Add transliterated versions
    if (isHindiText(originalTerm)) {
        searchTerms.push(transliterateToEnglish(originalTerm));
    } else {
        searchTerms.push(transliterateToHindi(originalTerm));
    }
    
    // Add name variations
    Object.entries(nameVariations).forEach(([hindi, englishVars]) => {
        if (originalTerm.includes(hindi.toLowerCase()) || 
            englishVars.some(eng => originalTerm.includes(eng.toLowerCase()))) {
            searchTerms.push(hindi.toLowerCase());
            searchTerms.push(...englishVars);
        }
    });
    
    console.log('🔍 Search terms:', searchTerms);
    
    return voterData.filter(voter => {
        return searchTerms.some(term => {
            return Object.entries(voter).some(([key, value]) => {
                if (value && typeof value === 'string') {
                    const val = value.toLowerCase();
                    return val.includes(term) || 
                           (voter[key + '_en'] && voter[key + '_en'].toLowerCase().includes(term));
                }
                if (value && typeof value === 'number') {
                    return value.toString().includes(term);
                }
                return false;
            });
        });
    });
}

// Check if text contains Hindi characters
function isHindiText(text) {
    return /[\u0900-\u097F]/.test(text);
}

// Update voter statistics
function updateVoterStats() {
    searchStats.totalVoters = voterData.length;
    const maleCount = voterData.filter(v => v.gender === 'M').length;
    const femaleCount = voterData.filter(v => v.gender === 'F').length;
    
    // Update UI elements
    const totalVotersEl = document.getElementById('totalVoters');
    const maleVotersEl = document.getElementById('maleVoters');
    const femaleVotersEl = document.getElementById('femaleVoters');
    
    if (totalVotersEl) totalVotersEl.textContent = searchStats.totalVoters.toLocaleString();
    if (maleVotersEl) maleVotersEl.textContent = maleCount.toLocaleString();
    if (femaleVotersEl) femaleVotersEl.textContent = femaleCount.toLocaleString();
}

// Display instructions for data upload
function displayDataInstructions() {
    const resultsDiv = document.getElementById('searchResults');
    if (!resultsDiv) return;
    
    resultsDiv.innerHTML = `
        <div class="data-instructions">
            <h3>🎯 रुन्नीसैदपुर विधानसभा क्षेत्र 29 - मतदाता डेटा निर्देश:</h3>
            <div class="demo-info">
                <p><strong>🚀 वर्तमान में Demo Data उपलब्ध (${voterData.length} मतदाता)</strong></p>
                <p><strong>🌟 हिंदी और English दोनों में search करें!</strong></p>
                
                <div class="search-examples">
                    <h4>📝 Search Examples (Available Demo Names):</h4>
                    <div class="example-grid">
                        <div class="example-item">
                            <strong>Names:</strong> राम, Ram, विजय, Vijay, रवि, Ravi, प्रिया, Priya
                        </div>
                        <div class="example-item">
                            <strong>Villages:</strong> रामपुर, Rampur, शिवपुर, Shivpur, कृष्णपुर
                        </div>
                        <div class="example-item">
                            <strong>Voter IDs:</strong> ABC123, DEF234, RVI888, VJS999
                        </div>
                        <div class="example-item">
                            <strong>Booths:</strong> 001, 002, 003
                        </div>
                    </div>
                    <div class="quick-test-buttons">
                        <h5>🔍 Quick Test Searches:</h5>
                        <button onclick="testSearch('रवि')">रवि खोजें</button>
                        <button onclick="testSearch('Ravi')">Ravi</button>
                        <button onclick="testSearch('विजय')">विजय</button>
                        <button onclick="testSearch('Ram')">Ram</button>
                        <button onclick="testSearch('002')">Booth 002</button>
                        <button onclick="testSearch('रामपुर')">रामपुर</button>
                    </div>
                </div>
            </div>
            
            <div class="data-upload-info">
                <h4>📊 अपना डेटा अपलोड करने के लिए:</h4>
                <ol>
                    <li>Excel फ़ाइल "🎯_FINAL_ALL_VOTERS.xlsx" को Python script से convert करें</li>
                    <li>Command: <code>python convert_excel_to_json.py</code></li>
                    <li>File को 'voter-data.json' नाम से save करें</li>
                </ol>
            </div>
        </div>
    `;
}

// Specific field search with multi-language support
function searchByField(searchTerm, field) {
    if (!searchTerm) return [];
    
    const originalTerm = searchTerm.toLowerCase().trim();
    const searchTerms = [originalTerm];
    
    // Add transliterated versions for better matching
    if (isHindiText(originalTerm)) {
        searchTerms.push(transliterateToEnglish(originalTerm));
    } else {
        searchTerms.push(transliterateToHindi(originalTerm));
    }
    
    return voterData.filter(voter => {
        const fieldValue = voter[field] || voter[field + '_en'] || '';
        return searchTerms.some(term => 
            fieldValue.toString().toLowerCase().includes(term)
        );
    });
}

// Advanced search with multiple criteria
function advancedSearch(criteria) {
    return voterData.filter(voter => {
        return Object.entries(criteria).every(([field, value]) => {
            if (!value || value.trim() === '') return true; // Skip empty criteria
            
            const searchTerm = value.toLowerCase().trim();
            const voterValue = voter[field] || voter[field + '_en'] || '';
            
            // Multi-language search for each field
            const searchTerms = [searchTerm];
            if (isHindiText(searchTerm)) {
                searchTerms.push(transliterateToEnglish(searchTerm));
            } else {
                searchTerms.push(transliterateToHindi(searchTerm));
            }
            
            return searchTerms.some(term => 
                voterValue.toString().toLowerCase().includes(term)
            );
        });
    });
}

// Display search results with enhanced UI and language support
function displayResults(results, searchTerm = '') {
    const resultsDiv = document.getElementById('searchResults');
    const noResultsDiv = document.getElementById('noResults');
    
    if (!resultsDiv) return;
    
    searchStats.totalSearches++;
    searchStats.lastSearch = new Date();
    updateSearchStats();
    
    if (results.length === 0) {
        resultsDiv.innerHTML = `
            <div class="no-results-message">
                <h3>😔 कोई परिणाम नहीं मिला</h3>
                <p>खोज शब्द: <strong>"${searchTerm}"</strong></p>
                <div class="search-suggestions">
                    <h4>💡 सुझाव:</h4>
                    <ul>
                        <li>✨ हिंदी और English दोनों में try करें</li>
                        <li>🔍 कम अक्षर टाइप करें (जैसे: राम instead of राम कुमार)</li>
                        <li>📝 Spelling check करें</li>
                        <li>🏘️ गांव का नाम try करें</li>
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
                <h3>${highlightSearchTerm(voter.name, searchTerm)} 
                    <span class="english-name">(${highlightSearchTerm(voter.name_en || '', searchTerm)})</span></h3>
                <div class="voter-details">
                    <p><strong>👨‍👦 पिता का नाम:</strong> ${highlightSearchTerm(voter.father_name, searchTerm)} 
                       <em>(${highlightSearchTerm(voter.father_name_en || '', searchTerm)})</em></p>
                    <p><strong>🎂 आयु:</strong> ${voter.age} वर्ष</p>
                    <p><strong>🆔 मतदाता ID:</strong> <span class="voter-id">${highlightSearchTerm(voter.voter_id, searchTerm)}</span></p>
                    <p><strong>🏠 पता:</strong> ${highlightSearchTerm(voter.address, searchTerm)} 
                       <em>(${highlightSearchTerm(voter.address_en || '', searchTerm)})</em></p>
                    <p><strong>🏛️ तहसील:</strong> ${highlightSearchTerm(voter.tehsil || 'रुन्नीसैदपुर', searchTerm)} 
                       <em>(${highlightSearchTerm(voter.tehsil_en || 'Runnisaidpur', searchTerm)})</em></p>
                    <p><strong>📮 पोस्ट ऑफिस:</strong> ${highlightSearchTerm(voter.post_office || 'N/A', searchTerm)} 
                       <em>(${highlightSearchTerm(voter.post_office_en || 'N/A', searchTerm)})</em></p>
                    <p><strong>🗳️ बूथ संख्या:</strong> <span class="booth-number">${highlightSearchTerm(voter.booth, searchTerm)}</span></p>
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
                <div class="results-count">${results.length} मतदाता मिले (कुल ${searchStats.totalVoters} में से)</div>
                <div class="search-term">खोज: "<strong>${searchTerm}</strong>"</div>
            </div>
        </div>
        <div class="results-grid">
            ${resultsHTML}
        </div>
        <div class="results-footer">
            <p><strong>🏛️ विधानसभा क्षेत्र:</strong> रुन्नीसैदपुर (29), सीतामढ़ी जिला</p>
            <p><strong>🌟 प्रत्याशी:</strong> विजय सिंधिया (जन सुराज पार्टी)</p>
        </div>
    `;
    
    // Refresh AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// Enhanced highlight function with better matching
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm || !text) return text;
    
    const terms = [searchTerm];
    if (isHindiText(searchTerm)) {
        terms.push(transliterateToEnglish(searchTerm));
    } else {
        terms.push(transliterateToHindi(searchTerm));
    }
    
    let highlightedText = text;
    terms.forEach(term => {
        if (term.trim()) {
            const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
        }
    });
    
    return highlightedText;
}

// Escape special regex characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Update search statistics
function updateSearchStats() {
    const statsDiv = document.getElementById('searchStats');
    if (!statsDiv) return;
    
    const lastSearchTime = searchStats.lastSearch ? 
        searchStats.lastSearch.toLocaleTimeString() : 'कभी नहीं';
    
    statsDiv.innerHTML = `
        <div class="stats-container">
            <div class="stats-item">
                <span class="stats-icon">🔍</span>
                <span class="stats-label">कुल खोजें:</span>
                <span class="stats-value">${searchStats.totalSearches}</span>
            </div>
            <div class="stats-item">
                <span class="stats-icon">👥</span>
                <span class="stats-label">कुल मतदाता:</span>
                <span class="stats-value">${searchStats.totalVoters}</span>
            </div>
            <div class="stats-item">
                <span class="stats-icon">⏰</span>
                <span class="stats-label">अंतिम खोज:</span>
                <span class="stats-value">${lastSearchTime}</span>
            </div>
            <div class="stats-item">
                <span class="stats-icon">🏛️</span>
                <span class="stats-label">विधानसभा:</span>
                <span class="stats-value">रुन्नीसैदपुर (29)</span>
            </div>
        </div>
    `;
    statsDiv.style.display = 'block';
}

// Tab functionality for search
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.add('hidden'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            const targetContent = document.getElementById(`${targetTab}-search`);
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
});

// Enhanced form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    const voterSearchForm = document.getElementById('voterSearchForm');
    
    if (voterSearchForm) {
        voterSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const activeTab = document.querySelector('.tab-btn.active')?.getAttribute('data-tab') || 'quick';
            let results = [];
            let searchTerm = '';
            
            console.log('🔍 Search initiated, active tab:', activeTab);
            
            if (activeTab === 'quick') {
                // Universal search
                const searchInput = document.getElementById('universalSearch');
                searchTerm = searchInput ? searchInput.value.trim() : '';
                
                console.log('🔍 Quick search term:', searchTerm);
                
                if (searchTerm) {
                    results = universalSearch(searchTerm);
                    console.log('✅ Search results:', results.length);
                } else {
                    alert('कृपया खोज के लिए कुछ टाइप करें / Please type something to search');
                    return;
                }
            } else {
                // Advanced search
                const criteria = {
                    name: document.getElementById('searchName')?.value.trim() || '',
                    father_name: document.getElementById('searchFather')?.value.trim() || '',
                    age: document.getElementById('searchAge')?.value.trim() || '',
                    voter_id: document.getElementById('searchVoterID')?.value.trim() || '',
                    address: document.getElementById('searchAddress')?.value.trim() || '',
                    tehsil: document.getElementById('searchTehsil')?.value.trim() || '',
                    post_office: document.getElementById('searchPostOffice')?.value.trim() || '',
                    booth: document.getElementById('searchBooth')?.value.trim() || ''
                };
                
                console.log('🔍 Advanced search criteria:', criteria);
                
                results = advancedSearch(criteria);
                searchTerm = Object.values(criteria).find(v => v) || '';
                
                if (!searchTerm) {
                    alert('कृपया कम से कम एक फील्ड भरें / Please fill at least one field');
                    return;
                }
            }
            
            displayResults(results, searchTerm);
        });
    } else {
        console.error('❌ Voter search form not found!');
    }
});

// Clear search function
function clearSearch() {
    const form = document.getElementById('voterSearchForm');
    if (form) form.reset();
    
    const resultsDiv = document.getElementById('searchResults');
    const noResultsDiv = document.getElementById('noResults');
    const statsDiv = document.getElementById('searchStats');
    
    if (resultsDiv) resultsDiv.innerHTML = '';
    if (noResultsDiv) noResultsDiv.style.display = 'none';
    if (statsDiv) statsDiv.style.display = 'none';
    
    console.log('🗑️ Search cleared');
}

// Show search tips function
function showSearchTips() {
    const tipsDiv = document.querySelector('.search-tips') || createSearchTips();
    tipsDiv.style.display = tipsDiv.style.display === 'none' ? 'block' : 'none';
}

// Create enhanced search tips
function createSearchTips() {
    const tipsDiv = document.createElement('div');
    tipsDiv.className = 'search-tips';
    tipsDiv.innerHTML = `
        <h4>🔍 खोज के बेहतरीन टिप्स:</h4>
        <div class="tips-grid">
            <div class="tip-item">
                <strong>🌐 भाषा:</strong> हिंदी और English दोनों में search करें
            </div>
            <div class="tip-item">
                <strong>✂️ छोटे शब्द:</strong> राम instead of राम कुमार सिंह
            </div>
            <div class="tip-item">
                <strong>🆔 ID Search:</strong> ABC123, DEF234 जैसे parts भी काम करेंगे
            </div>
            <div class="tip-item">
                <strong>🏘️ गांव:</strong> रामपुर, Rampur, शिवपुर सभी काम करेगा
            </div>
            <div class="tip-item">
                <strong>🗳️ बूथ:</strong> 001, 002 से सभी मतदाता देखें
            </div>
            <div class="tip-item">
                <strong>📱 Mobile:</strong> Touch friendly interface
            </div>
        </div>
        <div class="example-searches">
            <h5>उदाहरण खोजें:</h5>
            <button onclick="testSearch('रवि')">रवि प्रताप</button>
            <button onclick="testSearch('Ravi')">Ravi Pratap</button>
            <button onclick="testSearch('विजय')">विजय</button>
            <button onclick="testSearch('Ram')">Ram</button>
            <button onclick="testSearch('001')">बूथ 001</button>
            <button onclick="testSearch('रामपुर')">रामपुर</button>
        </div>
    `;
    
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.appendChild(tipsDiv);
    }
    
    return tipsDiv;
}

// Real-time search as user types (debounced)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add real-time search functionality
document.addEventListener('DOMContentLoaded', function() {
    const universalSearchInput = document.getElementById('universalSearch');
    if (universalSearchInput) {
        const debouncedSearch = debounce((searchTerm) => {
            if (searchTerm.length >= 2) {
                console.log('🔍 Real-time search:', searchTerm);
                const results = universalSearch(searchTerm);
                displayResults(results, searchTerm);
            } else if (searchTerm.length === 0) {
                clearSearch();
            }
        }, 500);
        
        universalSearchInput.addEventListener('input', (e) => {
            debouncedSearch(e.target.value);
        });
        
        // Add placeholder animation
        universalSearchInput.addEventListener('focus', function() {
            this.setAttribute('data-placeholder', this.placeholder);
            this.placeholder = 'टाइप करना शुरू करें... Start typing...';
        });
        
        universalSearchInput.addEventListener('blur', function() {
            this.placeholder = this.getAttribute('data-placeholder') || this.placeholder;
        });
    }
});

// Volunteer modal functionality (unchanged)
document.addEventListener('DOMContentLoaded', function() {
    const volunteerBtns = document.querySelectorAll('.volunteer-btn');
    const modal = document.getElementById('volunteerModal');
    const closeBtn = modal ? modal.querySelector('.close') : null;
    const volunteerForm = document.getElementById('volunteerForm');
    
    volunteerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const volunteerType = this.getAttribute('data-type');
            if (modal) {
                modal.style.display = 'block';
                document.getElementById('volunteerType').value = volunteerType;
                
                const titles = {
                    'promotion': 'प्रचार कार्यकर्ता बनें',
                    'community': 'सामुदायिक सेवा में जुड़ें',
                    'election': 'चुनाव कार्यकर्ता बनें',
                    'digital': 'डिजिटल प्रमोटर बनें'
                };
                modal.querySelector('h3').textContent = titles[volunteerType];
            }
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('🎉 धन्यवाद! आपका स्वयंसेवक पंजीकरण सफल रहा। विजय सिंधिया की टीम जल्द ही आपसे संपर्क करेगी।');
            modal.style.display = 'none';
            this.reset();
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Enhanced feedback functionality
document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.querySelector('.feedback-form');
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
        
        star.addEventListener('mouseover', function() {
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
    
    const starRating = document.querySelector('.star-rating');
    if (starRating) {
        starRating.addEventListener('mouseleave', function() {
            stars.forEach(star => {
                if (!star.classList.contains('active')) {
                    star.style.color = '#ddd';
                } else {
                    star.style.color = '#FFE66D';
                }
            });
        });
    }
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('🙏 धन्यवाद आपकी राय के लिए! विजय सिंधिया और जन सुराज पार्टी के लिए आपकी फीडबैक बहुत महत्वपूर्ण है।');
            this.reset();
            stars.forEach(star => star.classList.remove('active'));
        });
    }
});

// Contact form handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('📞 धन्यवाद! आपका संदेश विजय सिंधिया तक पहुंचाया जाएगा। हम जल्द ही आपसे संपर्क करेंगे।');
            this.reset();
        });
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Enhanced booth finder with multi-language support
document.addEventListener('DOMContentLoaded', function() {
    const boothSearch = document.getElementById('boothSearch');
    const boothResults = document.getElementById('boothResults');
    
    if (boothSearch && boothResults) {
        boothSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm.length < 2) {
                boothResults.innerHTML = '';
                return;
            }
            
            const boothInfo = voterData.reduce((acc, voter) => {
                const matchesSearch = 
                    voter.address.toLowerCase().includes(searchTerm) ||
                    (voter.address_en && voter.address_en.toLowerCase().includes(searchTerm)) ||
                    voter.post_office.toLowerCase().includes(searchTerm) ||
                    (voter.post_office_en && voter.post_office_en.toLowerCase().includes(searchTerm));
                
                if (matchesSearch) {
                    if (!acc[voter.booth]) {
                        acc[voter.booth] = {
                            booth: voter.booth,
                            address: voter.address,
                            address_en: voter.address_en,
                            post_office: voter.post_office,
                            post_office_en: voter.post_office_en,
                            count: 0
                        };
                    }
                    acc[voter.booth].count++;
                }
                return acc;
            }, {});
            
            const results = Object.values(boothInfo);
            
            if (results.length > 0) {
                boothResults.innerHTML = results.map(booth => `
                    <div class="booth-result">
                        <strong>🗳️ बूथ ${booth.booth}</strong><br>
                        📍 ${booth.address} <em>(${booth.address_en || ''})</em><br>
                        📮 ${booth.post_office} <em>(${booth.post_office_en || ''})</em><br>
                        👥 ${booth.count} मतदाता<br>
                        <small>🏛️ विधानसभा क्षेत्र: रुन्नीसैदपुर (29)</small>
                    </div>
                `).join('');
            } else {
                boothResults.innerHTML = `
                    <div class="no-booth-found">
                        <p>😔 कोई बूथ नहीं मिला।</p>
                        <small>हिंदी या English में try करें</small>
                    </div>
                `;
            }
        });
    }
});

// Test search function for example buttons
function testSearch(searchTerm) {
    const searchInput = document.getElementById('universalSearch');
    if (searchInput) {
        searchInput.value = searchTerm;
        const results = universalSearch(searchTerm);
        displayResults(results, searchTerm);
        
        // Scroll to results
        const resultsDiv = document.getElementById('searchResults');
        if (resultsDiv) {
            resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing Jan Suraj Party Website...');
    
    // Load voter data
    loadVoterData();
    
    // Initialize animations observer for new elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.manifesto-card, .voter-card, .volunteer-card, .info-card');
    animateElements.forEach(el => observer.observe(el));
    
    console.log('✅ Jan Suraj Party Website Initialized Successfully! 🎯');
    console.log('🏛️ रुन्नीसैदपुर विधानसभा क्षेत्र 29 - विजय सिंधिया');
    console.log('🌟 बिहार के बदलाव के लिए - जन सुराज पार्टी 🚀');
});

// Add enhanced CSS styles for new elements
const enhancedStyles = `
<style>
.constituency-number {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
}

.constituency-details {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    backdrop-filter: blur(5px);
}

.constituency-details p {
    margin: 5px 0;
    font-size: 0.95rem;
}

.enhanced-card {
    position: relative;
    overflow: hidden;
}

.enhanced-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,107,53,0.1), transparent);
    transition: left 0.5s;
}

.enhanced-card:hover::before {
    left: 100%;
}

.english-name {
    font-size: 0.9rem;
    color: var(--text-light);
    font-weight: normal;
}

.voter-details p em {
    color: var(--text-light);
    font-size: 0.85rem;
}

.voter-id, .booth-number {
    font-family: monospace;
    background: var(--light-color);
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: bold;
}

.constituency-badge {
    background: linear-gradient(135deg, #FF6B35, #F7931E);
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
    margin-top: 5px;
    display: inline-block;
}

.search-info {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 10px;
}

.search-term {
    background: var(--light-color);
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
}

.results-footer {
    text-align: center;
    margin-top: 30px;
    padding: 20px;
    background: var(--light-color);
    border-radius: 15px;
    border-top: 3px solid var(--primary-color);
}

.no-results-message {
    text-align: center;
    padding: 40px;
    background: var(--light-color);
    border-radius: 20px;
    margin: 20px 0;
}

.search-suggestions {
    margin-top: 20px;
    text-align: left;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.search-suggestions ul {
    list-style: none;
    padding: 0;
}

.search-suggestions li {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
}

.demo-info {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 25px;
}

.search-examples {
    margin-top: 15px;
}

.example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    margin-top: 10px;
}

.example-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 8px;
    backdrop-filter: blur(5px);
}

.data-upload-info {
    background: var(--white);
    padding: 20px;
    border-radius: 15px;
    border-left: 5px solid var(--primary-color);
}

.stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
}

.stats-item {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--white);
    padding: 10px;
    border-radius: 10px;
    box-shadow: var(--shadow);
}

.stats-icon {
    font-size: 1.2rem;
}

.tips-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    margin-bottom: 15px;
}

.tip-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 8px;
    font-size: 0.9rem;
}

.example-searches button,
.quick-test-buttons button {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.3s ease;
}

.example-searches button:hover,
.quick-test-buttons button:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.quick-test-buttons {
    margin-top: 15px;
    text-align: center;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(5px);
}

.quick-test-buttons h5 {
    color: white;
    margin-bottom: 10px;
    font-size: 1rem;
}

.no-booth-found {
    text-align: center;
    padding: 20px;
    background: var(--light-color);
    border-radius: 10px;
    color: var(--text-light);
}

/* Mobile optimizations */
@media (max-width: 768px) {
    .search-info {
        flex-direction: column;
        gap: 10px;
    }
    
    .example-grid {
        grid-template-columns: 1fr;
    }
    
    .stats-container {
        grid-template-columns: 1fr 1fr;
    }
    
    .tips-grid {
        grid-template-columns: 1fr;
    }
    
    .english-name {
        display: block;
        margin-top: 5px;
    }
    
    .voter-details p em {
        display: block;
        margin-top: 2px;
    }
}
</style>
`;

// Inject enhanced styles
document.head.insertAdjacentHTML('beforeend', enhancedStyles);