import React from "react";
import { Button, TextField } from "@mui/material";


function occupationForm(props) {
  return (
    <div style={{ padding: "50px" }}>
      <div>
        <TextField
          id="occupation"
          label="Place of Occupation"
          variant="outlined"
        />
        <TextField id="profession" label="Profession" variant="outlined" />
        <br />
        <TextField
          id="taxDocuments"
          label="Taxation Documents"
          variant="outlined"
        />
        <br />
        <TextField
          id="employeeDocuments"
          label="Employement Documents"
          variant="outlined"
        />
        <br />
        <TextField
          id="externalIncome"
          label="External Income"
          variant="outlined"
        />
      </div>
    </div>
  );
}

export default occupationForm;
