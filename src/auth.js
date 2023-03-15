import { app } from "./firebase";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const handleGoogleSignIn = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(auth, provider);
    // The signed-in user info.
    const user = result.user;
    // This gives you a Google Access Token.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const userToken = credential.accessToken;

    console.log(user);
    console.log(userToken);

    let CurrentUser = {
      Name: user.displayName,
      Email: user.email,
      Token: userToken
    };
    return CurrentUser;
}

export const handleSignout = ()=>{
    signOut(auth);
}
