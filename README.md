# विजय सिंधिया - जन सुराज पार्टी | Campaign Website

बिहार के रुन्नीसैदपुर विधानसभा क्षेत्र के लिए विजय सिंधिया जी की चुनावी वेबसाइट।

## Features / विशेषताएं

- **Responsive Design**: Mobile और desktop दोनों के लिए optimized
- **Voter Search**: मतदाता सूची में नाम खोजने की सुविधा
- **Jan Suraj Party Information**: पार्टी का विजन और संदेश
- **Social Media Integration**: Facebook और Instagram links
- **Contact Form**: संपर्क फॉर्म
- **Multi-language Support**: हिंदी और अंग्रेजी

## Setup Instructions / सेटअप निर्देश

### 1. Files Structure
```
project-folder/
├── index.html          (मुख्य वेबसाइट)
├── styles.css          (Styling)
├── script.js           (JavaScript functionality)
├── convert_excel_to_json.py (Excel converter)
├── voter-data.json     (मतदाता डेटा - बनाने के लिए)
├── image/             (Photos folder)
│   ├── WhatsApp Image 2025-08-23 at 11.22.55 PM.jpeg
│   ├── WhatsApp Image 2025-08-23 at 11.22.56 PM.jpeg
│   └── ... (other images)
└── corrected_extraction/
    └── 🎯_FINAL_ALL_VOTERS.xlsx
```

### 2. Excel को JSON में Convert करना

#### Method 1: Python Script का उपयोग करें
```bash
# Python और pandas install करें
pip install pandas openpyxl

# Script चलाएं
python convert_excel_to_json.py
```

#### Method 2: Manual Conversion
1. Excel file को CSV में save करें
2. Online JSON converter का उपयोग करें
3. Result को `voter-data.json` के नाम से save करें

### 3. Website को Run करना

#### Local Development:
```bash
# Simple HTTP server
python -m http.server 8000
# या
php -S localhost:8000
```

#### Live Server (VS Code Extension):
1. VS Code में folder खोलें
2. Live Server extension install करें
3. index.html को right-click करें → "Open with Live Server"

## Key Features Detail / मुख्य विशेषताएं

### 1. Hero Section
- विजय सिंधिया की photo
- जन सुराज पार्टी का logo और slogan
- "बिहार ने कर ली तैयारी, अपने बच्चों की है बारी"

### 2. About Section
- Personal introduction
- Social media links
- Achievements list

### 3. Vision Section
- Jan Suraj Party का दर्शन
- 6 मुख्य विषय:
  - शिक्षा (Education)
  - रोजगार (Employment) 
  - सामाजिक सुरक्षा (Social Security)
  - स्वास्थ्य सेवा (Healthcare)
  - इंफ्रास्ट्रक्चर (Infrastructure)
  - न्याय (Justice)

### 4. Voter Search
- नाम से search
- पिता के नाम से search
- आयु से search
- मतदाता ID से search
- Demo data included for testing

### 5. Contact Section
- Contact form
- Social media integration
- Address information

## Customization / अनुकूलन

### Colors (styles.css में):
```css
:root {
    --primary-color: #FF6B35;    /* मुख्य रंग */
    --secondary-color: #F7931E;  /* द्वितीयक रंग */
    --accent-color: #FFE66D;     /* उच्चारण रंग */
}
```

### Content Updates:
- **Personal Info**: `index.html` में "About Section" edit करें
- **Vision**: Vision section में अपने विचार add करें
- **Contact**: Contact section में phone/email update करें

### Images:
- `image/` folder में नई photos add करें
- HTML में image paths update करें

## Voter Data Format / मतदाता डेटा फॉर्मेट

JSON file में यह structure होना चाहिए:
```json
[
    {
        "name": "राम कुमार",
        "father_name": "श्याम कुमार", 
        "age": 45,
        "voter_id": "ABC1234567",
        "address": "गांव - रामपुर, रुन्नीसैदपुर",
        "booth": "001"
    }
]
```

## Social Media Integration


## Jan Suraj Party Information

### Official Slogans:
- "बिहार ने कर ली तैयारी, अपने बच्चों की है बारी"
- "जय बिहार!"

### Philosophy:
- गांधीवादी दर्शन (Gandhian Philosophy)
- केंद्र से केंद्र-बाएं विचारधारा (Centre to centre-left ideology)
- बच्चों के भविष्य पर फोकस

### Mission:
- बच्चों के लिए world-class education
- युवाओं के लिए employment
- बुजुर्गों के लिए social security

## Technical Notes / तकनीकी जानकारी

### Browser Compatibility:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers supported

### Performance:
- Optimized images
- Minified CSS/JS (production ready)
- Fast loading times

### SEO:
- Proper meta tags
- Hindi language support
- Social media meta tags

## Troubleshooting / समस्या समाधान

### Common Issues:

1. **Images not loading**:
   - Check image file paths
   - Ensure images are in `image/` folder

2. **Voter search not working**:
   - Check if `voter-data.json` exists
   - Verify JSON format is correct

3. **Hindi text not displaying**:
   - Ensure UTF-8 encoding
   - Check font loading

### Support:
इस website के लिए technical support की जरूरत हो तो Excel file को JSON में convert करने के instructions follow करें।

## Deployment / लाइव करना

### GitHub Pages (Free):
1. GitHub account बनाएं
2. Repository create करें
3. Files upload करें
4. Settings → Pages में enable करें

### Web Hosting:
किसी भी web hosting service पर upload करें।

---

**Created with ❤️ for Jan Suraj Party Campaign**
**बिहार के बदलाव के लिए | विजय सिंधिया के साथ**
