"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// import jwt from 'jsonwebtoken'
// import configKeys from '../../config';
const authService = () => {
    const encryptPassword = async (password) => {
        const salt = await bcryptjs_1.default.genSalt(10);
        password = await bcryptjs_1.default.hash(password, salt);
        return password;
    };
    const comparePassword = (password, hashedPassword) => {
        return bcryptjs_1.default.compare(password, hashedPassword);
    };
    // const generateToken=(payload:string)=>{
    //     const token = jwt.sign({payload}, configKeys.JWT_SECRET, {
    //         expiresIn: "5d",
    //     });
    //     return token
    // }
    // const verifyToken=(token:string)=>{
    //     return jwt.verify(token, configKeys.JWT_SECRET)
    // }
    return {
        encryptPassword,
        comparePassword,
        // generateToken,
        // verifyToken
    };
};
exports.authService = authService;
