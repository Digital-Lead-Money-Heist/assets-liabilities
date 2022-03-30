import { React, useState } from "react";
import { Grid, Typography, TextField } from "@mui/material";
import { Label } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ChildrenDeclarationForm = (props) => {
  const {
    setDescriptionTypeIPCdf,
    setPropertyIdIPCdf,
    setPlotSizeIPCdf,
    setLocationIPCdf,
    setMannerOfPurchaseChangeIPCdf,
    setRelationshipToDeclarantIPJOCdf,
    setValueIPJOCdf,
    setTyprOfMakeMACdf,
    setRegistrationNumberMACdf,
    setPurchasedValueMACdf,
    setValueMACdf,
    setAcquisitionDateChangeCdf,
    setAquisitionDateMAADCdf,
    setSourceFinanceMACdf,
    setAcquiredFormMACdf,
    setTypeMakeMAJOCdf,
    setRegNumberMAJOCdf,
    setPurchasedValueMAJOCdf,
    setValueMAJOCdf,
    setAquisitionDateMAJOADCdf,
    setSourceOfIncomeMAJOCdf,
    setAcquiredFromMAJOCdf,
    setPartnerMAJOCdf,
    setBankCCdf,
    setAccountHolderCCdf,
    setAccountNumberCCdf,
    setAmountCCdf,
    setCurrencyCCdf,
    setSourceFundsCCdf,
    setDescriptionOACdf,
    setCostOACdf,
    setacquisitionDateOAADCdf,
    setSourceFinanceOACdf,
    setRegistrationOwerOACdf,
    setShareCertificateNumberOICdf,
    setPurchasePriceOICdf,
    setNumberOfSharesOICdf,
    setAcquisitionDateOIADCdf,
    setSourceOfFinanceOICdf,
    setValueOICdf,
  } = props;

  // IMMOVABLE PROPERTY
  const handleDescriptionTypeIP = (e) => {
    setDescriptionTypeIPCdf(e.target.value);
  };
  const handlePropertyIdIP = (e) => {
    setPropertyIdIPCdf(e.target.value);
  };
  const handlePlotSizeIP = (e) => {
    setPlotSizeIPCdf(e.target.value);
  };
  const handleLocationIP = (e) => {
    setLocationIPCdf(e.target.value);
  };
  const handleMannerOfPurchaseChangeIP = (e) => {
    setMannerOfPurchaseChangeIPCdf(e.target.value);
  };
  const handleRelationshipToDeclarantIPJO = (e) => {
    setRelationshipToDeclarantIPJOCdf(e.target.value);
  };
  const handleValueIPJO = (e) => {
    setValueIPJOCdf(e.target.value);
  };

  // MOVABLE ASSEST
  const handleTyprOfMakeMA = (e) => {
    setTyprOfMakeMACdf(e.target.value);
  };
  const handleRegistrationNumberMA = (e) => {
    setRegistrationNumberMACdf(e.target.value);
  };
  const handlePurchasedValueMA = (e) => {
    setPurchasedValueMACdf(e.target.value);
  };
  const handleValueMA = (e) => {
    setValueMACdf(e.target.value);
  };
  const handleAcquisitionDateChange = (e) => {
    setAcquisitionDateChangeCdf(e.target.value);
  };
  const handleAquisitionDateMAAD = (e) => {
    setAquisitionDateMAADCdf(e.target.value);
  };
  const handleSourceFinanceMA = (e) => {
    setSourceFinanceMACdf(e.target.value);
  };
  const handleAcquiredFormMA = (e) => {
    setAcquiredFormMACdf(e.target.value);
  };

  // MOVABLE ASSESTS IN JOINT OWNERSHIP
  const handleTypeMakeMAJO = (e) => {
    setTypeMakeMAJOCdf(e.target.value);
  };
  const handleRegNumberMAJO = (e) => {
    setRegNumberMAJOCdf(e.target.value);
  };
  const handlePurchasedValueMAJO = (e) => {
    setPurchasedValueMAJOCdf(e.target.value);
  };
  const handleValueMAJO = (e) => {
    setValueMAJOCdf(e.target.value);

    const handleAquisitionDateMAJOAD = (e) => {
      setAquisitionDateMAJOADCdf(e.target.value);
    };
    const handleSourceOfIncomeMAJO = (e) => {
      setSourceOfIncomeMAJOCdf(e.target.value);
    };
    const handleAcquiredFromMAJO = (e) => {
      setAcquiredFromMAJOCdf(e.target.value);
    };
    const handlePartnerMAJO = (e) => {
      setPartnerMAJOCdf(e.target.value);
    };

    // CASH
    const handleBankC = (e) => {
      setBankCCdf(e.target.value);
    };
    const handleAccountHolderC = (e) => {
      setAccountHolderCCdf(e.target.value);
    };
    const handleAccountNumberC = (e) => {
      setAccountNumberCCdf(e.target.value);
    };
    const handleAmountC = (e) => {
      setAmountCCdf(e.target.value);
    };
    const handleCurrencyC = (e) => {
      setCurrencyCCdf(e.target.value);
    };
    const handleSourceFundsC = (e) => {
      setSourceFundsCCdf(e.target.value);
    };

    // OTHER ASSESTS
    const handleDescriptionOA = (e) => {
      setDescriptionOACdf(e.target.value);
    };
    const handleCostOA = (e) => {
      setCostOACdf(e.target.value);
    };
    const handleacquisitionDateOAAD = (e) => {
      setacquisitionDateOAADCdf(e.target.value);
    };
    const handleSourceFinanceOA = (e) => {
      setSourceFinanceOACdf(e.target.value);
    };
    const handleRegistrationOwerOA = (e) => {
      setRegistrationOwerOACdf(e.target.value);
    };

    // OTHER INCOME
    const handleShareCertificateNumberOI = (e) => {
      setShareCertificateNumberOICdf(e.target.value);
    };
    const handlePurchasePriceOI = (e) => {
      setPurchasePriceOICdf(e.target.value);
    };
    const handleNumberOfSharesOI = (e) => {
      setNumberOfSharesOICdf(e.target.value);
    };
    const handleacquisitionDateOIAD = (e) => {
      setAcquisitionDateOIADCdf(e.target.value);
    };
    const handleSourceOfFinanceOI = (e) => {
      setSourceOfFinanceOICdf(e.target.value);
    };
    const handleValueOI = (e) => {
      setValueOICdf(e.target.value);
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
            Children/ Dependant Declaration
          </Typography>

          <TextField
            className="text-fields"
            id="descriptiontypeIP"
            label="Type of Description"
            variant="outlined"
            onChange={handleDescriptionTypeIP}
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
            onChange={handlePlotSizeIP}
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
            onChange={handleMannerOfPurchaseChangeIP}
          />
        </div>

        <br />
        <br />
        <Typography variant="overline" display="block" gutterBottom>
          Joint Ownership
        </Typography>

        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="YES" />
          <FormControlLabel control={<Checkbox />} label="NO" />
        </FormGroup>

        <br />
        <br />
        <div>
          <TextField
            className="text-fields"
            id="relodeclarantIPJO"
            label="Relationship to declarant"
            variant="outlined"
            onChange={handleRelationshipToDeclarantIPJO}
          />
          <TextField
            className="text-fields"
            id="valueIPJO"
            label="Value"
            variant="outlined"
            onChange={handleValueIPJO}
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
            label="Type of Make"
            variant="outlined"
            onChange={handleTyprOfMakeMA}
          />
          <TextField
            className="text-fields"
            id="regNumberMA"
            label="Registration Number"
            variant="outlined"
            onChange={handleRegistrationNumberMA}
          />
          <TextField
            className="text-fields"
            id="purchasedValueMA"
            label="Purchased Value"
            variant="outlined"
            onChange={handlePurchasedValueMA}
          />
        </div>

        <br />
        <br />
        <div>
          <TextField
            className="text-fields"
            id="valueMA"
            label="Value"
            variant="outlined"
            onChange={handleValueMA}
          />
          <Typography variant="overline" display="block" gutterBottom>
            Aquisition date
          </Typography>
          <TextField
            className="text-fields"
            id="aquisitiondateMAAD"
            type="date"
            variant="outlined"
            onChange={handleAquisitionDateMAAD}
          />
        </div>

        <div>
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

        <br />
        <br />
        <div>
          <TextField
            className="text-fields"
            id="sourcefinanceMA"
            label="Source of Finance"
            variant="outlined"
            onChange={handleSourceFinanceMA}
          />
          <TextField
            className="text-fields"
            id="acquiredfromMA"
            label="Acquired from whom"
            variant="outlined"
            onChange={handleAcquiredFormMA}
          />
        </div>
        <br />
        <br />
        <Typography variant="h5" display="block" gutterBottom>
          Movable assets in Joint Owership
        </Typography>

        <div>
          <TextField
            className="text-fields"
            id="typemakeMAJO"
            label="Type of Make"
            variant="outlined"
            onChange={handleTypeMakeMAJO}
          />
          <TextField
            className="text-fields"
            id="regNumberMAJO"
            label="RegistrationNumber"
            variant="outlined"
            onChange={handleRegNumberMAJO}
          />
          <TextField
            className="text-fields"
            id="purchasedvalueMAJO"
            label="Purchased Value"
            variant="outlined"
            onChange={handlePurchasedValueMAJO}
          />
        </div>

        <br />
        <br />
        <div>
          <TextField
            className="text-fields"
            id="valueMAJO"
            label="Value"
            variant="outlined"
            onChange={handleValueMAJO}
          />
          <Typography variant="overline" display="block" gutterBottom>
            Aquisition date
          </Typography>
          <TextField
            className="text-fields"
            id="aquisitiondateMAJOAD"
            type="date"
            variant="outlined"
            onChange={handleAquisitionDateMAJOAD}
          />
        </div>

        <div>
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

        <br />
        <br />
        <div>
          <TextField
            className="text-fields"
            id="sourcefinanceMAJO"
            label="Source of Finance"
            variant="outlined"
            onChange={handleSourceOfIncomeMAJO}
          />
          <TextField
            className="text-fields"
            id="acquiredfromMAJO"
            label="Acquired from whom"
            variant="outlined"
            onChange={handleAcquiredFromMAJO}
          />

          <TextField
            className="text-fields"
            id="partnerMAJO"
            label="Partner"
            variant="outlined"
            onChange={handlePartnerMAJO}
          />
        </div>

        <br />
        <br />
        <Typography variant="h5" display="block" gutterBottom>
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
            id="accountholderC"
            label="Account Holder"
            variant="outlined"
            onChange={handleAccountHolderC}
          />

          <TextField
            className="text-fields"
            id="accountnumberC"
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
            onChange={handleCostOA}
          />
          <br />
          <br />
          <Typography variant="overline" display="block" gutterBottom>
            Acquitsition Date
          </Typography>
          <TextField
            className="text-fields"
            id="acquisitiondateOAAD"
            type="date"
            variant="outlined"
            onChange={handleacquisitionDateOAAD}
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
            onChange={handleRegistrationOwerOA}
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
            onChange={handleShareCertificateNumberOI}
          />
          <TextField
            className="text-fields"
            id="purchaseprice0I"
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
            id="numberofsharesOI"
            label="number of Shares"
            variant="outlined"
            onChange={handleNumberOfSharesOI}
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
            id="acquisitiondateOIAD"
            type="date"
            variant="outlined"
            onChange={handleacquisitionDateOIAD}
          />

          <TextField
            className="text-fields"
            id="sourcefinanceOI"
            label="Source of Finance"
            variant="outlined"
            onChange={handleSourceOfFinanceOI}
          />
          <TextField
            className="text-fields"
            id="valueOI"
            label="Value"
            variant="outlined"
            onChange={handleValueOI}
          />
        </div>
      </Grid>
    );
  };
};
export default ChildrenDeclarationForm;
