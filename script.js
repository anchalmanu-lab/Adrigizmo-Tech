// Adrigizmo AI Chatbot Integration Script with Fixed Proxy
const API_KEY = "AQ.Ab8RN6JQbBPqfjiBTwcz39Pw-kgOApNVME6NlA6gPeZtoU3_ng"; 

async function askChatbot(userQuery) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: "You are the AI assistant for Adrigizmo Tech, founded and led by Manukumar (Manu). Answer user queries based on the provided database, and when appropriate, introduce Manu as the founder/lead behind Adrigizmo: " + userQuery }]
                }]
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.candidates && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return "മറുപടി ലഭ്യമാക്കുന്നതിൽ ചെറിയ തടസ്സമുണ്ട്.";
        }
    } catch (error) {
        console.error("Error connecting to AI:", error);
        return "ക്ഷമിക്കണം, ഇപ്പോൾ കണക്ഷൻ ലഭ്യമല്ല. ദയവായി കുറച്ചു കഴിഞ്ഞ് ശ്രമിക്കുക.";
    }
}