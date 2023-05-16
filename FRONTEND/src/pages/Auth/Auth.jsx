
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const loading = useSelector((state)=>state.authReducer.loading)
  const [isSignUp, setisSignUp] = useState(false);
  console.log(loading);
  const [data, setData] = useState({
    name: "",
    lastname: "",
    userName: "",
    number: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const [confirmPassword, setConfirmPassword] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const resetForm = () => {
    setConfirmPassword(true);
    setData({
      name: "",
      lastname: "",
      userName: "",
      number: "",
      email: "",
      password: "",
      confirmpass: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.confirmpass===data.password ? dispatch(signUp(data,navigate)) : setConfirmPassword(false);  
    }
    else{
      dispatch(login(data,navigate))
    }
  };
  return (
    <div className="Auth">
      <div className="col-md-6 col-lg-5 a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>SOCIOGRAM</h1>
          <h6>Explore the Network</h6>
        </div>
      </div>
      {/* right side */}
      <div className="a-right">
        <form className="infoForm authForm " onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="Name"
                pattern="^[A-Za-z][A-Za-z\s]{2,}$"
                className="infoInput"
                name="name"
                onChange={handleChange}
                value={data.name}
                required
              />
              <input
                type="text"
                pattern="^[A-Za-z][A-Za-z\s]{2,}$"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
                required

              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              name="userName"
              onChange={handleChange}
              placeholder="Username"
              value={data.userName}
              required

            />
          </div>
          {isSignUp && (
            <>
              <div>
                <input
                  type="number"
                  className="infoInput"
                  name="number"
                  placeholder="Number"
                  onChange={handleChange}
              required
              value={data.number}

                />
              </div>
              <div>
                <input
                  type="email"
                  className="infoInput"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              required
              value={data.email}

                />
              </div>
            </>
          )}
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
              required

            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                placeholder="Confirm Password"
                value={data.confirmpass}
                required

              />
            )}
          </div>
          <span
            style={{
              display: confirmPassword ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
            }}
          >
            * Passwords are not matching
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setisSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : " Don't have an account Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={ loading}>
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};


export default Auth;
