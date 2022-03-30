import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function propertyForm(props) {
  return (
    <div>
      <div>
        <TextField
          label="Type Of Property"
          id="propertyType"
          variant="outlined"
        />
        <TextField
          id="propertyType"
          label="Description Of Property"
          variant="outlined"
        />
        <TextField
          id="formInterest"
          label="Form Of Interest"
          variant="outlined"
        />

        <Typography variant="overline" display="block" gutterBottom>
          Income Generation
        </Typography>

        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="YES" />
          <FormControlLabel control={<Checkbox />} label="NO" />
        </FormGroup>

        <TextField
          id="currency"
          label="Currency Of Income"
          variant="outlined"
        />

        <TextField
          id="bank"
          label="Bank Associated With Income"
          variant="outlined"
        />
      </div>
    </div>
  );
}

export default propertyForm;
