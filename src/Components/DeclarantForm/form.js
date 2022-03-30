import { Grid, Paper, TextField } from "@mui/material";
import React from "react";

export default function Form() {
  return (
    <div>
      <Grid>
        <Paper
          elevation={10}
          style={{
            padding: 20,
            height: "auto",
            width: "70%",
            margin: "20px auto",
            backgroundColor: "#a4e1fc",
          }}
        >
          {/* here we are doing the title and centering it */}
          <Grid align="center">
            <h2>Notice Of Marriage</h2>
          </Grid>
          <text>To the commissioner for </text>
          <TextField
            id="standard-basic"
            label=""
            variant="standard"
            width="250px"
            style={{ width: "250px", marginTop: "-5px" }}
          ></TextField>

          <text>
            District of the republic of Botswana.I give you notice that a
            marriage is inteded to be had within three successive sundays from
            this date, between me and other party hereunder described, viz:____{" "}
          </text>
          <br></br>
          <br></br>
          <br></br>

          {/* here we are doing THE OFFICIAL FORMS TO BE USED*/}
          <h3>Person 1</h3>

          <Grid style={{ marginTop: "2%", marginLeft: "8%" }}>
            <text>Name : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 400 }}
            />

            <text>Age : </text>
            <TextField
              id="standard-number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
          </Grid>

          <Grid style={{ marginTop: "2%", marginLeft: "8%" }}>
            <text>Condition : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350 }}
            />

            <text>Occupation : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350 }}
            />
          </Grid>

          <Grid style={{ marginTop: "2%", marginLeft: "8%" }}>
            <text>Residence : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350 }}
            />

            <text>Length of Residence : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350 }}
            />
          </Grid>

          <h3>Person 2</h3>
          <Grid style={{ marginTop: "2%", marginLeft: "8%" }}>
            <text>Name : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 400 }}
            />

            <text>Age : </text>
            <TextField
              id="standard-number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
          </Grid>

          <Grid style={{ marginTop: "2%", marginLeft: "8%" }}>
            <text>Condition : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350 }}
            />

            <text>Occupation : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350 }}
            />
          </Grid>

          <Grid style={{ marginTop: "2%", marginLeft: "8%" }}>
            <text>Residence : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350 }}
            />

            <text>Length of Residence : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350 }}
            />
          </Grid>

          <Grid style={{ marginTop: "10%" }}>
            <text>Witness my hand at : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350 }}
            />
            <text>this: </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350 }}
            />
          </Grid>

          <Grid style={{ marginTop: "2%" }}>
            <text>day of : </text>
            <TextField
              style={{ width: 200 }}
              id="date"
              label=""
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid style={{ marginTop: "2%" }}>
            <text>as witness : </text>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350 }}
            />

            <TextField
              id="standard-basic"
              variant="standard"
              style={{ width: 350, marginLeft: "6%" }}
            />
          </Grid>
        </Paper>



      </Grid>
    </div>
  );
}

