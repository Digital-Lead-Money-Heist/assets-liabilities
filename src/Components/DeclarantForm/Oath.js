import React, { useState, useRef } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Label } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./Oath.css";

function Oath(props) {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const {setOathName, setImageURL,imageURL,submitDeclaration} = props



  const sigCanvas = useRef({});

  /* a function that uses the canvas ref to clear the canvas 
  via a method given by react-signature-canvas */
  const clear = () => sigCanvas.current.clear();

  /* a function that uses the canvas ref to trim the canvas 
  from white spaces via a method given by react-signature-canvas
  then saves it in our state */
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  // //store variables
  // const state = {
  //   declareSurname: "",
  //   firstName: "",
  //   DoB: "",
  //   PoB: "",
  //   idNum: "",
  //   citizen: "",
  //   marritalStatus: "",
  // };

  // const { declareSurname, firstName, DoB, PoB, idNum, citizen, marritalStatus } = this.state;
  const handleSubmit = () => {};

  return (
    <Grid>
      <div>
        <Typography
          variant="h5"
          display="block"
          gutterBottom
          color="#00bcd4"
          marginBottom="18"
        >
          Oath Signature
        </Typography>

        <text>I </text>
        <TextField
          id="standard-basic"
          label=""
          variant="standard"
          width="250px"
          color="success"
          onChange={ e => setOathName(e.target.value)}
          style={{ width: "250px", marginTop: "-5px", fontSize: "7px" }}
        />

        <text>
          solemnly declare that the information that I have given above is, to
          the best of my knowledge, true, complete, accurate and correct.
        </text>

        <br />
        <br />

        <Typography variant="overline" style={{ marginRight: "15px" }}>
          Signature of Declarant
        </Typography>
        <Popup
          modal
          trigger={<Button variant="outlined"> Open Signature Pad</Button>}
          closeOnDocumentClick={false}
        >
          {(close) => (
            <>
              <SignaturePad
                ref={sigCanvas}
                canvasProps={{
                  className: "signatureCanvas",
                }}
              />
              {/* Button to trigger save canvas image */}
              <Button onClick={save} variant="outlined">
                Save
              </Button>
              <Button onClick={clear} variant="outlined">
                Clear
              </Button>
              <Button onClick={close} variant="outlined">
                Close
              </Button>
            </>
          )}
        </Popup>
        <br />
        <br />
        {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
        {imageURL ? (
          <img
            src={imageURL}
            alt="my signature"
            style={{
              position: "absolute",
              right: "0px",
              width: "300px",
              border: "3px solid #73AD21",
              padding: "10px",
            }}
          />
        ) : null}

        <br />

        <text> Sworn to and signed before me at on the this day</text>
        <Button variant="contained" onClick={submitDeclaration}>
          Submit Declaration
        </Button>
      </div>
    </Grid>
  );
}

export default Oath;
