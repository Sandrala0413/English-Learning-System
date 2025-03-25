// src/routes/api/favorite/[action].js
import { PrismaClient } from '@prisma/client';
import { json, error } from '@sveltejs/kit';

const prisma = new PrismaClient();

// export async function GET({ url }) {
//   const userId = parseInt(url.searchParams.get('userId') || '0');
//   const wordId = parseInt(url.searchParams.get('wordId') || '0');

//   try {
//     // 檢查用戶是否收藏過該單字
//     const existingFavorite = await prisma.favoriteWords.findUnique({
//       where: {
//         userId_wordId: {
//           userId,
//           wordId
//         }
//       }
//     });

//     return json({ isFavorite: !!existingFavorite });    //!!轉成boolean
//   } catch (err) {
//     console.error(err);
//     throw error(500, '發生錯誤');
//   }
// }

// @ts-ignore
export async function GET({ url }) {
    const userId = Number(url.searchParams.get("userId")); // 從 URL 取得 userId
    if (!userId) return json({ error: "Missing userId" }, { status: 400 });

    try {
        const favorites = await prisma.favoriteWords.findMany({
            where: { userId },
            include: { word: true } // 取得關聯的單字
        });

        return json(favorites.map(fav => fav.word)); // 只回傳單字
    } catch (error) {
        console.error(error);
        return json({ error: "Internal Server Error" }, { status: 500 });
    }
}


// @ts-ignore
export async function POST({ request }) {
  const { userId, wordId } = await request.json();

  try {
    // 檢查該用戶是否已經收藏過該單字
    const existingFavorite = await prisma.favoriteWords.findUnique({
      where: {
        userId_wordId: {
          userId,
          wordId
        }
      }
    });

    if (existingFavorite) {
      // 如果已經收藏過，則刪除該收藏
      await prisma.favoriteWords.delete({
        where: {
          userId_wordId: {
            userId,
            wordId
          }
        }
      });
      return json({ message: '取消收藏成功' });
    } else {
      // 如果沒有收藏過，則新增收藏
      await prisma.favoriteWords.create({
        data: {
          userId,
          wordId
        }
      });
      return json({ message: '收藏成功' });
    }
  } catch (err) {
    console.error(err);
    throw error(500, '發生錯誤');
  }
}
