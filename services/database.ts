import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const student = {
    name: "Manuel",
    firstSurname: "Leon",
    secondSurname: "Godinho",
    email: "manuel.leon@xarxatec.com",
    phone: "666222555",
    description: "Descripcion",
    image: "avatar"
}
export type Student = {
    name: string;
    firstSurname: string;
    secondSurname: string;
    email: string;
    phone: string;
    description: string;
    image: string;
}
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

export const getAllStudents = async () => {
    return await prisma.student.findMany();
}

export const addStudent = async (student: Student) => {
    return await prisma.student.create({
        data: {
           ...student
        }
    });
}
//module.exports = {Main, getAllPosts};
