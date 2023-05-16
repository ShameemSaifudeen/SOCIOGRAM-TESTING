import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
// const UserRouter=() =>{
//     const user = useSelector((state)=>state.authRouter.authData)
//     console.log(user);
//   return (
//     <div>
//      
//     </div>
//   );
// }
const UserRouter = () => {
    const user = useSelector((state)=>state.authRouter.authData)

  return (
    <div className="UserRouter">
     
         <Routes>
     
          <Route
               path="/"
              //  element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
              element={<Home/>}
             />
             <Route
               path="/home"
               element={user ? <Home /> : <Navigate to="../auth" />}
             />
             <Route
               path="/login"
               element={user ? <Navigate to="../home" /> : <Auth />}
             />
           </Routes>
          
    </div>
  )
}

export default UserRouter

// export default UserRouter;
