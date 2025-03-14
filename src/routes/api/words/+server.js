import prisma from '$lib/prisma';

//get data from database
export async function GET() {
    const words = await prisma.word.findMany();
    return new Response(JSON.stringify(words), {
        headers: { 'Content-Type': 'application/json' }
    });
}

//write data to database
export async function POST({ request }) {
    const { word, speech, audio_src, pronounce, define, sentence, capital } = await request.json();

    try {
        const newWord = await prisma.word.create({
            data: { word, speech, audio_src, pronounce, define, sentence, capital }
        });
        return new Response(JSON.stringify(newWord), { status: 201 });
    } catch (error) {
        console.error("資料庫錯誤:", error); //record error
        return new Response(JSON.stringify({ error: "新增失敗" }), { status: 500 });
    }
}