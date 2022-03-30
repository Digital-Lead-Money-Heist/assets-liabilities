import { React, useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Label } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function ChildrenTransferedProperty(props) {
  //variables to store inputs
  const {
    setDescriptiontypeCtp,
    setPropertyidCtp,
    setPlotsizeCtp,
    setLocationCtp,
    setMannerpurchaseIPCtp,
    setDateoftransferCtp,
    setTransferedtoCtp,
    setTypemakeMACtp,
    setRegNumberCtp,
    setDatetransferedCtp,
    setMannertransferDTCtp,
    setPersontransferedtoDTCtp,
    setAmounttransferedCtp,
    setDateoftransfertwoCtp,
    setPersontransferedtoCSCtp,
    setMannertransferCSCtp,
    setCurrencyCSCtp,
    setSourcefundsCSCtp,
    setCertificatenumberOICtp,
    setDatetransferOICtp,
    setPersontransferedOICtp,
    setMannertransferOICtp,
    setPricepaidOCtp,
    setDescriptionOACtp,
    setDatetransferOACtp,
    setPersontransferedtoOACtp,
    setMannertransferToOACtp,
    setPricepaidOACtp,
    setCreditorOLCtp,
    setLiabilitytypeOLCtp,
    setAmountOLCtp,
    setDateOLCtp,
    setPlotsizeIPCtp,
    setLocationIPCtp,
  } = props

  const handleDescriptiontypeIP = (e) => {
    setDescriptiontypeCtp(e.target.value);
  };
  const handlePropertyidIP = (e) => {
    setPropertyidCtp(e.target.value);
  };
  const handlePlotsize = (e) => {
    setPlotsizeCtp(e.target.value);
  };

  const handleLocation = (e) => {
    setLocationCtp(e.target.value);
  };
  const handleMannerpurchaseIP = (e) => {
    setMannerpurchaseIPCtp(e.target.value);
  };
  const handleDateoftransfer = (e) => {
    setDateoftransferCtp(e.target.value);
  };

  const HandleTransferedto = (e) => {
    setTransferedtoCtp(e.target.value);
  };
  const handleTypemakeMA = (e) => {
    setTypemakeMACtp(e.target.value);
  };
  const handleRegNumber = (e) => {
    setRegNumberCtp(e.target.value);
  };
  const handleDatetransfered = (e) => {
    setDatetransferedCtp(e.target.value);
  };
  const handleMannertransferDT = (e) => {
    setMannertransferDTCtp(e.target.value);
  };
  const handlePersontransferedtoDT = (e) => {
    setPersontransferedtoDTCtp(e.target.value);
  };
  const handleAmounttransfered = (e) => {
    setAmounttransferedCtp(e.target.value);
  };
  const handleDateoftransfertwo = (e) => {
    setDateoftransfertwoCtp(e.target.value);
  };
  const handlePersontransferedtoCS = (e) => {
    setPersontransferedtoCSCtp(e.target.value);
  };
  const handleMannertransferCS = (e) => {
    setMannertransferCSCtp(e.target.value);
  };
  const handleCurrencyCS = (e) => {
    setCurrencyCSCtp(e.target.value);
  };
  const handleSourcefundsCS = (e) => {
    setSourcefundsCSCtp(e.target.value);
  };
  const handleSharecertificatenumberOI = (e) => {
    setCertificatenumberOICtp(e.target.value);
  };
  const handleDatetransferOI = (e) => {
    setDatetransferOICtp(e.target.value);
  };
  const handlePersontransferedOI = (e) => {
    setPersontransferedOICtp(e.target.value);
  };
  const handleMannertransferOI = (e) => {
    setMannertransferOICtp(e.target.value);
  };
  const handlePricepaidOI = (e) => {
    setPricepaidOCtp(e.target.value);
  };
  const handleDescriptionOA = (e) => {
    setDescriptionOACtp(e.target.value);
  };
  const handleDatetransferOA = (e) => {
    setDatetransferOACtp(e.target.value);
  };
  const handlePersontransferedtoOA = (e) => {
    setPersontransferedtoOACtp(e.target.value);
  };
  const handleMannertransferOA = (e) => {
    setMannertransferToOACtp(e.target.value);
  };
  const handlePricepaidOA = (e) => {
    setPricepaidOACtp(e.target.value);
  };
  const handleCreditorOL = (e) => {
    setCreditorOLCtp(e.target.value);
  };
  const handleLiabilitytypeOL = (e) => {
    setLiabilitytypeOLCtp(e.target.value);
  };
  const handleAmountOL = (e) => {
    setAmountOLCtp(e.target.value);
  };
  const handleDateOL = (e) => {
    setDateOLCtp(e.target.value);
  };
  const handlePlotsizeIP = (e) => {
    setPlotsizeIPCtp(e.target.value);
  };
  const handleLocationIP = (e) => {
    setLocationIPCtp(e.target.value);
  };

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
          Children Transfered Property
        </Typography>

        <TextField
          className="text-fields"
          id="descriptiontypeIP"
          label="Type of Description"
          variant="outlined"
          onChange={handleDescriptiontypeIP}
        />

        <TextField
          className="text-fields"
          id="propertyidIP"
          label="Property Identification"
          variant="outlined"
          onChange={handlePropertyidIP}
        />
      </div>
      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="plotsizeIP"
          label="Plot Size"
          variant="outlined"
          onChange={handlePlotsizeIP}
        />
        <TextField
          className="text-fields"
          id="locationIP"
          label="Location"
          variant="outlined"
          onChange={handleLocationIP}
        />
      </div>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="mannerpurchaseIP"
          label="Manner of Purchase"
          variant="outlined"
          onChange={handleMannerpurchaseIP}
        />

        <Typography variant="overline" display="block" gutterBottom>
          Date of Transfer
        </Typography>

        <TextField
          className="text-fields"
          id="dateoftransfer"
          type="date"
          variant="outlined"
          onChange={handleDateoftransfer}
        />
      </div>

      <br />
      <br />
      <TextField
        className="text-fields"
        id="transferedto"
        label="Person Transfered To"
        variant="outlined"
        onChange={HandleTransferedto}
      />

      <br />
      <br />
      <Typography
        variant="h5"
        display="block"
        gutterBottom
        color="#00bcd4"
        marginBottom="18"
      >
        Movable assets
      </Typography>

      <div>
        <TextField
          className="text-fields"
          id="typemakeMA"
          label="Type of Make"
          variant="outlined"
          onChange={handleTypemakeMA}
        />
        <TextField
          className="text-fields"
          id="regNumber"
          label="Location"
          variant="outlined"
          onChange={handleRegNumber}
        />
      </div>

      <br />
      <br />
      <div>
        <Typography variant="overline" display="block" gutterBottom>
          Date Transfered
        </Typography>

        <TextField
          className="text-fields"
          id="datetransfered"
          type="date"
          variant="outlined"
          onChange={handleDatetransfered}
        />

        <TextField
          className="text-fields"
          id="mannertransferDT"
          label="Manner of Transfer"
          variant="outlined"
          onChange={handleMannertransferDT}
        />
      </div>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="persontransferedtoDT"
          label="Person Transfered To"
          variant="outlined"
          onChange={handlePersontransferedtoDT}
        />
      </div>

      <br />
      <br />

      <Typography
        variant="h5"
        display="block"
        gutterBottom
        color="#00bcd4"
        marginBottom="18"
      >
        Cash
      </Typography>

      <div>
        <TextField
          className="text-fields"
          id="amounttransfered"
          label="Amount Transfered"
          variant="outlined"
          onChange={handleAmounttransfered}
        />
        <Typography variant="overline" display="block" gutterBottom>
          Date of Transfer
        </Typography>

        <TextField
          className="text-fields"
          id="dateoftransfertwo"
          type="date"
          variant="outlined"
          onChange={handleDateoftransfertwo}
        />
      </div>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="persontransferedtoCS"
          label="Person Transfered To"
          variant="outlined"
          onChange={handlePersontransferedtoCS}
        />
        <TextField
          className="text-fields"
          id="mannertransferCS"
          label="Manner of Transfer"
          variant="outlined"
          onChange={handleMannertransferCS}
        />
      </div>

      <br />
      <br />

      <div>
        <TextField
          className="text-fields"
          id="currency"
          label="Currency"
          variant="outlined"
          onChange={handleCurrencyCS}
        />
        <TextField
          className="text-fields"
          id="sourcefundsCS"
          label="Source of Funds"
          variant="outlined"
          onChange={handleSourcefundsCS}
        />
      </div>
      <br />
      <br />

      <Typography
        variant="h5"
        display="block"
        gutterBottom
        color="#00bcd4"
        marginBottom="18"
      >
        Other Income
      </Typography>

      <div>
        <TextField
          className="text-fields"
          id="sharecertificatenumberOI"
          label="Share Certificate Number"
          variant="outlined"
          onChange={handleSharecertificatenumberOI}
        />
        <Typography variant="overline" display="block" gutterBottom>
          Date of Transfer
        </Typography>

        <TextField
          className="text-fields"
          id="datetransferOI"
          type="date"
          variant="outlined"
          onChange={handleDatetransferOI}
        />
      </div>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="persontransfered"
          label="Person Transfered To"
          variant="outlined"
          onChange={handlePersontransferedOI}
        />
      </div>

      <div>
        <TextField
          className="text-fields"
          id="mannertransferOI"
          label="Manner of Transfer"
          variant="outlined"
          onChange={handleMannertransferOI}
        />

        <TextField
          className="text-fields"
          id="pricepaid"
          label="Price "
          variant="outlined"
          onChange={handlePricepaidOI}
        />
      </div>

      <br />
      <br />
      <Typography
        variant="h5"
        display="block"
        gutterBottom
        color="#00bcd4"
        marginBottom="18"
      >
        Other Assets
      </Typography>

      <div>
        <TextField
          className="text-fields"
          id="description"
          label="Description "
          variant="outlined"
          onChange={handleDescriptionOA}
        />
        <Typography variant="overline" display="block" gutterBottom>
          Date of Transfer
        </Typography>
        <TextField
          className="text-fields"
          id="datetransfer"
          type="date "
          variant="outlined"
          onChange={handleDatetransferOA}
        />
      </div>
      <br />
      <br />

      <div>
        <TextField
          className="text-fields"
          id="persontransferedtoOA"
          label="Person Transfered To "
          variant="outlined"
          onChange={handlePersontransferedtoOA}
        />

        <TextField
          className="text-fields"
          id="mannertransferToOA"
          label="Manner of Transfer "
          variant="outlined"
          onChange={handleMannertransferOA}
        />
      </div>

      <br />
      <br />
      <TextField
        className="text-fields"
        id="pricepaid"
        label="Price Paid"
        variant="outlined"
        onChange={handlePricepaidOA}
      />

      <br />
      <br />
      <Typography
        variant="h5"
        display="block"
        gutterBottom
        color="#00bcd4"
        marginBottom="18"
      >
        Other Liabilities
      </Typography>

      <div>
        <TextField
          className="text-fields"
          id="creditorOL"
          label="Creditor"
          variant="outlined"
          onChange={handleCreditorOL}
        />

        <TextField
          className="text-fields"
          id="liabilitytype"
          label="Type of Liability"
          variant="outlined"
          onChange={handleLiabilitytypeOL}
        />
      </div>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="amount"
          label="Amount"
          variant="outlined"
          onChange={handleAmountOL}
        />
        <Typography variant="overline" display="block" gutterBottom>
          Date
        </Typography>
        <TextField
          className="text-fields"
          id="date"
          type="date"
          variant="outlined"
          onChange={handleDateOL}
        />
      </div>

      <br />
      <br />
    </Grid>
  );
}

export default ChildrenTransferedProperty;
