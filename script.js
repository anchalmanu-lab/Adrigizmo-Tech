let currentLanguage = "English";

// സമഗ്രമായ ഡാറ്റാബേസ് (ഡാറ്റാബേസിൽ നിന്നുള്ള പ്രധാന ചോദ്യങ്ങളും ഉത്തരങ്ങളും)
const localDatabase = [
    // 1. Adrigizmo Services & Info
    { question: "whatsapp support", answer: "You can contact us via WhatsApp at +91 8921818932 or email us at adrigizmouniverse@gmail.com." },
    { question: "about m.t. manukumar", answer: "M.T. Manukumar is the founder and team leader at ADRIGIZMO TECH TECHNICS, specializing in engineering maintenance and career upskilling." },
    { question: "contact details", answer: "You can reach us at ADRIGIZMO UNIVERSE, Kazhakkoottam, Trivandrum, Kerala, or via WhatsApp at +91 8921818932." },
    { question: "corporate training", answer: "We offer professional corporate and team training solutions. Contact us via WhatsApp for customized programs." },
    { question: "technopark campus", answer: "Our hub campus is located near Technopark, Thiruvananthapuram, Kerala - 695582." },

    // 2. Free Courses & Alison
    { question: "course assessment process", answer: "All courses on Alison via ADRIGIZMO are 100% free to learn with optional certificates upon passing module assessments." },
    { question: "alison free courses", answer: "You can explore 6,000+ free international accredited courses on Alison via our portal, covering IT, HSE, Engineering, and Management." },
    { question: "duration of courses", answer: "Courses range from short 4-hour safety certificates to 20-hour comprehensive diplomas, completely self-paced." },
    { question: "how to register for free", answer: "Simply click 'Register Free' or choose any course category on our website to create a free account on Alison and start learning." },
    { question: "accredited certificates", answer: "Courses carry CPD accreditation, adding genuine value to your professional resume and LinkedIn profile." },
    { question: "is purchasing a certificate mandatory", answer: "No, purchasing a certificate is entirely optional. You can study all course materials 100% for free." },

    // 3. ATS Resume Builder
    { question: "what is ats resume", answer: "Our 100% free ATS Resume Builder helps you create executive-level resumes designed to pass Applicant Tracking Systems instantly." },
    { question: "how to build a resume", answer: "Use our ATS Resume Builder tool on the website, fill in your details step-by-step, choose a professional theme, and download your clean PDF." },
    { question: "privacy of data", answer: "Your personal data is processed strictly inside your browser and is never stored on our external servers." },
    { question: "custom templates", answer: "We offer multiple professional templates including Classic ATS, Modern Blue, Executive, and Corporate styles." },

    // 4. Game & Challenge
    { question: "3d escape room challenge", answer: "You can test your professional knowledge across IT, Safety, and Mechanics by playing our interactive 3D Escape Room Challenge game." },
    { question: "how to play", answer: "Select your professional field (IT, Safety, Mechanics, etc.), answer 5 levels of technical questions before time runs out to escape the facility!" },
    { question: "purpose of game", answer: "The game provides an engaging way to test your industry expertise and take a fun break during your upskilling journey." }
];

// ഭാഷ (Language) സെറ്റ് ചെയ്യുന്ന ഫംഗ്ഷൻ
function setLanguage(lang) {
    currentLanguage = lang;
    const messages = document.getElementById('chat-messages');
    
    messages.innerHTML += `<div style="text-align: right; background: #007bff; color: white; padding: 8px 12px; border-radius: 8px; align-self: flex-end; max-width: 80%; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><b>Selected:</b> ${lang}</div>`;
    
    let welcomeText = "Language set to English. How can I assist you?";
    if (lang === 'Malayalam') {
        welcomeText = "ഭാഷ മലയാളത്തിലേക്ക് മാറ്റിയിരിക്കുന്നു. ADRIGIZMO TECH TECHNICS-ലേക്ക് സ്വാഗതം! എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?";
    } else if (lang === 'Hindi') {
        welcomeText = "भाषा हिंदी में बदल दी गई है। ADRIGIZMO TECH TECHNICS में आपका स्वागत है!";
    } else if (lang === 'Tamil') {
        welcomeText = "மொழி தமிழுக்கு மாற்றப்பட்டுள்ளது. ADRIGIZMO TECH TECHNICS-க்கு உங்களை வரவேற்கிறோம்!";
    }

    messages.innerHTML += `
        <div style="display: flex; align-items: flex-start; gap: 8px; max-width: 90%;">
            <img src="https://i.postimg.cc/FKXjY7Bx/Screenshot-2026-08-12-083039.png" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover; flex-shrink: 0; margin-top: 2px;" alt="Manu">
            <div style="background: white; color: #333; padding: 8px 12px; border-radius: 8px; border: 1px solid #e0e0e0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <b>Ask to Manu:</b> ${welcomeText}
            </div>
        </div>`;
    messages.scrollTop = messages.scrollHeight;
}

// പെട്ടെന്ന് ക്ലിക്ക് ചെയ്ത് ചോദിക്കാൻ പാകത്തിലുള്ള ക്വിക്ക് ബട്ടണുകൾ
function sendDefaultQuery(queryText) {
    document.getElementById('user-input').value = queryText;
    sendMessage();
}

// ചോദ്യത്തിന് മറുപടി നൽകുന്ന പ്രധാന ലോജിക് (askChatbot)
async function askChatbot(userQuery, selectedLang = "English") {
    const query = userQuery.toLowerCase().trim();

    // പൊതുവായ അഭിസംബോധനകൾ
    if (query === 'hi' || query === 'hello' || query === 'hey') {
        return selectedLang === 'Malayalam' ? "ഹലോ! ഞാൻ മനു, എനിക്ക് നിങ്ങളെ എങ്ങനെയാണ് സഹായിക്കേണ്ടത്?" : "Hi! I am Manu, how can I help you?";
    }
    if (query.includes('who are you') || query.includes('enthaanu')) {
        return selectedLang === 'Malayalam' ? "ഞാൻ അഡ്രിഗിസ്മോ ടെക്നോളജീസിന്റെ എഐ അസിസ്റ്റന്റാണ്. ഇത് സ്ഥാപിച്ചത് മനു ആണ്." : "I am the AI assistant for Adrigizmo Tech, founded and led by Manukumar (Manu).";
    }

    // ഡാറ്റാബേസിൽ നിന്ന് മാച്ച് ചെയ്യുന്ന ഉത്തരം കണ്ടെത്തുന്നു
    let matchedAnswer = "";
    for (let item of localDatabase) {
        if (query.includes(item.question) || item.question.includes(query)) {
            matchedAnswer = item.answer;
            break;
        }
    }

    // കീവേഡ് ബേസ്ഡ് ജനറൽ ചെക്ക്
    if (!matchedAnswer) {
        if (query.includes('course') || query.includes('free') || query.includes('കോഴ്സ്')) {
            matchedAnswer = "You can explore 6,000+ free international accredited courses on Alison via our portal.";
        } else if (query.includes('resume') || query.includes('cv') || query.includes('സിവി')) {
            matchedAnswer = "You can use our 100% free ATS Resume Builder to create professional CVs instantly and download them as a clean PDF.";
        } else if (query.includes('game') || query.includes('play') || query.includes('ഗെയിം')) {
            matchedAnswer = "You can check out our 3D Escape Room Challenge game on the platform for a fun professional break!";
        } else if (query.includes('contact') || query.includes('whatsapp') || query.includes('നമ്പർ')) {
            matchedAnswer = "You can reach us via WhatsApp at +91 8921818932 or email us at adrigizmouniverse@gmail.com.";
        }
    }

    if (matchedAnswer) {
        return matchedAnswer;
    }

    // മാച്ച് ലഭിച്ചില്ലെങ്കിൽ
    return selectedLang === 'Malayalam'  
        ? "ക്ഷമിക്കണം, നിങ്ങളുടെ ഈ ചോദ്യത്തിനുള്ള ഉത്തരം ഇപ്പോൾ ലഭ്യമല്ല. ദയവായി WhatsApp വഴി ബന്ധപ്പെടുക: +91 8921818932"  
        : "I am here to help you with free courses and ATS resumes on ADRIGIZMO TECH TECHNICS. Feel free to ask!";
}