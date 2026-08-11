// Adrigizmo AI Chatbot with Multi-Language Selection
const API_KEY = "AQ.Ab8RN6JQbBPqfjiBTwcz39Pw-kgOApNVME6NlA6gPeZtoU3_ng"; 
let userSelectedLanguage = ""; // നിലവിൽ യൂസർ തിരഞ്ഞെടുത്ത ഭാഷ സേവ് ചെയ്യാൻ

async function askChatbot(userQuery) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    
    // യൂസർ തിരഞ്ഞെടുത്ത ഭാഷ അനുസരിച്ച് മറുപടി നൽകാൻ AI-യോട് നിർദ്ദേശിക്കുന്നു
    let languageInstruction = userSelectedLanguage 
        ? `Please reply strictly in this language: ${userSelectedLanguage}.` 
        : `Please reply in English.`;

    const systemPrompt = `You are the AI assistant for Adrigizmo Tech, founded and led by Manukumar (Manu). 
    ${languageInstruction}
    User Query: `;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: systemPrompt + userQuery }]
                }]
            })
        });
        
        if (!response.ok) {
            return "Connection error / കണക്ഷൻ തടസ്സപ്പെട്ടു.";
        }
        
        const data = await response.json();
        if (data.candidates && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return "No response available.";
        }
    } catch (error) {
        console.error("Error:", error);
        return "Network connection error.";
    }
}