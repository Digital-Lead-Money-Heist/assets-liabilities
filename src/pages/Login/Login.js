import { React, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
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
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";



const Login = () => {

  //store input in states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberMe] = useState(false);

  //data from username input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //data from password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheck = (event) => {
    setRememberMe(event.target.checked);
  };

  // on click function
  const signIn = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("loged in as: ", cred.user);

      })
      .catch((err) => {
        console.log(err.message);
        alert("email or password is incorrect");
      });
  };

  return (
    <>
      <main className="main">
        <div>
          <Container>
            <Typography component="h1" variant="h5" marginTop="100px">
              Admin Login
            </Typography>
            <form className="form" type="submit">
              <FormControl margin="normal" required fullWidth>
                {/* <InputLabel htmlFor="email">Email Adress</InputLabel> */}
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  label="Email Adress"
                  required
                  onChange={handleEmailChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                {/* <InputLabel htmlFor="password">Password</InputLabel> */}
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="off"
                  label="Password"
                  required
                  onChange={handlePasswordChange}
                />
              </FormControl>

              <FormControlLabel
                control={
                  <Checkbox
                    value={rememberme}
                    onChange={(e) => handleCheck(e)}
                  />
                }
                label="Remeber Me"
              ></FormControlLabel>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="button"
                fullWidth
                onClick={signIn}
                onError={(errors) => {
                  for (const err of errors) {
                    console.log('error',err.props.errorMessages[0]);
                  }
                }}
              >
                Sign Ins
              </Button>
            </form>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Login;
