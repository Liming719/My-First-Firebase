import {useState, useEffect} from "react";
import {handleGoogleSignIn, handleSignout} from "./auth";

export default function LoginPage() {

  const [userInfo, setUser] = useState({Name:"", Email:"", Token:""});  
  
  const handleLogin = async () => {
    const user = await handleGoogleSignIn();
    setUser(user);
  };

  const handlelogout = () =>{
    handleSignout();
    setUser({Name:"", Email:"", Token:""});
  }

  return (
    <div>
      <h1>Login Page</h1>
      <div className="UserInfoContainer">
        <ul>
          <li>Name: {userInfo.Name}</li>
          <li>E-Mail: {userInfo.Email}</li>
        </ul>
      </div>
      <button onClick={handleLogin}>Sign in with Google</button>
      <button onClick={handlelogout}>Sign out</button>
    </div>
  );
}
