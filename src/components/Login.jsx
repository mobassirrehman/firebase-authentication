import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase.config";

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = React.useState(null);
  const handleGoogleSignIn = () => {
    // console.log("Google Sign in clicked");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Please Login</h2>

      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
          <button onClick={handleGithubSignIn}>Sign in with GitHub</button>
        </>
      )}
      {user && (
        <div>
          <h3>{user?.displayName}</h3>
          <h4>Email: {user?.email}</h4>
          <img src={user?.photoURL} alt="" />
          <img src="{user?.photoUrl}" alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
