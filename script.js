// ADRIGIZMO TECH TECHNICS - Click-Based Interactive Menu Chatbot Code
const adrigizmoBotData = {
    greeting: "Hi, its me Manu, welcome to Adrigizmo! How can I help you?",
    languages: [
        { code: "en", label: "English" },
        { code: "ml", label: "മലയാളം" },
        { code: "hi", label: "हिन्दी" },
        { code: "ta", label: "தமிழ்" }
    ],
    categories: {
        about_alison: {
            title: { en: "About Alison", ml: "അബൗട്ട് അലിസൺ", hi: "अलिज़न के बारे में", ta: "அலிசன் பற்றி" },
            qa: [
                {
                    q: { en: "What is Alison?", ml: "അലിസൺ എന്നാൽ എന്ത്?", hi: "अलिज़न क्या है?", ta: "அலிசன் என்றால் என்ன?" },
                    a: { en: "Alison is a global online learning platform providing free, certified courses. We are its official affiliate partner.", ml: "സൗജന്യ സർട്ടിഫൈഡ് കോഴ്സുകൾ നൽകുന്ന ആഗോള ഓൺലൈൻ ലേണിംഗ് പ്ലാറ്റ്‌ഫോമാണ് അലിസൺ. ഞങ്ങൾ ഇതിന്റെ ഔദ്യോഗിക അഫിലിയേറ്റ് പങ്കാളിയാണ്.", hi: "अलिज़न एक वैश्विक ऑनलाइन शिक्षण मंच है जो मुफ्त, प्रमाणित पाठ्यक्रम प्रदान करता है।", ta: "அலிசன் என்பது இலவச, சான்றளிக்கப்பட்ட படிப்புகளை வழங்கும் ஒரு உலகளாவிய ஆன்லைன் கற்றல் தளமாகும்." }
                },
                {
                    q: { en: "Are these courses completely free?", ml: "കോഴ്സുകൾ പൂർണ്ണമായും സൗജന്യമാണോ?", hi: "क्या ये कोर्सेज पूरी तरह से मुफ्त हैं?", ta: "படிப்புகள் முற்றிலும் இலவசமா?" },
                    a: { en: "Yes, learning and completing the courses are 100% free.", ml: "അതെ, കോഴ്സുകൾ പഠിക്കുന്നതും പൂർത്തിയാക്കുന്നതും 100% സൗജന്യമാണ്.", hi: "हाँ, पाठ्यक्रम सीखना और पूरा करना 100% निःशुल्क है.", ta: "ஆம், படிப்புகளைக் கற்றுக்கொள்வதும் முடிப்பதும் 100% இலவசம்." }
                },
                {
                    q: { en: "Do I get a certificate after completion?", ml: "കോഴ്സ് പൂർത്തിയാക്കിയാൽ സർട്ടിഫിക്കറ്റ് ലഭിക്കുമോ?", hi: "क्या कोर्स पूरा होने पर सर्टिफिकेट मिलेगा?", ta: "படிப்பை முடித்தவுடன் சான்றிதழ் கிடைக்குமா?" },
                    a: { en: "Yes, you can purchase or download official digital/printed certificates from Alison after passing.", ml: "അതെ, പാസ്സായ ശേഷം അലിസണിൽ നിന്ന് ഔദ്യോഗിക ഡിജിറ്റൽ/പ്രിന്റഡ് സർട്ടിഫിക്കറ്റുകൾ ഡൗൺലോഡ് ചെയ്യാം.", hi: "हाँ, आप उत्तीर्ण होने के बाद आधिकारिक डिजिटल/प्रिंटेड सर्टिफिकेट प्राप्त कर सकते हैं.", ta: "ஆம், தேர்ச்சி பெற்ற பிறகு உத்தியோகபூர்வ டிஜிட்டல்/அச்சிட்டப்பட்ட சான்றிதண்களைப் பெறலாம்." }
                },
                {
                    q: { en: "Is there any time limit to complete a course?", ml: "കോഴ്സ് തീർക്കാൻ സമയപരിധി ഉണ്ടോ?", hi: "क्या कोर्स पूरा करने की कोई समय सीमा है?", ta: "படிப்பை முடிக்க காலக்கெடு உள்ளதா?" },
                    a: { en: "No, all courses are self-paced; you can learn anytime, anywhere.", ml: "ഇല്ല, എല്ലാ കോഴ്സുകളും സെൽഫ് പേസ്ഡ് ആണ്; എപ്പോൾ വേണമെങ്കിലും എവിടെ വെച്ചും പഠിക്കാം.", hi: "नहीं, सभी पाठ्यक्रम स्व-गति से चलते हैं; आप कभी भी, कहीं भी सीख सकते हैं.", ta: "இல்லை, அனைத்து படிப்புகளும் சுய வேகத்தில் கற்றுக் கொள்ளக்கூடியவை; எப்போது வேண்டுமானாலும் கற்கலாம்." }
                },
                {
                    q: { en: "How does Adrigizmo's partnership work?", ml: "അഡ്രിഗിസ്മോയുടെ പങ്കാളിത്തം എങ്ങനെയാണ്?", hi: "एड्रिजिस्मों की साझेदारी कैसे काम करती है?", ta: "அட்ரிஜிஸ்மோவின் கூட்டாண்மை எப்படி வேலை செய்கிறது?" },
                    a: { en: "We guide learners to access the best free global courses easily through our platform.", ml: "ഞങ്ങളുടെ പ്ലാറ്റ്‌ഫോം വഴി മികച്ച സൗജന്യ ആഗോള കോഴ്സുകൾ എളുപ്പത്തിൽ ആക്‌സസ് ചെയ്യാൻ ഞങ്ങൾ സഹായിക്കുന്നു.", hi: "हम शिक्षार्थियों को हमारे मंच के माध्यम से सर्वश्रेष्ठ मुफ्त वैश्विक पाठ्यक्रमों तक पहुंचने में मार्गदर्शन करते हैं.", ta: "எங்கள் தளம் மூலம் சிறந்த இலவச உலகளாவிய படிப்புகளை எளிதாக அணுக வழிகாட்டுகிறோம்." }
                },
                {
                    q: { en: "Who can join these courses?", ml: "ആർക്കൊക്കെ ഈ കോഴ്സുകൾ പഠിക്കാം?", hi: "इन कोर्सेज में कौन शामिल हो सकता है?", ta: "யார் வேண்டுமானாலும் இந்த படிப்புகளில் சேரலாமா?" },
                    a: { en: "Students, job seekers, and working professionals—anyone looking to upgrade their skills.", ml: "വിദ്യാർത്ഥികൾ, ജോലി അന്വേഷിക്കുന്നവർ, പ്രൊഫഷണലുകൾ - ആർക്കും സ്കിൽ അപ്‌ഗ്രേഡ് ചെയ്യാൻ പഠിക്കാം.", hi: "छात्र, नौकरी चाहने वाले और कामकाजी पेशेवर - कोई भी अपने कौशल को अपग्रेड कर सकता है.", ta: "மாணவர்கள், வேலை தேடுபவர்கள் மற்றும் வல்லுநர்கள் - எவரும் தங்கள் திறன்களை மேம்படுத்தலாம்." }
                }
            ]
        },
        adrigizmo_courses: {
            title: { en: "Adrigizmo Courses", ml: "അഡ്രിഗിസ്മോ കോഴ്സുകൾ", hi: "एड्रिजिस्मो कोर्सेज", ta: "அட்ரிஜிஸ்மோ படிப்புகள்" },
            qa: [
                {
                    q: { en: "What types of courses are available?", ml: "ഏതൊക്കെ തരം കോഴ്സുകൾ ലഭ്യമാണ്?", hi: "किस प्रकार के कोर्सेज उपलब्ध हैं?", ta: "என்ன வகையான படிப்புகள் உள்ளன?" },
                    a: { en: "Mechanical, HSE, IT, Business, Management, and English communication courses.", ml: "മെക്കാനിക്കൽ, എച്ച്.എസ്.ഇ, ഐ.ടി, ബിസിനസ്സ്, മാനേജ്‌മെന്റ്, ഇംഗ്ലീഷ് കമ്മ്യൂണിക്കേഷൻ കോഴ്സുകൾ.", hi: "मैकेनिकल, एचएसई, आईटी, बिजनेस, मैनेजमेंट और अंग्रेजी संचार पाठ्यक्रम।" }
                },
                {
                    q: { en: "How to enroll in a course?", ml: "കോഴ്സിൽ എങ്ങനെ ജോയിൻ ചെയ്യാം?", hi: "कोर्स में कैसे नामांकन करें?", ta: "படிப்பில் எவ்வாறு இணைவது?" },
                    a: { en: "Visit our website, select your preferred category, and click the link to start learning.", ml: "ഞങ്ങളുടെ വെബ്‌സൈറ്റ് സന്ദർശಿಸಿ, പ്രിഫേർഡ് കാറ്റഗറി തിരഞ്ഞെടുത്ത് പഠനം ആരംഭിക്കാം." }
                },
                {
                    q: { en: "Are these courses beginner-friendly?", ml: "തുടക്കക്കാർക്ക് പഠിക്കാൻ പറ്റിയതാണോ?", hi: "क्या ये कोर्सेज शुरुआती लोगों के लिए हैं?", ta: "ஆரம்பநிலையாளர்களுக்கு இது ஏற்றதா?" },
                    a: { en: "Yes, we have courses ranging from basic to advanced levels.", ml: "അതെ, അടിസ്ഥാന തലം മുതൽ അഡ്വാൻസ്ഡ് തലം വരെയുള്ള കോഴ്സുകൾ ലഭ്യമാണ്." }
                },
                {
                    q: { en: "Do I need prior experience?", ml: "മുൻപരിചയം വേണോ?", hi: "क्या पहले से अनुभव होना जरूरी है?", ta: "முன்னனுபவம் தேவையா?" },
                    a: { en: "No prior experience is required for most foundational courses.", ml: "ഭൂരിഭാഗം അടിസ്ഥാന കോഴ്സുകൾക്കും മുൻപരിചയം ആവശ്യമില്ല." }
                },
                {
                    q: { en: "Can I study using a mobile phone?", ml: "മൊബൈൽ വഴി പഠിക്കാൻ പറ്റുമോ?", hi: "क्या मोबाइल से पढ़ाई की जा सकती है?", ta: "மொபைல் மூலம் படிக்கலாமா?" },
                    a: { en: "Yes, the platform is fully mobile-friendly.", ml: "അതെ, പ്ലാറ്റ്‌ഫോം പൂർണ്ണമായും മൊബൈൽ ഫ്രണ്ട്‌ലി ആണ്." }
                },
                {
                    q: { en: "Are the certificates globally recognized?", ml: "സർട്ടിഫിക്കറ്റുകൾക്ക് അന്താരാഷ്ട്ര അംഗീകാരമുണ്ടോ?", hi: "क्या इन सर्टिफिकेट्स की عالمی मान्यता है?", ta: "சான்றிதழ்களுக்கு சர்வதேச அங்கீகாரம் உள்ளதா?" },
                    a: { en: "Yes, Alison certificates are recognized by employers worldwide.", ml: "അതെ, അലിസൺ സർട്ടിഫിക്കറ്റുകൾ ലോകമെമ്പാടുമുള്ള തൊഴിലുടമകൾ അംഗീകരിച്ചവയാണ്." }
                }
            ]
        },
        resume_builder: {
            title: { en: "Adrigizmo Resume Builder", ml: "അഡ്രിഗിസ്മോ റെസ്യൂമെ ബിൽഡർ", hi: "एड्रिजिस्मो रिज्यूमे बिल्डर", ta: "அட்ரிஜிஸ்மோ ரெஸ்யூமே பில்டர்" },
            qa: [
                {
                    q: { en: "What is an ATS Resume?", ml: "ATS റെസ്യൂമെ എന്നാൽ എന്ത്?", hi: "ATS रिज्यूमे क्या है?", ta: "ATS ரெஸ்யூமே என்றால் என்ன?" },
                    a: { en: "Applicant Tracking System (ATS) resumes pass automated employer screening software.", ml: "ഓട്ടോമേറ്റഡ് സോഫ്റ്റ്‌വെയറുകൾക്ക് എളുപ്പത്തിൽ റീഡ് ചെയ്യാൻ പാകത്തിലുള്ള റെസ്യൂമെയാണ് ATS റെസ്യൂമെ." }
                },
                {
                    q: { en: "Is the Resume Builder free?", ml: "റെസ്യൂമെ ബിൽഡർ സൗജന്യമാണോ?", hi: "क्या रिज्यूमे बिल्डर मुफ्त है?", ta: "ரெஸ்யூமே பில்டர் இலவசமா?" },
                    a: { en: "Yes, our AI-powered ATS resume builder is completely free to use.", ml: "അതെ, ഞങ്ങളുടെ AI-പവേർഡ് ATS റെസ്യൂമെ ബിൽഡർ പൂർണ്ണമായും സൗജന്യമാണ്." }
                },
                {
                    q: { en: "How to create a resume here?", ml: "ഇവിടെ എങ്ങനെ റെസ്യൂമെ ഉണ്ടാക്കാം?", hi: "यहां रिज्यूमे कैसे बनाएं?", ta: "இங்கு எப்படி ரெஸ்யூமே உருவாக்குவது?" },
                    a: { en: "Fill in your details into our template and generate the PDF instantly.", ml: "ടെംപ്ലേറ്റിൽ നിങ്ങളുടെ വിവരങ്ങൾ നൽകി ഇൻസ്റ്റന്റ് ആയി പിഡിഎഫ് ജനറേറ്റ് ചെയ്യാം." }
                },
                {
                    q: { en: "Why is ATS important for jobs?", ml: "ജോലിക്ക് ATS എന്തിനാണ് പ്രധാനം?", hi: "नौकरी के लिए ATS क्यों महत्वपूर्ण है?", ta: "வேலைக்கு ATS ஏன் முக்கியம்?" },
                    a: { en: "Most companies use ATS software to filter resumes before human review.", ml: "ഹ്യൂമൻ റിവ്യൂവിന് മുൻപ് റെസ്യൂമെകൾ ഫിൽട്ടർ ചെയ്യാൻ കമ്പനികൾ ATS സോഫ്റ്റ്‌വെയർ ഉപയോഗിക്കുന്നു." }
                },
                {
                    q: { en: "Can I download it as PDF?", ml: "പിഡിഎഫ് ആയി ഡൗൺലോഡ് ചെയ്യാൻ പറ്റുമോ?", hi: "क्या इसे पीडीएफ के रूप में डाउनलोड किया जा सकता है?", ta: "PDF ஆக பதிவிறக்கம் செய்யலாமா?" },
                    a: { en: "Yes, you can instantly download your professional resume in PDF format.", ml: "അതെ, പ്രൊഫഷണൽ റെസ്യൂമെ PDF ഫോർമാറ്റിൽ ഡൗൺലോഡ് ചെയ്യാം." }
                },
                {
                    q: { en: "Can I update my resume later?", ml: "റെസ്യൂമെ പിന്നീട് എഡിറ്റ് ചെയ്യാൻ പറ്റുമോ?", hi: "क्या मैं बाद में अपना रिज्यूमे अपडेट कर सकता हूँ?", ta: "ரெஸ்யூமேவை பிறகு மாற்றியமைக்க முடியுமா?" },
                    a: { en: "Yes, you can modify and update your details anytime.", ml: "അതെ, എപ്പോൾ വേണമെങ്കിലും നിങ്ങളുടെ വിവരങ്ങൾ മാറ്റാം." }
                }
            ]
        },
        skill_zone: {
            title: { en: "Adrigizmo Skill Zone", ml: "അഡ്രിഗിസ്മോ സ്കിൽ സോൺ", hi: "एड्रिजिस्मो स्किल ज़ोन", ta: "அட்ரிஜிஸ்மோ ஸ்கில் சோன்" },
            qa: [
                {
                    q: { en: "What is Skill Zone?", ml: "സ്കിൽ സോൺ എന്നാൽ എന്ത്?", hi: "स्किल ज़ोन क्या है?", ta: "ஸ்கில் சோன் என்றால் என்ன?" },
                    a: { en: "A dedicated section to enhance practical technical and industrial skills.", ml: "പ്രായോഗിക സാങ്കേതിക, വ്യാവസായിക സ്കില്ലുകൾ മെച്ചപ്പെടുത്താനുള്ള പ്രത്യേക വിഭാഗം." }
                },
                {
                    q: { en: "Who is this designed for?", ml: "ഇത് ആർക്കുവേണ്ടിയാണ്?", hi: "यह किसके लिए डिज़ाइन किया गया है?", ta: "இது யாருக்காக வடிவமைக்கப்பட்டுள்ளது?" },
                    a: { en: "Technicians, engineers, students, and industrial workers.", ml: "ടെക്നീഷ്യന്മാർ, എൻജിനീയർമാർ, വിദ്യാർത്ഥികൾ, വ്യാവസായിക ജീവനക്കാർ എന്നിവർക്കായി." }
                },
                {
                    q: { en: "Are there practical modules?", ml: "പ്രായോഗിക പരിശീലന പാഠങ്ങളുണ്ടോ?", hi: "क्या इसमें व्यावहारिक मॉड्यूल हैं?", ta: "நடைமுறை பாடங்கள் உள்ளதா?" },
                    a: { en: "Yes, focused on industry-standard engineering and technical concepts.", ml: "അതെ, ഇൻഡസ്ട്രി സ്റ്റാൻഡേർഡ് എൻജിനീയറിങ് കൺസെപ്റ്റുകൾ ഉൾക്കൊള്ളുന്നു." }
                },
                {
                    q: { en: "Can I learn safety standards (HSE)?", ml: "സുരക്ഷാ മാനദണ്ഡങ്ങൾ (HSE) പഠിക്കാമോ?", hi: "क्या सुरक्षा मानक (HSE) सीख सकते हैं?", ta: "பாதுகாப்பு தரநிலைகளை (HSE) கற்றுக்கொள்ளலாமா?" },
                    a: { en: "Yes, dedicated HSE and workplace safety modules are available.", ml: "അതെ, പ്രത്യേക HSE, വർക്ക്പ്ലേസ് സേഫ്റ്റി മോഡ്യൂളുകൾ ലഭ്യമാണ്." }
                },
                {
                    q: { en: "Is there any assessment?", ml: "ടെസ്റ്റുകളും വിലയിരുത്തലുകളും ഉണ്ടോ?", hi: "क्या कोई मूल्यांकन है?", ta: "சோதனைகள் உள்ளதா?" },
                    a: { en: "Yes, quizzes and module tests help verify your learning progress.", ml: "അതെ, ക്വിസുകളും ടെസ്റ്റുകളും വഴി പഠനനിലവാരം പരിശോധിക്കാം." }
                },
                {
                    q: { en: "How does it help in career growth?", ml: "കരിയർ വളർച്ചയ്ക്ക് ഇത് എങ്ങനെ സഹായിക്കും?", hi: "यह करियर विकास में कैसे मदद करता है?", ta: "இது எப்படி கரியர் வளர்ச்சிக்கு உதவும்?" },
                    a: { en: "It bridges the gap between basic education and industrial skill requirements.", ml: "അടിസ്ഥാന വിദ്യാഭ്യാസവും ഇൻഡസ്ട്രി ആവശ്യങ്ങളും തമ്മിലുള്ള അന്തരം ഇത് കുറയ്ക്കുന്നു." }
                }
            ]
        },
        career_placement: {
            title: { en: "Adrigizmo Career & Placement", ml: "കരിയർ & പ്ലേസ്മെന്റ്", hi: "करियर और प्लेसमेंट", ta: "வேலைவாய்ப்பு & இடம்" },
            qa: [
                {
                    q: { en: "Do you provide job placement?", ml: "ജോലി സാധ്യതകൾ (പ്ലേസ്മെന്റ്) ലഭ്യമാണോ?", hi: "क्या आप जॉब प्लेसमेंट प्रदान करते हैं?", ta: "வேலை வாய்ப்பு கிடைக்கிறதா?" },
                    a: { en: "We provide career guidance, skill enhancement, and placement support resources.", ml: "കരിയർ ഗൈഡൻസും സ്കിൽ സപ്പോർട്ടുമാണ് ഞങ്ങൾ നൽകുന്നത്." }
                },
                {
                    q: { en: "How to improve interview chances?", ml: "അഭിമുഖങ്ങളിൽ വിജയിക്കാൻ എന്ത് ചെയ്യണം?", hi: "इंटरव्यू में सफलता कैसे पाएं?" },
                    a: { en: "Use our ATS resume builder and complete relevant skill courses to stand out.", ml: "ഞങ്ങളുടെ ATS റെസ്യൂമെ ബിൽഡറും കോഴ്സുകളും ഉപയോഗിച്ച് നിങ്ങളുടെ പ്രൊഫൈൽ മെച്ചപ്പെടുത്താം." }
                },
                {
                    q: { en: "Are career consultation sessions available?", ml: "കരിയർ കൺസൾട്ടേഷൻ ലഭ്യമാണോ?", hi: "क्या करियर परामर्श सत्र उपलब्ध हैं?" },
                    a: { en: "Yes, you can contact us directly via WhatsApp for guidance.", ml: "അതെ, ഗൈഡൻസിനായി വാട്സാപ്പ് വഴി നേരിട്ട് ബന്ധപ്പെടാം." }
                },
                {
                    q: { en: "Which industries have high demand?", ml: "ഏതൊക്കെ മേഖലകളിലാണ് തൊഴിൽ സാധ്യത കൂടുതൽ?", hi: "किन उद्योगों में अधिक मांग है?" },
                    a: { en: "Mechanical, Oil & Gas, IT, HSE, and Management sectors.", ml: "മെക്കാനിക്കൽ, ഓയിൽ & ഗ്യാസ്, ഐ.ടി, എച്ച്.എസ്.ഇ, മാനേജ്‌മെന്റ്." }
                },
                {
                    q: { en: "Do you help freshers?", ml: "ഫ്രെഷേഴ്സിന് സഹായം ലഭിക്കുമോ?", hi: "क्या फ्रेशर्स को मदद मिलती है?" },
                    a: { en: "Yes, we guide freshers on building their initial profile and resume.", ml: "അതെ, ഫ്രെഷേഴ്സിന് പ്രൊഫൈലും റെസ്യൂമെയും ഉണ്ടാക്കാൻ ഗൈഡ് ചെയ്യുന്നു." }
                },
                {
                    q: { en: "How to contact for career support?", ml: "കരിയർ സപ്പോർട്ടിന് എങ്ങനെ ബന്ധപ്പെടാം?", hi: "करियर सपोर्ट के लिए कैसे संपर्क करें?" },
                    a: { en: "Reach out via our official WhatsApp number: +91 8921818932.", ml: "ഞങ്ങളുടെ ഔദ്യോഗിക വാട്സാപ്പ് നമ്പറിൽ ബന്ധപ്പെടുക: +91 8921818932." }
                }
            ]
        },
        contacts: {
            title: { en: "Contacts", ml: "കോൺടാക്ട്സ്", hi: "संपर्क", ta: "தொடர்புகள்" },
            qa: [
                {
                    q: { en: "How can I contact Adrigizmo?", ml: "അഡ്രിഗിസ്മോയെ എങ്ങനെ ബന്ധപ്പെടാം?", hi: "एड्रिजिस्मों से कैसे संपर्क करें?" },
                    a: { en: "You can contact us via WhatsApp or email anytime.", ml: "ഏത് സമയത്തും വാട്സാപ്പ് വഴിയോ ഇമെയിൽ വഴിയോ ബന്ധപ്പെടാം." }
                },
                {
                    q: { en: "What is the WhatsApp number?", ml: "വാട്സാപ്പ് നമ്പർ ഏതാണ്?", hi: "व्हाट्सएप नंबर क्या है?" },
                    a: { en: "Our official WhatsApp contact is +91 8921818932.", ml: "ഞങ്ങളുടെ വാട്സാപ്പ് നമ്പർ: +91 8921818932." }
                },
                {
                    q: { en: "What is the email address?", ml: "ഇമെയിൽ വിലാസം എന്താണ്?", hi: "ईमेल पता क्या है?" },
                    a: { en: "adrigizmouniverse@gmail.com", ml: "adrigizmouniverse@gmail.com" }
                },
                {
                    q: { en: "Where is the office located?", ml: "ഓഫീസ് എവിടെയാണ് സ്ഥിതി ചെയ്യുന്നത്?", hi: "कार्यालय कहां स्थित है?" },
                    a: { en: "Kazhakuttom, Thiruvananthapuram, Kerala - 695582.", ml: "കഴക്കൂട്ടം, തിരുവനന്തപുരം, കേരളം - 695582." }
                },
                {
                    q: { en: "What is the response time?", ml: "മറുപടി ലഭിക്കാൻ എത്ര സമയം എടുക്കും?", hi: "जवाब मिलने में कितना समय लगता है?" },
                    a: { en: "We usually respond within 24 hours.", ml: "സാധാരണയായി 24 മണിക്കൂറിനുള്ളിൽ മറുപടി നൽകും." }
                },
                {
                    q: { en: "Can I get direct support?", ml: "നേരിട്ട് സംസാരിക്കാൻ സഹായം കിട്ടുമോ?", hi: "क्या सीधी सहायता मिल सकती है?" },
                    a: { en: "Yes, click the WhatsApp chat option for instant assistance at +91 8921818932.", ml: "അതെ, വാട്സാപ്പ് വഴി ഇൻസ്റ്റന്റ് സപ്പോർട്ട് ലഭിക്കുന്നതാണ് (+91 8921818932)." }
                }
            ]
        }
    },
    feedback: {
        question: { en: "My reply was helpful?", ml: "എന്റെ മറുപടി സഹായകരമായോ?", hi: "क्या मेरा जवाब मददगार था?", ta: "எனது பதில் உதவியாக இருந்ததா?" },
        yes: { en: "Yes", ml: "അതെ", hi: "हाँ", ta: "ஆம்" },
        no: { en: "No", ml: "ഇല്ല", hi: "नहीं", ta: "இல்லை" },
        whatsappText: { en: "Chat with WhatsApp (+91 8921818932)", ml: "വാട്സാപ്പിൽ ചാറ്റ് ചെയ്യൂ (+91 8921818932)", hi: "व्हाट्सएप पर चैट करें (+91 8921818932)", ta: "வாட்ஸ்அப்பில் அரட்டையடிக்கவும் (+91 8921818932)" },
        whatsappUrl: "https://wa.me/918921818932"
    }
};

// --- ചാറ്റ് ഇന്ററാക്ഷൻ ലോജിക് ---
let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('manu-chat-toggle');
    const closeBtn = document.getElementById('manu-chat-close');
    const chatWindow = document.getElementById('manu-chat-window');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
            if (chatWindow.style.display === 'flex') {
                startChatFlow();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            chatWindow.style.display = 'none';
        });
    }
});

// ചാറ്റ് ഫ്ലോ സ്റ്റാർട്ട് ചെയ്യുന്ന ഫംഗ്ഷൻ (ഫുൾ ബോഡി ഇമേജ് & ഗ്രീറ്റിംഗ് സഹിതം)
function startChatFlow() {
    const chatBody = document.getElementById('manu-chat-body');
    if (!chatBody) return;
    chatBody.innerHTML = '';
    
    // പ്രൊഫഷണൽ ഫുൾ-ബോഡി ഇമേജ് ഹെഡ്‌ടാഗ് ആയി ചേർക്കുന്നു
    let imgDiv = document.createElement('div');
    imgDiv.style.cssText = "text-align: center; margin-bottom: 8px;";
    imgDiv.innerHTML = `<img src="https://i.postimg.cc/tTtnZkxp/55af0393-50a5-46c0-b427-5708a6ef4859-removebg-preview.png" alt="Manu" style="max-width: 120px; height: auto; object-fit: contain;">`;
    chatBody.appendChild(imgDiv);

    // ഗ്രീറ്റിംഗ് മെസ്സേജ്
    appendMessage(adrigizmoBotData.greeting);
    
    // ഭാഷ തിരഞ്ഞെടുക്കാനുള്ള ബട്ടണുകൾ
    let langDiv = document.createElement('div');
    langDiv.style.cssText = "display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; margin-top: 5px;";

    adrigizmoBotData.languages.forEach(lang => {
        let btn = document.createElement('button');
        btn.innerText = lang.label;
        btn.style.cssText = "background: #007bff; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;";
        btn.onclick = () => {
            currentLang = lang.code;
            appendMessage(lang.label, true);
            showCategories();
        };
        langDiv.appendChild(btn);
    });
    chatBody.appendChild(langDiv);
}

// പ്രധാന കാറ്റഗറികൾ കാണിക്കുന്ന ഫംഗ്ഷൻ
function showCategories() {
    const chatBody = document.getElementById('manu-chat-body');
    appendMessage(currentLang === 'ml' ? "ഒരു വിഭാഗം തിരഞ്ഞെടുക്കൂ:" : "Select a category:");

    let catDiv = document.createElement('div');
    catDiv.style.cssText = "display: flex; flex-direction: column; gap: 5px; margin-top: 5px;";

    for (let key in adrigizmoBotData.categories) {
        let cat = adrigizmoBotData.categories[key];
        let btn = document.createElement('button');
        btn.innerText = cat.title[currentLang] || cat.title['en'];
        btn.style.cssText = "background: #28a745; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer; text-align: left; font-size: 13px; font-weight: bold;";
        btn.onclick = () => {
            appendMessage(btn.innerText, true);
            showQuestions(key);
        };
        catDiv.appendChild(btn);
    }
    chatBody.appendChild(catDiv);
}

// ആ കാറ്റഗറിയിലെ ചോദ്യങ്ങൾ കാണിക്കുന്ന ഫംഗ്ഷൻ
function showQuestions(catKey) {
    const chatBody = document.getElementById('manu-chat-body');
    let category = adrigizmoBotData.categories[catKey];
    
    appendMessage(currentLang === 'ml' ? "നിങ്ങളുടെ സംശയം തിരഞ്ഞെടുക്കൂ:" : "Select your question:");

    let qDiv = document.createElement('div');
    qDiv.style.cssText = "display: flex; flex-direction: column; gap: 5px; margin-top: 5px;";

    category.qa.forEach(item => {
        let qText = item.q[currentLang] || item.q['en'];
        let aText = item.a[currentLang] || item.a['en'];

        let btn = document.createElement('button');
        btn.innerText = qText;
        btn.style.cssText = "background: #f1f1f1; color: #333; border: 1px solid #ccc; padding: 8px; border-radius: 6px; cursor: pointer; text-align: left; font-size: 12px;";
        btn.onclick = () => {
            appendMessage(qText, true);
            appendMessage(aText);
            showFeedback();
        };
        qDiv.appendChild(btn);
    });
    chatBody.appendChild(qDiv);
}

// ഫീഡ്‌ബാക്ക് (Yes / No) കാണിക്കുന്ന ഫംഗ്ഷൻ
function showFeedback() {
    const chatBody = document.getElementById('manu-chat-body');
    let fb = adrigizmoBotData.feedback;
    
    appendMessage(fb.question[currentLang] || fb.question['en']);

    let fbDiv = document.createElement('div');
    fbDiv.style.cssText = "display: flex; gap: 10px; margin-top: 5px;";

    let yesBtn = document.createElement('button');
    yesBtn.innerText = fb.yes[currentLang] || fb.yes['en'];
    yesBtn.style.cssText = "background: #28a745; color: white; border: none; padding: 6px 15px; border-radius: 6px; cursor: pointer; font-size: 12px;";
    yesBtn.onclick = () => {
        appendMessage(yesBtn.innerText, true);
        appendMessage(currentLang === 'ml' ? "നന്ദി! സന്തോഷം." : "Thank you! Glad I could help.");
        setTimeout(startChatFlow, 2000);
    };

    let noBtn = document.createElement('button');
    noBtn.innerText = fb.no[currentLang] || fb.no['en'];
    noBtn.style.cssText = "background: #dc3545; color: white; border: none; padding: 6px 15px; border-radius: 6px; cursor: pointer; font-size: 12px;";
    noBtn.onclick = () => {
        appendMessage(noBtn.innerText, true);
        let waLink = document.createElement('a');
        waLink.href = fb.whatsappUrl;
        waLink.target = "_blank";
        waLink.innerText = fb.whatsappText[currentLang] || fb.whatsappText['en'];
        waLink.style.cssText = "display: inline-block; background: #25D366; color: white; padding: 8px 12px; border-radius: 6px; text-decoration: none; margin-top: 5px; font-weight: bold; font-size: 12px;";
        chatBody.appendChild(waLink);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    fbDiv.appendChild(yesBtn);
    fbDiv.appendChild(noBtn);
    chatBody.appendChild(fbDiv);
}

// മെസ്സേജുകൾ ചാറ്റിലേക്ക് ചേർക്കാനും ഓട്ടോ-സ്ക്രോൾ വർക്ക് ചെയ്യാനുമുള്ള ഫംഗ്ഷൻ
function appendMessage(text, isUser = false) {
    const chatBody = document.getElementById('manu-chat-body');
    if (!chatBody) return;
    
    let msgDiv = document.createElement('div');
    msgDiv.innerHTML = text;
    msgDiv.style.cssText = isUser ? 
        "background: #007bff; color: white; padding: 8px 12px; border-radius: 8px; max-width: 80%; align-self: flex-end; word-break: break-word; font-size: 13px;" : 
        "background: #e4e6eb; color: #333; padding: 8px 12px; border-radius: 8px; max-width: 80%; align-self: flex-start; word-break: break-word; font-size: 13px;";
    
    chatBody.appendChild(msgDiv);
    
    // പുതിയ മെസ്സേജുകൾ വരുമ്പോൾ വിൻഡോ താഴേക്ക് ഓട്ടോമാറ്റിക് ആയി സ്ക്രോൾ ആകും
    setTimeout(() => {
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 50);
}