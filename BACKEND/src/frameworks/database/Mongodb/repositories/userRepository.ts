// import { UserInterface } from "../../../../types/userInterface";
import User from "../models/userModel";

export const userRepositoryMongoDB = () => {
  const addUser = async (user: {
    name: string;
    userName: string;
    email: string;
    number: number;
    password: string;
  }) => {
    console.log("qqqqq");
    
    const newUser = await new User(user);
    console.log(newUser);
    
    return await newUser.save();
  };
  const getUserByEmail = async (email: string) => {
    const user: any = await User.findOne({ email });
    return user;
  };
  const getUserByUserName = async (userName:string) =>{
    const user: any = await User.findOne({userName})
    return user
  }
  const getUserById = async (id:string) => {
    const user: any = await User.findOne({_id:id})
    return user
  }

  return {
    addUser,
    getUserByEmail,
    getUserByUserName,
    getUserById,
    // addCourseAsTeacher,
    // isUserTeacher,
    // addCourseAsStudent,
    // isUserStudent,
    // getUser
  };
};

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;
