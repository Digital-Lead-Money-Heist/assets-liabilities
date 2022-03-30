import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Formz from "./Form";
import reportWebVitals from "./reportWebVitals";
import BasicCard from "./components/check";
import VerticalLinearStepper from "./components/stepper";
import Look from "./components/assetForm";
import { Grid, Paper, TextField } from "@material-ui/core";
import { alignProperty } from "@mui/material/styles/cssUtils";

ReactDOM.render(
  <React.StrictMode>
    <Grid>
      <Paper
        elevation={10}
        style={{
          padding: 80,
          height: "auto",
          width: "75%",
          margin: "20px auto",
          backgroundColor: "#fff",
        }}
      >
        <Formz />

        <VerticalLinearStepper />
      </Paper>
    </Grid>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
