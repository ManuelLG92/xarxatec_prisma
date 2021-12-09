import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export const Main = async () => {
    const allData = await prisma.post.findMany();
    console.log('all data ', allData);
    await prisma.post.create({
        data: {
            title: 'first post',
            user: 'undefined',
            content: 'post content',
        }
    })
    const allDataAfterInsert = await prisma.post.findMany();
    console.log('all data after insert ', allDataAfterInsert);
}

export const getAllPosts = async () => {
    return await prisma.post.findMany();
}

//module.exports = {Main, getAllPosts};
