import prisma from '$lib/prisma';

//write data to database
// @ts-ignore
export async function POST({ request }) {
    const { username, password } = await request.json();

    try {
        const existingUser = await prisma.account.findUnique({
            where: { username }
        });

        if (existingUser) {
            // 帳號已存在，檢查密碼是否正確
            if (existingUser.password === password) {
                return new Response(JSON.stringify({ message: "登入成功", user: existingUser }), { status: 200 });
            } else {
                return new Response(JSON.stringify({ error: "密碼錯誤" }), { status: 401 });
            }
        } else {
            // 帳號不存在，註冊新帳號
            const newUser = await prisma.account.create({
                data: { username, password }
            });
            return new Response(JSON.stringify({ message: "註冊成功", user: newUser }), { status: 201 });
        }
    } catch (error) {
        console.error("資料庫錯誤:", error);
        return new Response(JSON.stringify({ error: "發生錯誤，請稍後再試" }), { status: 500 });
    }
}