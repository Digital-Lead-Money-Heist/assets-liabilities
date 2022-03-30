import { Button, TextField } from "@mui/material";
import React from "react";
import "../App.css";

function look() {
  return (
    <div style={{ padding: "50px" }}>
      <div>
        <TextField
          className="text-fields"
          id="app-name"
          label="Name"
          variant="outlined"
        />
        <TextField id="app-surname" label="Surname" variant="outlined" />
        <br />
        <TextField
          id="id-num"
          label="ID number"
          variant="outlined"
          inputMode="numeric"
        />
        <br />
        <TextField
          id="res-address"
          label="Residential Address"
          variant="outlined"
        />
        <br />
        <TextField
          id="phy-address"
          label="Physical Address"
          variant="outlined"
          multiline
          rows={4}
        />
      </div>
    </div>
  );
}

export default look;
