import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeclarationStatus from "./declarationStatus";
import { Routes, Route } from "react-router-dom";

export default function Intro() {
  // const [toggle, setToggle] = useState(true);
  // const toggleChecked = () => setToggle((toggle) => !toggle);

  return (
    <Box sx={{ width: "100%", maxWidth: 1000 }}>
      <Typography
        variant="h5"
        display="block"
        gutterBottom
        color="#00bcd4"
        marginBottom="18"
      >
        Declaration of Assets and Liabilities Regulation, 2020
      </Typography>
      <Typography variant="h6" gutterBottom component="div" centered>
        Arrangement of Regulations
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        In the exercise conferred for the minister of presidential Affairs,
        Governance and Public Administration by Section 21 of the declaration of
        Assets and Liabities Act, the following Regulations are herebymade
        <ul>
          <li>
            These Declarations may be cited as the Declaration of Assets and
            Liabilities
          </li>
          <li>
            A declaration made by under the section 7 of the Act shall be in
            accordance with the form form set o out in the Schedu le
          </li>
          <li>
            The declaration of Assets and Liabilities Regulations are hereby
            revoked.
          </li>
        </ul>
      </Typography>
{/* 
      {toggle && <DeclarationStatus />}
      {!toggle && <Intro />}
      <button type="button" onClick={this.to}>
        Toggle
      </button> */}
    </Box>
  );
}
