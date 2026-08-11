// Adrigizmo AI Chatbot Multi-Language Script
const API_KEY = "AQ.Ab8RN6JQbBPqfjiBTwcz39Pw-kgOApNVME6NlA6gPeZtoU3_ng"; 

async function askChatbot(userQuery, selectedLang = "English") {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    
    const promptText = `You are the AI assistant for Adrigizmo Tech, founded and led by Manukumar (Manu). 
    Please answer the user query strictly in this language: ${selectedLang}.
    User Query: ${userQuery}`;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: promptText }]
                }]
            })
        });
        
        if (!response.ok) {
            return "Connection error. Please try again.";
        }
        
        const data = await response.json();
        if (data.candidates && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return "No response received.";
        }
    } catch (error) {
        console.error("Error:", error);
        return "Network connection failed.";
    }
}