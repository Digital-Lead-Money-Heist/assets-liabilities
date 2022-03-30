import { React, useState } from "react";
import { Grid, Typography, TextField } from "@mui/material";
import { Label } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SpouseDeclarationForm = (props) => {
  const {
    setDescriptiontypeISPSD,
    setPropertyIdIPSD,
    setPlotsizeIPSD,
    setLocationIPSD,
    setManneraquisitionIPSD,
    setCoownerNameIPSD,
    setCoownerIdIPSD,
    setAssetValueIPSD,
    setReloDeclarantIPSD,
    setTypemakeMASD,
    setRegNumberMASD,
    setPurchaseValueMASD,
    setCurrentValueMASD,
    setAquisitionDateMASD,
    setSourceOfFinanceMASD,
    setPartnerMASD,
    setBankCSD,
    setAccHolderCSD,
    setAccTypeCSD,
    setAccNumberCSD,
    setAmountCSD,
    setCurrencyCSD,
    setSourceOfFundsCSD,
    setDescriptionOASD,
    setCostOASD,
    setAcquisitiondateOASD,
    setSourceFinanceOASD,
    setRegisteredownerOASD,
    setSharecertificatenumberOISD,
    setPurchasepriceOISD,
  } = props;

  const handleDescriptionTypeChangeIP = (e) => {
    setDescriptiontypeISPSD(e.target.value);
  };

  const handlePropertyIdChangeIP = (e) => {
    setPropertyIdIPSD(e.target.value);
  };

  const handlePlotSizeChangeIP = (e) => {
    setPlotsizeIPSD(e.target.value);
  };

  const handleSLocationChangeIP = (e) => {
    setLocationIPSD(e.target.value);
  };

  const handleMannerOfAquisitionChangeIP = (e) => {
    setManneraquisitionIPSD(e.target.value);
  };

  const handleCoOwnerNameChangeIP = (e) => {
    setCoownerNameIPSD(e.target.value);
  };

  const handleCoOwnerIdChangeIP = (e) => {
    setCoownerIdIPSD(e.target.value);
  };

  const handleAssetvalueChangeIP = (e) => {
    setAssetValueIPSD(e.target.value);
  };

  const handleRelationshipToDeclarantChangeIP = (e) => {
    setReloDeclarantIPSD(e.target.value);
  };

  const handleTyprOfMakeChangeMA = (e) => {
    setTypemakeMASD(e.target.value);
  };

  const handleRegistrationNumberMA = (e) => {
    setRegNumberMASD(e.target.value);
  };

  const handlePurchasedValueMA = (e) => {
    setPurchaseValueMASD(e.target.value);
  };

  const handleCurrentValueMAValueMA = (e) => {
    setCurrentValueMASD(e.target.value);
  };

  const handleAquisitionDateMA = (e) => {
    setAquisitionDateMASD(e.target.value);
  };

  const handleSourceFinanceMA = (e) => {
    setSourceOfFinanceMASD(e.target.value);
  };

  const handlePartnerMA = (e) => {
    setPartnerMASD(e.target.value);
  };

  const handleBankC = (e) => {
    setBankCSD(e.target.value);
  };

  const handleSAccountHolderC = (e) => {
    setAccHolderCSD(e.target.value);
  };

  const handleAccountTypeC = (e) => {
    setAccTypeCSD(e.target.value);
  };

  const handleAccountNumberC = (e) => {
    setAccNumberCSD(e.target.value);
  };

  const handleAmountC = (e) => {
    setAmountCSD(e.target.value);
  };

  const handleCurrencyC = (e) => {
    setCurrencyCSD(e.target.value);
  };

  const handleSourceFundsC = (e) => {
    setSourceOfFundsCSD(e.target.value);
  };
  const handleDescriptionOA = (e) => {
    setDescriptionOASD(e.target.value);
  };

  const handleCostChangeOA = (e) => {
    setCostOASD(e.target.value);
  };

  const handleacquisitionDateOA = (e) => {
    setAcquisitiondateOASD(e.target.value);
  };

  const handleSourceFinanceOA = (e) => {
    setSourceFinanceOASD(e.target.value);
  };

  const handleRegistrationDowerOA = (e) => {
    setRegisteredownerOASD(e.target.value);
  };

  const handlesharecertificatenumberOI = (e) => {
    setSharecertificatenumberOISD(e.target.value);
  };

  const handlepurchasepriceOI = (e) => {
    setPurchasepriceOISD(e.target.value);
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
          Spouse Declaration
        </Typography>

        <TextField
          className="text-fields"
          id="descriptiontypeIP"
          label="Type of Description"
          variant="outlined"
          onChange={handleDescriptionTypeChangeIP}
        />

        <TextField
          className="text-fields"
          id="propertyidIP"
          label="Property Identification"
          variant="outlined"
          onChange={handlePropertyIdChangeIP}
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
          id="manneraquisitionIP"
          label="Manner of Aquisition"
          variant="outlined"
          onChange={handleMannerOfAquisitionChangeIP}
        />

        <Typography variant="overline" display="block" gutterBottom>
          Joint Ownership
        </Typography>

        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="YES" />
          <FormControlLabel control={<Checkbox />} label="NO" />
        </FormGroup>
      </div>

      <br />
      <br />

      <div>
        <TextField
          className="text-fields"
          id="coownerNameIP"
          label="Co-Owners Name "
          variant="outlined"
          oChange={handleCoOwnerNameChangeIP}
        />

        <TextField
          className="text-fields"
          id="coownerIdIP"
          label="Co-Owners ID/Passwort Number "
          variant="outlined"
          onChange={handleCoOwnerIdChangeIP}
        />
      </div>

      <br />
      <br />

      <div>
        <TextField
          className="text-fields"
          id="assetValue"
          label="ValueIP"
          variant="outlined"
          onChange={handleAssetvalueChangeIP}
        />

        <TextField
          className="text-fields"
          id="relodeclarantIP"
          label="Relationship To Declarant "
          variant="outlined"
          onChange={handleRelationshipToDeclarantChangeIP}
        />
      </div>

      <br />
      <br />

      <Typography variant="h5" display="block" gutterBottom>
        Movable assets
      </Typography>

      <div>
        <TextField
          className="text-fields"
          id="typemakeMA"
          label="Type and Make"
          variant="outlined"
          onChange={handleTyprOfMakeChangeMA}
        />
        <TextField
          className="text-fields"
          id="regNumberMA"
          label="Registration Number"
          variant="outlined"
          onChange={handleRegistrationNumberMA}
        />
      </div>

      <br />
      <br />

      <div>
        <TextField
          className="text-fields"
          id="purchaseValueMA"
          label="Purchased Value"
          variant="outlined"
          onChange={handlePurchasedValueMA}
        />
        <TextField
          className="text-fields"
          id="currentValueMA"
          label="Current Value"
          variant="outlined"
          onChange={handleCurrentValueMAValueMA}
        />
      </div>

      <br />
      <br />

      <div>
        <Typography variant="overline" display="block" gutterBottom>
          Aquisition Date
        </Typography>
        <TextField
          className="text-fields"
          id="aquisitionDateMA"
          type="date"
          variant="outlined"
          onChange={handleAquisitionDateMA}
        />

        <Typography variant="overline" display="block" gutterBottom>
          Current Status
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Active"
          />
          <FormControlLabel control={<Checkbox />} label="Innactive" />
        </FormGroup>
      </div>

      <br />
      <br />

      <div>
        <TextField
          className="text-fields"
          id="sourceOfFinanceMA"
          label="Source of Finance"
          variant="outlined"
          onChange={handleSourceFinanceMA}
        />
        <TextField
          className="text-fields"
          id="partnerMA"
          label="Partner"
          variant="outlined"
          onChange={handlePartnerMA}
        />
      </div>

      <br />
      <br />
      <Typography variant="h5" display="block" gutterBottom>
        CASH
      </Typography>

      <br />
      <br />
      <div>
        <TextField
          className="text-fields"
          id="bankC"
          label="Bank/ Institution"
          variant="outlined"
          onChange={handleBankC}
        />
        <TextField
          className="text-fields"
          id="accHolderC"
          label="Account Holder"
          variant="outlined"
          onChange={handleSAccountHolderC}
        />
      </div>

      <br />
      <br />

      <div>
        <TextField
          className="text-fields"
          id="accTypeC"
          label="Account Type"
          variant="outlined"
          onChange={handleAccountTypeC}
        />
        <TextField
          className="text-fields"
          id="accNumberC"
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
          id="amountC"
          label="Ammount"
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
      </div>

      <br />
      <br />

      <TextField
        className="text-fields"
        id="sourceOfFundsC"
        label="Source Of Funds"
        variant="outlined"
        onChange={handleSourceFundsC}
      />

      <Typography variant="h5" display="block" gutterBottom>
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

      <Typography variant="overline" display="block" gutterBottom>
        Current Status
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Active"
        />
        <FormControlLabel control={<Checkbox />} label="Inactive" />
      </FormGroup>

      <br />
      <br />

      <div>
        <TextField
          className="text-fields"
          id="sourceFinanceOA"
          label="Source Of Finance"
          variant="outlined"
          onChange={handleSourceFinanceOA}
        />
        <TextField
          className="text-fields"
          id="registeredownerOA"
          label="Registered Owner"
          variant="outlined"
          onChange={handleRegistrationDowerOA}
        />
      </div>

      <br />
      <br />

      <Typography variant="h5" display="block" gutterBottom>
        Other Income
      </Typography>

      <div>
        <TextField
          className="text-fields"
          id="sharecertificatenumberOI"
          label="Share Certificate Number"
          variant="outlined"
          onChange={handlesharecertificatenumberOI}
        />
        <TextField
          className="text-fields"
          id="purchasepriceOI"
          label="Purchase Price"
          variant="outlined"
          onChange={handlepurchasepriceOI}
        />
      </div>

      <br />
      <br />

      <div>
        <TextField
          className="text-fields"
          id="numberofshares"
          label="number of Shares"
          variant="outlined"
        />
        <Typography variant="overline" display="block" gutterBottom>
          Current Status
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Active"
          />
          <FormControlLabel control={<Checkbox />} label="Inactive" />
        </FormGroup>
      </div>

      <div>
        <Typography variant="overline" display="block" gutterBottom>
          Acquitsition Date
        </Typography>
        <TextField
          className="text-fields"
          id="acquisitiondate"
          type="date"
          variant="outlined"
        />

        <TextField
          className="text-fields"
          id="sourcefinance"
          label="Source of Finance"
          variant="outlined"
        />
        <TextField
          className="text-fields"
          id="value"
          label="Value"
          variant="outlined"
        />
      </div>
    </Grid>
  );
};

export default SpouseDeclarationForm;
