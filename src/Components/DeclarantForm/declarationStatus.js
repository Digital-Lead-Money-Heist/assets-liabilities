import { React, useState } from "react";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import { Label } from "@mui/icons-material";

// function DeclarationStatus(props) {

const DeclarationStatus = (props) => {
  const state = {
    step: 1,
    lastNameDeclare: "",
    dobDeclare: "",
    pobDeclare: "",
  };

  //hancdele change in fields
  const handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  //create variable to store inputs
  const {setDeclareSurname,setDeclareFirstName,setDeclareDoB,
    setDeclarePoB,setDeclareIdNum,setDeclareCitizen,setDeclareMarritalStatus,
    setDeclarePhysicalAddress,setDeclarePostalAddress,setdeclareContact,
    setdeclarePostion,setDeclareCurrentAppointment,setDeclareEmployerName,
    setDeclareEmployementNature,setDeclareSalary,setDeclareAllowance,
    setDeclareSourceOfIncome,setDeclareRank,setDeclareFromLastAppointment,setDeclareToLastAppointment,
    setDeclareTaxId} = props

  //function that is called on te
  const handleSurnameChange = (e) => {
    setDeclareSurname(e.target.value);
  };

  const handleNameChange = (e) => {
    setDeclareFirstName(e.target.value);
  };

  const handleDoBChange = (e) => {
    setDeclareDoB(e.target.value);
  };
  const handlePoBChange = (e) => {
    setDeclarePoB(e.target.value);
  };
  const handleIdNumChange = (e) => {
    setDeclareIdNum(e.target.value);
  };
  const handleCitizenChange = (e) => {
    setDeclareCitizen(e.target.value);
  };
  const handleMarritalStatusChange = (e) => {
    setDeclareMarritalStatus(e.target.value);
  };
  const handlePhysicalAddressChange = (e) => {
    setDeclarePhysicalAddress(e.target.value);
  };
  const handlePostalAddressChange = (e) => {
    setDeclarePostalAddress(e.target.value);
  };
  const handleContactChange = (e) => {
    setdeclareContact(e.target.value);
  };
  const handlePostionChange = (e) => {
    setdeclarePostion(e.target.value);
  };

  const handleCurrentAppointmentChange = (e) => {
    setDeclareCurrentAppointment(e.target.value);
  };

  const handleEmployerNameChange = (e) => {
    setDeclareEmployerName(e.target.value);
  };
  const handleEmployementNatureChange = (e) => {
    setDeclareEmployementNature(e.target.value);
  };
  const handleSalaryChange = (e) => {
    setDeclareSalary(e.target.value);
  };
  const handleAllowanceChange = (e) => {
    setDeclareAllowance(e.target.value);
  };
  const handleSourceOfIncomeChange = (e) => {
    setDeclareSourceOfIncome(e.target.value);
  };
  const handleRankChange = (e) => {
    setDeclareRank(e.target.value);
  };
  const handleFromLastAppointmentChange = (e) => {
    setDeclareFromLastAppointment(e.target.value);
  };
  const handleToLastAppointmentChange = (e) => {
    setDeclareToLastAppointment(e.target.value);
  };
  const handleTinChange = (e) => {
    setDeclareTaxId(e.target.value);
  };

  const filled = (e) => {
    e.preventDefault();
  };

 

  // const {values, handleChangeForm} =this.props
  const cont = e =>{
    e.preventDefault()
  }
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
          Declaration Status
        </Typography>
        <TextField
          className="text-fields"
          id="surname"
          label="Surname of Declarant"
          variant="outlined"
          onChange={handleSurnameChange}
          // defaultValue={declareSurname}
          // onChange={handleChangeForm('firstNameDeclare')}
        />{" "}
        <TextField
          className="text-fields"
          id="firstname"
          label="Other Names"
          variant="outlined"
          onChange={handleNameChange}
        />
      </div>
      <br /> <br />
      <div>
        <TextField
          className="text-fields"
          id="dob"
          variant="outlined"
          type="date"
          // color="#666666"
          onChange={handleDoBChange}
        />{" "}
        <TextField
          className="text-fields"
          id="placeofbirth"
          label="Place of Birth"
          variant="outlined"
          onChange={handlePoBChange}
        />
      </div>
      {/* //////////////////////////////////////////////////////// */}
      <br /> <br />
      <div>
        <TextField
          className="text-fields"
          id="idnum"
          label="National ID NUMBER"
          variant="outlined"
          onChange={handleIdNumChange}
        />{" "}
        <TextField
          className="text-fields"
          id="citizen"
          label="Citizen"
          variant="outlined"
          onChange={handleCitizenChange}
        />
      </div>
      <br /> <br />
      <div>
        <TextField
          className="text-fields"
          id="marritalstatus"
          label="Marrital Status"
          variant="outlined"
          onChange={handleMarritalStatusChange}
        />{" "}
      </div>
      <br /> <br />
      {/* < Typography variant="h9">STEP 8</Typography> */}
      <TextField
        padding={10}
        id="phy-address"
        label="Physical Address"
        variant="outlined"
        onChange={handlePhysicalAddressChange}
        multiline
        rows={4}
      />
      <TextField
        id="post-address"
        label="Postal Address"
        variant="outlined"
        onChange={handlePostalAddressChange}
        multiline
        rows={4}
      />
      <br /> <br />
      <TextField
        className="text-fields"
        id="contact"
        label="Contact Details"
        variant="outlined"
        onChange={handleContactChange}
      />
      <br /> <br />
      <TextField
        className="text-fields"
        id="position"
        label="Rank / Position / Title"
        variant="outlined"
        onChange={handlePostionChange}
      />
      <TextField
        type="date"
        className="text-fields"
        id="currentAppointment"
        // label="Date of Current Appointment"
        variant="outlined"
        onChange={handleCurrentAppointmentChange}
      />{" "}
      <br /> <br />
      <TextField
        className="text-fields"
        id="nameEmployer"
        label="Name of Employer"
        variant="outlined"
        onChange={handleEmployerNameChange}
      />
      <TextField
        className="text-fields"
        id="natureEmployement"
        label="Nature Employer"
        variant="outlined"
        onChange={handleEmployementNatureChange}
      />
      <br /> <br />
      <TextField
        className="text-fields"
        id="salary"
        label="Salary per annum"
        variant="outlined"
        onChange={handleSalaryChange}
      />
      <TextField
        className="text-fields"
        id="allowance"
        label="Allowances per annum"
        variant="outlined"
        onChange={handleAllowanceChange}
      />
      <TextField
        className="text-fields"
        id="sourceofincome"
        label="Other Sources of Income"
        variant="outlined"
        onChange={handleSourceOfIncomeChange}
      />
      <br /> <br />
      {/* <Typography variant="h9">STEP 9</Typography> */}
      <TextField
        id="rank"
        label="Immediate last Appointment (RANK)"
        variant="outlined"
        onChange={handleRankChange}
      />
      <br /> <br />
      <Typography variant="h9">Date of Immediate Last Appointment</Typography>
      <br /> <br />
      <Typography variant="h9">FROM</Typography>
      <TextField
        type="date"
        id="fromLastAppointment"
        variant="outlined"
        onChange={handleFromLastAppointmentChange}
      />
      <br /> <br />
      <Typography variant="h9">TO</Typography>
      <TextField
        type="date"
        id="toLastAppointment"
        variant="outlined"
        onChange={handleToLastAppointmentChange}
      />
      <br /> <br />
      <TextField
        id="taxId"
        label="Tax Identification Number(TIN)"
        variant="outlined"
        onChange={handleTinChange}
      />
      {cont}
    </Grid>
    
  );
};

export default DeclarationStatus;
