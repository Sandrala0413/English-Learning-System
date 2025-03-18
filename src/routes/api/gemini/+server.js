import { json } from '@sveltejs/kit';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;  // 從環境變數取得 API 金鑰
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
// console.log("API_KEY:", API_KEY);  // 確保 API 金鑰被讀取

export async function POST({ request }) {
    const { prompt } = await request.json();

    const body = {
        contents: [{ parts: [{ text: prompt }] }]
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        console.log("Raw response:", data);
        return json(data);
    } catch (error) {
        console.error("Gemini API Error:", error);
        return json({ error: 'Error communicating with Gemini API' }, { status: 500 });
    }
}