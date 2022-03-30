import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../Firebase/config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  Container,
  Box,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";
import {FacebookLoginButton, GoogleLoginButton, LinkedInLoginButton} from "react-social-login-buttons";
import {getFirestore,collection, getDocs, addDoc} from 'firebase/firestore'

const Signup = () => {
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const SignInWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        console.log(user.displayName);
        // ...
    // create user in firestore
    //init services
    const db = getFirestore();

    //init services
     const colRef = collection(db, 'users');

  
  addDoc(colRef, {
  accountType:"declarant" ,
  age: 0,
  fullName: user.displayName ,
  omangId: 0
    })

      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  };
  
  

  return (
    <>
      <main className="main">
        <div>
          <Container>
            <Typography component="h1" variant="h5" marginTop="100px">
              Create Account
            </Typography>
            <form className="form" type="submit">
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="off"
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Adress</InputLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="off"
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password2">Confirm Password</InputLabel>
                <Input
                  type="password"
                  id="password2"
                  name="password2"
                  autoComplete="off"
                />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="button"
              >
                Sign Up
              </Button>
              <GoogleLoginButton
                type="submit"
                variant="contained"
                color="primary"
                className="button"
                onClick={SignInWithGoogle}
              >
                Sign Up with Google
              </GoogleLoginButton>
            </form>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Signup;
