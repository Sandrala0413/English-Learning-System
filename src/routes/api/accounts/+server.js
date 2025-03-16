import prisma from '$lib/prisma';

//write data to database
// @ts-ignore
export async function POST({ request }) {
    const { username, password } = await request.json();

    try {
        const newAccount = await prisma.account.create({
            data: { username, password }
        });
        return new Response(JSON.stringify(newAccount), { status: 201 });
    } catch (error) {
        console.error("資料庫錯誤:", error); //record error
        return new Response(JSON.stringify({ error: "新增失敗" }), { status: 500 });
    }
}