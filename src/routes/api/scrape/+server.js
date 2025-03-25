import prisma from '$lib/prisma';

// @ts-ignore
function getAudioUrl(word){
    const baseUrl = "https://dictionary.cambridge.org/zht/media/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/us_pron";
    const first = word.charAt(0);
    const second = word.substring(0, 3);
    const third = word.substring(0, 5);
    return `${baseUrl}/${first}/${second}/${third}/${word}.mp3` 
}

// @ts-ignore
export async function GET() {
    try{
        const wordToUpdate = await prisma.word.findMany({
            where: {
                OR:[
                    { audio_src: null }, // 如果是 null 就更新
                    { audio_src: "" }, // 如果是空字串也更新
                    { audio_src: "URL" }
                ]
            },
            select: {id: true, word: true}
        });

        if(wordToUpdate.length === 0){
            return new Response(`沒有單字音檔須被更新`, {status: 200});
        }

        for(const {id, word} of wordToUpdate){
            try{
                const ditUrl = getAudioUrl(word);

                await prisma.word.update({
                    where: {id},
                    data: {audio_src: ditUrl}
                });

                console.log(`已更新${word}音檔`);
            // eslint-disable-next-line no-unused-vars
            } catch(err){
                console.error(`無法抓取${word}音檔`)
            }
        }

        return new Response(`已更新所有音檔`, {status: 200});
    // eslint-disable-next-line no-unused-vars
    } catch(error){
        console.error(`伺服器錯誤`);
        return new Response(`伺服器錯誤`, {status: 500});
    }
}