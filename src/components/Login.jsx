import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import Logo from './logogo.png'
import Yoga from './choose-img.png'
function Login({ setIsAuth }) {
    useEffect(()=>{
        if (localStorage.getItem('isAusth') === true){
            navigate("/");
            window.location.reload()
        }else{
            console.log(localStorage)
        }
    })
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
    //   setIsAuth(true);
        
        

      
    });
    
  };
//   alert("PLease reload")
  return (
    <div className="login">
    <div className="loginPage">
        <img src={Logo} alt="" width={'50px'}/>
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
    <div className="imgright">
        <img src={Yoga} alt="" />
    </div>
    </div>
  );
}

export default Login;