import { React, useState } from "react";
import { Grid, Typography, TextField } from "@mui/material";
import { Label } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function TransferedProperty(props) {
  //variables to store inputs
  const {
    setDescriptiontypeTP,
    setPropertyidTP,
    setPlotsizeTP,
    setLocationTP,
    setMannerpurchaseIPTP,
    setDateoftransferTP,
    setTransferedtoTP,
    setTypemakeMATP,
    setRegNumberTP,
    setDatetransferedTP,
    setMannertransferDTTP,
    setPersontransferedtoDTTP,
    setAmounttransferedTP,
    setDateoftransfertwoTP,
    setPersontransferedtoCSTP,
    setMannertransferCSTP,
    setCurrencyCSTP,
    setSourcefundsCSTP,
    setCertificatenumberOITP,
    setDatetransferOITP,
    setPersontransferedOITP,
    setMannertransferOITP,
    setPricepaidOTP,
    setDescriptionOATP,
    setDatetransferOATP,
    setPersontransferedtoOATP,
    setMannertransferOATP,
    setPricepaidOATP,
    setCreditorOLTP,
    setLiabilitytypeOLTP,
    setAmountOLTP,
    setDateOLTP,
    setPlotsizeIPTP,
    setLocationIPTP,
  } = props;
  const handleDescriptiontypeIP = (e) => {
    setDescriptiontypeTP(e.target.value);
  };
  const handlePropertyidIP = (e) => {
    setPropertyidTP(e.target.value);
  };
  const handlePlotsize = (e) => {
    setPlotsizeIPTP(e.target.value);
  };

  const handleLocation = (e) => {
    setLocationIPTP(e.target.value);
  };
  const handleMannerpurchaseIP = (e) => {
    setMannerpurchaseIPTP(e.target.value);
  };
  const handleDateoftransfer = (e) => {
    setDateoftransferTP(e.target.value);
  };

  const HandleTransferedto = (e) => {
    setTransferedtoTP(e.target.value);
  };
  const handleTypemakeMA = (e) => {
    setTypemakeMATP(e.target.value);
  };
  const handleRegNumber = (e) => {
    setRegNumberTP(e.target.value);
  };
  const handleDatetransfered = (e) => {
    setDatetransferedTP(e.target.value);
  };
  const handleMannertransferDT = (e) => {
    setMannertransferDTTP(e.target.value);
  };
  const handlePersontransferedtoDT = (e) => {
    setPersontransferedtoDTTP(e.target.value);
  };
  const handleAmounttransfered = (e) => {
    setAmounttransferedTP(e.target.value);
  };
  const handleDateoftransfertwo = (e) => {
    setDateoftransfertwoTP(e.target.value);
  };
  const handlePersontransferedtoCS = (e) => {
    setPersontransferedtoCSTP(e.target.value);
  };
  const handleMannertransferCS = (e) => {
    setMannertransferCSTP(e.target.value);
  };
  const handleCurrencyCS = (e) => {
    setCurrencyCSTP(e.target.value);
  };
  const handleSourcefundsCS = (e) => {
    setSourcefundsCSTP(e.target.value);
  };
  const handleSharecertificatenumberOI = (e) => {
    setCertificatenumberOITP(e.target.value);
  };
  const handleDatetransferOI = (e) => {
    setDatetransferOITP(e.target.value);
  };
  const handlePersontransferedOI = (e) => {
    setPersontransferedOITP(e.target.value);
  };
  const handleMannertransferOI = (e) => {
    setMannertransferOITP(e.target.value);
  };
  const handlePricepaidOI = (e) => {
    setPricepaidOTP(e.target.value);
  };
  const handleDescriptionOA = (e) => {
    setDescriptionOATP(e.target.value);
  };
  const handleDatetransferOA = (e) => {
    setDatetransferOATP(e.target.value);
  };
  const handlePersontransferedtoOA = (e) => {
    setPersontransferedtoOATP(e.target.value);
  };
  const handleMannertransferOA = (e) => {
    setMannertransferOATP(e.target.value);
  };
  const handlePricepaidOA = (e) => {
    setPricepaidOATP(e.target.value);
  };
  const handleCreditorOL = (e) => {
    setCreditorOLTP(e.target.value)
;
  };
  const handleLiabilitytypeOL = (e) => {
    setLiabilitytypeOLTP(e.target.value);
  };
  const handleAmountOL = (e) => {
    setAmountOLTP(e.target.value);
  };
  const handleDateOL = (e) => {
    setDateOLTP(e.target.value);
  };
  const handlePlotsizeIP = (e) => {
    setPlotsizeIPTP(e.target.value);
  };
  const handleLocationIP = (e) => {
    setLocationIPTP(e.target.value);
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
          Declarant Transfered Property
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
          id="propertyid"
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
          id="plotsize"
          label="Plot Size"
          variant="outlined"
          onChange={handlePlotsizeIP}
        />
        <TextField
          className="text-fields"
          id="location"
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
          id="mannerpurchase"
          label="Manner of Purchase"
          variant="outlined"
          onChange={handlePlotsize}
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
          id="typemake"
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
          id="mannertransfer"
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
          id="persontransferedto"
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
        CASH
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
          id="dateoftransfer"
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
          id="persontransferedto"
          label="Person Transfered To"
          variant="outlined"
          onChange={handlePersontransferedtoCS}
        />
        <TextField
          className="text-fields"
          id="mannertransfer"
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
          id="sourcefunds"
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
          id="sharecertificatenumber"
          label="Share Certificate Number"
          variant="outlined"
          onChange={handleSharecertificatenumberOI}
        />
        <Typography variant="overline" display="block" gutterBottom>
          Date of Transfer
        </Typography>

        <TextField
          className="text-fields"
          id="datetransfer"
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
          id="mannertransfer"
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
          id="persontransferedto"
          label="Person Transfered To "
          variant="outlined"
          onChange={handlePersontransferedtoOA}
        />

        <TextField
          className="text-fields"
          id="mannertransferOA"
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
    </Grid>
  );
}

export default TransferedProperty;
