
import { Application } from 'express';
import authRouter from './auth';
import userRouter from './user'

// import userAuthMiddleware from '../middlewares/userAuthMiddleware';



const routes = (app:Application)=>{
  app.use('/api/auth', authRouter());
  app.use('/api/user',userRouter())
}

export default routes

