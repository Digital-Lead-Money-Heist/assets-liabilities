import { React, useState } from "react";
import { Grid, Typography, TextField, RadioGroup } from "@mui/material";
import { Label } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function PropertyForm(props) {
  const {
    setTypeIp,
    setPropertyidIP,
    setPlotsizeIP,
    setLocationIP,
    setMannerpurchaseIP,
    setpurchaseLocationIP,
    setJointRadio,
    setRelodeclarantIP,
    setValueIP,
    setTypemakeMA,
    setRegNumberMA,
    setValue2MA,
    setAquisitiondateAD,
    setActiveRadio,
    setSourcefinanceAD,
    setAcquiredfromAD,
    setTypemakejoMO,
    setRegNumberjoMO,
    setValue2MO,
    setAquisitiondateMO,
    setActiveRadioMO,
    setSourcefinanceMO,
    setAcquiredfromMO,
    setPartnerMO,
    setBankC,
    setAccountholderMO,
    setAccountnumberMO,
    setAmount2C,
    setCurrencyC,
    setSourcefundsC,
    setDescriptionOA,
    setCostOA,
    setAcquisitiondateOA,
    setActiveRadioAO,
    setSourceFinanceAO,
    setRegisteredownerAO,
    setSharecertificatenumberOI,
    setPurchasepriceOI,
    setNumberofsharesIO,
    setActiveRadioIO,
    setAcquisitiondateIO,
    setSourcefinanceIO,
    setvalueIO,
    jointRadio,
    activeRadio,
    activeRadioAO,
    activeRadioIO,
    activeRadioMO,
  } = props;

  const handleTypeChangeIP = (e) => {
    setTypeIp(e.event.value);
  };

  const handlePropertyIdIP = (e) => {
    setPropertyidIP(e.event.value);
  };

  const handlePlotSizeChangeIP = (e) => {
    setPlotsizeIP(e.event.value);
  };

  const handleSLocationChangeIP = (e) => {
    setLocationIP(e.event.value);
  };

  const handleMannerOfAquisitionChangeIP = (e) => {
    setMannerpurchaseIP(e.event.value);
  };

  const handlePurchaseLocationChangeIP = (e) => {
    setpurchaseLocationIP(e.event.value);
  };

  const jointRadioChange = (e) => {
    setJointRadio(e.target.value);
  };

  const handleRelationshipToDeclarantIPJO = (e) => {
    setRelodeclarantIP(e.event.value);
  };

  const handleValueIPJO = (e) => {
    setValueIP(e.event.value);
  };

  const handleTyprOfMakeMA = (e) => {
    setTypemakeMA(e.event.value);
  };

  const handleRegistrationNumberMA = (e) => {
    setRegNumberMA(e.event.value);
  };

  const handleValueMA = (e) => {
    setValue2MA(e.event.value);
  };

  const handleAquisitionDateAD = (e) => {
    setAquisitiondateAD(e.event.value);
  };

  const handleActiveRadio = (e) => {
    setActiveRadio(e.target.value);
  };

  const handleSourceFinanceCS = (e) => {
    setSourcefinanceAD(e.target.value);
  };

  const handleAcquiredFormCS = (e) => {
    setAcquiredfromAD(e.target.value);
  };

  const handleTypeMakeMAJO = (e) => {
    setTypemakejoMO(e.target.value);
  };

  const handleRegNumberMAJO = (e) => {
    setRegNumberjoMO(e.target.value);
  };

  const handleValueMAJO = (e) => {
    setValue2MO(e.target.value);
  };

  const handleAquisitionDateJO = (e) => {
    setAquisitiondateMO(e.target.value);
  };

  //radio button
  const handleActiveRadioMO = (e) => {
    setActiveRadioMO(e.target.value);
  };

  const handleSourceOfIncomeJO = (e) => {
    setSourcefinanceMO(e.target.value);
  };

  const handleAcquiredFromJO = (e) => {
    setAcquiredfromMO(e.target.value);
  };

  const handlePartnerJO = (e) => {
    setPartnerMO(e.target.value);
  };

  const handleBankC = (e) => {
    setBankC(e.target.value);
  };

  const handleSAccountHolderC = (e) => {
    setAccountholderMO(e.target.value);
  };

  const handleAccountNumberC = (e) => {
    setAccountnumberMO(e.target.value);
  };

  const handleAmountC = (e) => {
    setAmount2C(e.target.value);
  };

  const handleSourceFundsC = (e) => {
    setSourcefundsC(e.target.value);
  };

  const handleCurrencyC = (e) => {
    setCurrencyC(e.target.value);
  };

  const handleDescriptionOA = (e) => {
    setDescriptionOA(e.target.value);
  };

  const handleCostChangeOA = (e) => {
    setCostOA(e.target.value);
  };

  const handleacquisitionDateOA = (e) => {
    setAcquisitiondateOA(e.target.value);
  };

  const handleActiveRadioAO = (e) => {
    setActiveRadioAO(e.target.value);
  };

  const handleSourceFinanceOA = (e) => {
    setSourceFinanceAO(e.target.value);
  };

  const handleRegistrationDowerOA = (e) => {
    setRegisteredownerAO(e.target.value);
  };

  const handleShareCertificateNumberOI = (e) => {
    setSharecertificatenumberOI(e.target.value);
  };

  const handlePurchasePriceOI = (e) => {
    setPurchasepriceOI(e.target.value);
  };

  const handleNumberOfSharesOI = (e) => {
    setNumberofsharesIO(e.target.value);
  };

  //radio button
  const handleActiveRadioIO = (e) => {
    setActiveRadioIO(e.target.value);
  };

  const handleacquisitionDateChangeIO = (e) => {
    setAcquisitiondateIO(e.target.value);
  };

  const handleSourceOfFinanceChangeIO = (e) => {
    setSourcefinanceIO(e.target.value);
  };

  const handleValueChangeIO = (e) => {
    setvalueIO(e.target.value);
  };

  return (
    <Grid>
      <div>
        <Typography
          variant="h5"
          display="block"
          gutterBottom
          color="#00bcd4"
          marginBottom="18px"
        >
          Immovable Assets
        </Typography>

        <TextField
          className="text-fields"
          id="typeIP"
          label="Type of Description"
          variant="outlined"
          onChange={handleTypeChangeIP}
        />
        <TextField
          className="text-fields"
          id="propertyidIP"
          label="Property Identification"
          variant="outlined"
          onChange={handlePropertyIdIP}
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
          onChange={handlePlotSizeChangeIP}
        />
        <TextField
          className="text-fields"
          id="locationIP"
          label="Location"
          variant="outlined"
          onChange={handleSLocationChangeIP}
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
          onChange={handleMannerOfAquisitionChangeIP}
        />
        <TextField
          className="text-fields"
          id="purchaseLocationIP"
          label="Location"
          variant="outlined"
          onChange={handlePurchaseLocationChangeIP}
        />
      </div>

      <br />
      <br />
      {/* <Typography variant="overline" display="block" gutterBottom>
        Joint Ownership
      </Typography> */}

      {/* <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="YES" />
        <FormControlLabel control={<Checkbox />} label="NO" />
      </FormGroup> */}

      <FormControl component="fieldset">
        <FormLabel component="legend">Joint Ownership</FormLabel>
        <RadioGroup
          aria-label="jointOwnership"
          defaultValue={jointRadio}
          name="radio-buttons-group"
          onChange={jointRadioChange}
        >
          <FormControlLabel value="NO" control={<Radio />} label="NO" />
          <FormControlLabel value="YES" control={<Radio />} label="YES" />
        </RadioGroup>
      </FormControl>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="relodeclarantIP"
          label="Relationship to declarant"
          variant="outlined"
          onChange={handleRelationshipToDeclarantIPJO}
        />
        <TextField
          className="text-fields"
          id="valueIP"
          label="Value"
          variant="outlined"
          onChange={handleValueIPJO}
        />
      </div>
      <br />
      <br />
      <Typography
        variant="h5"
        display="block"
        gutterBottom
        color="#00bcd4"
        marginBottom="18px"
      >
        Movable assets
      </Typography>

      <div>
        <TextField
          className="text-fields"
          id="typemakeMA"
          label="Type of Make"
          variant="outlined"
          onChange={handleTyprOfMakeMA}
        />
        <TextField
          className="text-fields"
          id="regNumberMA"
          label="Location"
          variant="outlined"
          onChange={handleRegistrationNumberMA}
        />
        <TextField className="text-fields" variant="outlined" />
      </div>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="value2MA"
          label="Value"
          variant="outlined"
          onChange={handleValueMA}
        />
        <Typography variant="overline" display="block" gutterBottom>
          Aquisition date
        </Typography>
        <TextField
          className="text-fields"
          id="aquisitiondateAD"
          type="date"
          variant="outlined"
          onChange={handleAquisitionDateAD}
        />
      </div>

      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Current Status</FormLabel>
          <RadioGroup
            aria-label="status"
            defaultValue={activeRadio}
            name="radio-buttons-group"
            handleChange={handleActiveRadio}
          >
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              value="innactive"
              control={<Radio />}
              label="Innactive"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="sourcefinanceAD"
          label="Source of Finance"
          variant="outlined"
          onChange={handleSourceFinanceCS}
        />
        <TextField
          className="text-fields"
          id="acquiredfromAD"
          label="Acquired from whom"
          variant="outlined"
          onChange={handleAcquiredFormCS}
        />
      </div>
      <br />
      <br />
      <Typography
        variant="h5"
        display="block"
        gutterBottom
        color="#00bcd4"
        marginBottom="18px"
      >
        Movable assets in Joint Owership
      </Typography>

      <div>
        <TextField
          className="text-fields"
          id="typemakejoMO"
          label="Type of Make"
          variant="outlined"
          onChange={handleTypeMakeMAJO}
        />
        <TextField
          className="text-fields"
          id="regNumberjoMO"
          label="Location"
          variant="outlined"
          onChange={handleRegNumberMAJO}
        />
        <TextField className="text-fields" variant="outlined" />
      </div>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="value2MO"
          label="Value"
          variant="outlined"
          onChange={handleValueMAJO}
        />
        <Typography variant="overline" display="block" gutterBottom>
          Aquisition date
        </Typography>
        <TextField
          className="text-fields"
          id="aquisitiondateMO"
          type="date"
          variant="outlined"
          onChange={handleAquisitionDateJO}
        />
      </div>

      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Current Status</FormLabel>
          <RadioGroup
            aria-label="status"
            defaultValue={activeRadioMO}
            name="radio-buttons-group"
            handleChange={handleActiveRadioMO}
          >
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              value="innactive"
              control={<Radio />}
              label="Innactive"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="sourcefinanceMO"
          label="Source of Finance"
          variant="outlined"
          onChange={handleSourceOfIncomeJO}
        />
        <TextField
          className="text-fields"
          id="acquiredfromMO"
          label="Acquired from whom"
          variant="outlined"
          onChange={handleAcquiredFromJO}
        />

        <TextField
          className="text-fields"
          id="partnerMO"
          label="Partner"
          variant="outlined"
          onChange={handlePartnerJO}
        />
      </div>

      <br />
      <br />
      <Typography
        variant="h5"
        display="block"
        gutterBottom
        color="#00bcd4"
        marginBottom="18px"
      >
        CASH
      </Typography>

      <div>
        <TextField
          className="text-fields"
          id="bankC"
          label="Bank / Instituion"
          variant="outlined"
          onChange={handleBankC}
        />
        <TextField
          className="text-fields"
          id="accountholderMO"
          label="Account Holder"
          variant="outlined"
          onChange={handleSAccountHolderC}
        />

        <TextField
          className="text-fields"
          id="accountnumberMO"
          label="Account Number"
          variant="outlined"
          onChange={handleAccountNumberC}
        />
      </div>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="amount2C"
          label="Amount"
          variant="outlined"
          onChange={handleAmountC}
        />
        <TextField
          className="text-fields"
          id="currencyC"
          label="Currency"
          variant="outlined"
          onChange={handleCurrencyC}
        />

        <TextField
          className="text-fields"
          id="sourcefundsC"
          label="Source of Funds"
          variant="outlined"
          onChange={handleSourceFundsC}
        />
      </div>

      <br />
      <br />
      <Typography
        variant="h5"
        display="block"
        gutterBottom
        color="#00bcd4"
        marginBottom="18px"
      >
        Other Assets
      </Typography>
      <div>
        <TextField
          className="text-fields"
          id="descriptionOA"
          label="Description"
          variant="outlined"
          onChange={handleDescriptionOA}
        />
        <TextField
          className="text-fields"
          id="costOA"
          label="Cost"
          variant="outlined"
          onChange={handleCostChangeOA}
        />
        <br />
        <br />
        <Typography variant="overline" display="block" gutterBottom>
          Acquitsition Date
        </Typography>
        <TextField
          className="text-fields"
          id="acquisitiondateOA"
          type="date"
          variant="outlined"
          onChange={handleacquisitionDateOA}
        />
      </div>

      <FormControl component="fieldset">
        <FormLabel component="legend">Current Status</FormLabel>
        <RadioGroup
          aria-label="status"
          defaultValue={activeRadioAO}
          name="radio-buttons-group"
          onChange={handleActiveRadioAO}
        >
          <FormControlLabel value="female" control={<Radio />} label="Active" />
          <FormControlLabel value="male" control={<Radio />} label="Inactive" />
        </RadioGroup>
      </FormControl>

      <br />
      <br />

      <div>
        <TextField
          className="text-fields"
          id="sourceFinanceAO"
          label="Source Of Finance"
          variant="outlined"
          onChange={handleSourceFinanceOA}
        />
        <TextField
          className="text-fields"
          id="registeredownerAO"
          label="Registered Owner"
          variant="outlined"
          onChange={handleRegistrationDowerOA}
        />
      </div>

      <br />
      <br />
      <Typography
        variant="h5"
        display="block"
        gutterBottom
        color="#00bcd4"
        marginBottom="18px"
      >
        Other Income
      </Typography>

      <div>
        <TextField
          className="text-fields"
          id="sharecertificatenumberOI"
          label="Share Certificate Number"
          variant="outlined"
          onChange={handleShareCertificateNumberOI}
        />
        <TextField
          className="text-fields"
          id="purchasepriceOI"
          label="Purchase Price"
          variant="outlined"
          onChange={handlePurchasePriceOI}
        />
      </div>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="numberofsharesIO"
          label="number of Shares"
          variant="outlined"
          onChange={handleNumberOfSharesOI}
        />

        <FormControl component="fieldset">
          <FormLabel component="legend">Current Status</FormLabel>
          <RadioGroup
            aria-label="gender"
            defaultValue={activeRadioIO}
            name="radio-buttons-group"
            onChange={handleActiveRadioIO}
          >
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              value="inactive"
              control={<Radio />}
              label="Inactive"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <Typography variant="overline" display="block" gutterBottom>
          Acquitsition Date
        </Typography>
        <TextField
          className="text-fields"
          id="acquisitiondateIO"
          type="date"
          variant="outlined"
          onChange={handleacquisitionDateChangeIO}
        />

        <TextField
          className="text-fields"
          id="sourcefinanceIO"
          label="Source of Finance"
          variant="outlined"
          onChange={handleSourceOfFinanceChangeIO}
        />
        <TextField
          className="text-fields"
          id="valueIO"
          label="Value"
          variant="outlined"
          onChange={handleValueChangeIO}
        />
      </div>
    </Grid>
  );
}

export default PropertyForm;
