"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = exports.Main = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Main = () => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield prisma.post.findMany();
    console.log('all data ', allData);
    yield prisma.post.create({
        data: {
            title: 'first post',
            user: 'undefined',
            content: 'post content',
        }
    });
    const allDataAfterInsert = yield prisma.post.findMany();
    console.log('all data after insert ', allDataAfterInsert);
});
exports.Main = Main;
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.post.findMany();
});
exports.getAllPosts = getAllPosts;
//module.exports = {Main, getAllPosts};
