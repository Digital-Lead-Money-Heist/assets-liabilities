import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Property from "./propertyForm";
import Declaration from "./declarationStatus";
import Transfered from "./transferedProperty";
import SpouseDeclarationForm from "./SpouseDeclarationForm";
import ChildrenDeclarationForm from "./childrenDeclarationForm";
import ChildrenTransferedProperty from "./childrenTransferedProperty";
import SpouseTransferedProperty from "./spouseTransferedProperty";
import Form from "./form";
import Oath from "./Oath";
import Intro from "./Intro";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../../Firebase/config";
import { collection, doc, addDoc, getFirestore } from "firebase/firestore";
import { currentUid } from "../../Firebase/firebaseFunctions";
//sorry, continue

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  // declaration states
  const [declareSurname, setDeclareSurname] = useState("");
  const [declareFirstName, setDeclareFirstName] = useState("");
  const [declareDoB, setDeclareDoB] = useState("");
  const [declarePoB, setDeclarePoB] = useState("");
  const [declareIdNum, setDeclareIdNum] = useState("");
  const [declareCitizen, setDeclareCitizen] = useState("");
  const [declareMarritalStatus, setDeclareMarritalStatus] = useState("");
  const [declarePhysicalAddress, setDeclarePhysicalAddress] = useState("");
  const [declarePostalAddress, setDeclarePostalAddress] = useState("");
  const [declareContact, setdeclareContact] = useState("");
  const [declarePostion, setdeclarePostion] = useState("");
  const [declareCurrentAppointment, setDeclareCurrentAppointment] =
    useState("");
  const [declareEmployerName, setDeclareEmployerName] = useState("");
  const [declareEmployementNature, setDeclareEmployementNature] = useState("");
  const [declareSalary, setDeclareSalary] = useState("");
  const [declareAllowance, setDeclareAllowance] = useState("");
  const [declareSourceOfIncome, setDeclareSourceOfIncome] = useState("");
  const [declareRank, setDeclareRank] = useState("");
  const [declareFromLastAppointment, setDeclareFromLastAppointment] =
    useState("");
  const [declareToLastAppointment, setDeclareToLastAppointment] = useState("");
  const [declareTaxId, setDeclareTaxId] = useState("");
  // declaration states

  // property states
  const [typeIp, setTypeIp] = useState("");
  const [propertyidIP, setPropertyidIP] = useState("");
  const [plotsizeIP, setPlotsizeIP] = useState("");
  const [locationIP, setLocationIP] = useState("");
  const [mannerpurchaseIP, setMannerpurchaseIP] = useState("");
  const [purchaseLocationIP, setpurchaseLocationIP] = useState("");
  const [jointRadio, setJointRadio] = useState("NO");
  const [relodeclarantIP, setRelodeclarantIP] = useState("");
  const [relodeclavalueIPrantIP, setValueIP] = useState("");
  const [typemakeMA, setTypemakeMA] = useState("");
  const [regNumberMA, setRegNumberMA] = useState("");
  const [value2MA, setValue2MA] = useState("");
  const [aquisitiondateAD, setAquisitiondateAD] = useState("");
  const [activeRadio, setActiveRadio] = useState("Active");
  const [sourcefinanceAD, setSourcefinanceAD] = useState("");
  const [acquiredfromAD, setAcquiredfromAD] = useState("");
  const [typemakejoMO, setTypemakejoMO] = useState("");
  const [regNumberjoMO, setRegNumberjoMO] = useState("");
  const [value2MO, setValue2MO] = useState("");
  const [aquisitiondateMO, setAquisitiondateMO] = useState("");
  const [activeRadioMO, setActiveRadioMO] = useState("Active");
  const [sourcefinanceMO, setSourcefinanceMO] = useState("");
  const [acquiredfromMO, setAcquiredfromMO] = useState("");
  const [partnerMO, setPartnerMO] = useState("");
  const [bankC, setBankC] = useState("");
  const [accountholderMO, setAccountholderMO] = useState("");
  const [accountnumberMO, setAccountnumberMO] = useState("");
  const [amount2C, setAmount2C] = useState("");
  const [currencyC, setCurrencyC] = useState("");
  const [sourcefundsC, setSourcefundsC] = useState("");
  const [descriptionOA, setDescriptionOA] = useState("");
  const [costOA, setCostOA] = useState("");
  const [acquisitiondateOA, setAcquisitiondateOA] = useState("");
  const [activeRadioAO, setActiveRadioAO] = useState("Active");
  const [sourceFinanceAO, setSourceFinanceAO] = useState("");
  const [registeredownerAO, setRegisteredownerAO] = useState("");
  const [sharecertificatenumberOI, setSharecertificatenumberOI] = useState("");
  const [purchasepriceOI, setPurchasepriceOI] = useState("");
  const [numberofsharesIO, setNumberofsharesIO] = useState("");
  const [activeRadioIO, setActiveRadioIO] = useState("Active");
  const [acquisitiondateIO, setAcquisitiondateIO] = useState("");
  const [sourcefinanceIO, setSourcefinanceIO] = useState("");
  const [valueIO, setvalueIO] = useState("");
  // property states

  //transfared property
  const [descriptiontypeTP, setDescriptiontypeTP] = useState("");
  const [propertyidTP, setPropertyidTP] = useState("");
  const [plotsizeTP, setPlotsizeTP] = useState("");
  const [LocationTP, setLocationTP] = useState("");
  const [MannerpurchaseIPTP, setMannerpurchaseIPTP] = useState("");
  const [DateoftransferTP, setDateoftransferTP] = useState("");
  const [TransferedtoTP, setTransferedtoTP] = useState("");
  const [TypemakeMATP, setTypemakeMATP] = useState("");
  const [RegNumberTP, setRegNumberTP] = useState("");
  const [DatetransferedTP, setDatetransferedTP] = useState("");
  const [MannertransferDTTP, setMannertransferDTTP] = useState("");
  const [PersontransferedtoDTTP, setPersontransferedtoDTTP] = useState("");
  const [AmounttransferedTP, setAmounttransferedTP] = useState("");
  const [DateoftransfertwoTP, setDateoftransfertwoTP] = useState("");
  const [PersontransferedtoCSTP, setPersontransferedtoCSTP] = useState("");
  const [MannertransferCSTP, setMannertransferCSTP] = useState("");
  const [CurrencyCSTP, setCurrencyCSTP] = useState("");
  const [SourcefundsCSTP, setSourcefundsCSTP] = useState("");
  const [CertificatenumberOITP, setCertificatenumberOITP] = useState("");
  const [DatetransferOITP, setDatetransferOITP] = useState("");
  const [PersontransferedOITP, setPersontransferedOITP] = useState("");
  const [MannertransferOITP, setMannertransferOITP] = useState("");
  const [PricepaidOTP, setPricepaidOTP] = useState("");
  const [DescriptionOATP, setDescriptionOATP] = useState("");
  const [DatetransferOATP, setDatetransferOATP] = useState("");
  const [PersontransferedtoOATP, setPersontransferedtoOATP] = useState("");
  const [mannertransferOATP, setMannertransferOATP] = useState("");
  const [PricepaidOATP, setPricepaidOATP] = useState("");
  const [creditorOLTP, setCreditorOLTP] = useState("");
  const [LiabilitytypeOLTP, setLiabilitytypeOLTP] = useState("");
  const [AmountOLTP, setAmountOLTP] = useState("");
  const [DateOLTP, setDateOLTP] = useState("");
  const [PlotsizeIPTP, setPlotsizeIPTP] = useState("");
  const [LocationIPTP, setLocationIPTP] = useState("");

  //transfared property

  //spouse declaration form
  const [descriptiontypeIPSD, setDescriptiontypeISPSD] = useState("");
  const [propertyidIPSD, setPropertyIdIPSD] = useState("");
  const [plotsizeIPSD, setPlotsizeIPSD] = useState("");
  const [locationIPSD, setLocationIPSD] = useState("");
  const [manneraquisitionIPSD, setManneraquisitionIPSD] = useState("");
  //include code to get data from radiobutton here

  const [coownerNameIPSD, setCoownerNameIPSD] = useState("");
  const [coownerIdIPSD, setCoownerIdIPSD] = useState("");
  const [assetvlaueIPSD, setAssetValueIPSD] = useState("");
  const [relodeclarantIPSD, setReloDeclarantIPSD] = useState("");
  const [typemakeMAv, setTypemakeMASD] = useState("");
  const [regNumberMASD, setRegNumberMASD] = useState("");
  const [purchaseValueMASD, setPurchaseValueMASD] = useState("");
  const [currentValueMASD, setCurrentValueMASD] = useState("");
  const [aquisitionDateMASD, setAquisitionDateMASD] = useState("");
  //include code to get data from radiobutton here

  const [sourceOfFinanceMASD, setSourceOfFinanceMASD] = useState("");
  const [partnerMASD, setPartnerMASD] = useState("");
  const [bankCSD, setBankCSD] = useState("");
  const [accHolderCSD, setAccHolderCSD] = useState("");
  const [accTypeCSD, setAccTypeCSD] = useState("");
  const [accNumberCSD, setAccNumberCSD] = useState("");
  const [amountCSD, setAmountCSD] = useState("");
  const [currencyCSD, setCurrencyCSD] = useState("");
  const [sourceOfFundsCSD, setSourceOfFundsCSD] = useState("");
  const [descriptionOASD, setDescriptionOASD] = useState("");
  const [costOASD, setCostOASD] = useState("");
  const [acquisitiondateOASD, setAcquisitiondateOASD] = useState("");
  //include code to get data from radiobutton here

  const [sourceFinanceOASD, setSourceFinanceOASD] = useState("");
  const [registeredownerOASD, setRegisteredownerOASD] = useState("");
  const [sharecertificatenumberOISD, setSharecertificatenumberOISD] =
    useState("");
  const [purchasepriceOISD, setPurchasepriceOISD] = useState("");
  // spouse declaration form

  //spouse transfared ptoperty
  const [descriptiontypeStp, setDescriptiontypeStp] = useState("");
  const [propertyidStp, setPropertyidStp] = useState("");
  const [plotsizeStp, setPlotsizeStp] = useState("");
  const [LocationStp, setLocationStp] = useState("");
  const [MannerpurchaseIPStp, setMannerpurchaseIPStp] = useState("");
  const [DateoftransferStp, setDateoftransferStp] = useState("");
  const [TransferedtoStp, setTransferedtoStp] = useState("");
  const [TypemakeMAStp, setTypemakeMAStp] = useState("");
  const [RegNumberStp, setRegNumberStp] = useState("");
  const [DatetransferedStp, setDatetransferedStp] = useState("");
  const [MannertransferDTStp, setMannertransferDTStp] = useState("");
  const [PersontransferedtoDTStp, setPersontransferedtoDTStp] = useState("");
  const [AmounttransferedStp, setAmounttransferedStp] = useState("");
  const [DateoftransfertwoStp, setDateoftransfertwoStp] = useState("");
  const [PersontransferedtoCSStp, setPersontransferedtoCSStp] = useState("");
  const [MannertransferCSStp, setMannertransferCSStp] = useState("");
  const [CurrencyCSStp, setCurrencyCSStp] = useState("");
  const [SourcefundsCSStp, setSourcefundsCSStp] = useState("");
  const [CertificatenumberOIStp, setCertificatenumberOIStp] = useState("");
  const [DatetransferOIStp, setDatetransferOIStp] = useState("");
  const [PersontransferedOIStp, setPersontransferedOIStp] = useState("");
  const [MannertransferOIStp, setMannertransferOIStp] = useState("");
  const [PricepaidOStp, setPricepaidOStp] = useState("");
  const [DescriptionOAStp, setDescriptionOAStp] = useState("");
  const [DatetransferOAStp, setDatetransferOAStp] = useState("");
  const [PersontransferedtoOAStp, setPersontransferedtoOAStp] = useState("");
  const [mannertransferdOIStp, setMannertransferdOIStp] = useState("");
  const [PricepaidOAStp, setPricepaidOAStp] = useState("");
  const [creditorOLStp, setCreditorOLStp] = useState("");
  const [LiabilitytypeOLStp, setLiabilitytypeOLStp] = useState("");
  const [AmountOLStp, setAmountOLStp] = useState("");
  const [DateOLStp, setDateOLStp] = useState("");
  //spouse trandfared property

  // children declaration form
  const [DescriptionTypeIPCdf, setDescriptionTypeIPCdf] = useState("");
  const [PropertyIdIPCdf, setPropertyIdIPCdf] = useState("");
  const [PlotSizeIPCdf, setPlotSizeIPCdf] = useState("");
  const [LocationIPCdf, setLocationIPCdf] = useState("");
  const [MannerOfPurchaseChangeIPCdf, setMannerOfPurchaseChangeIPCdf] =
    useState("");
  const [RelationshipToDeclarantIPJOCdf, setRelationshipToDeclarantIPJOCdf] =
    useState("");
  const [ValueIPJOCdf, setValueIPJOCdf] = useState("");

  const [TyprOfMakeMACdf, setTyprOfMakeMACdf] = useState("");
  const [RegistrationNumberMACdf, setRegistrationNumberMACdf] = useState("");
  const [PurchasedValueMACdf, setPurchasedValueMACdf] = useState("");
  const [ValueMACdf, setValueMACdf] = useState("");
  const [AcquisitionDateChangeCdf, setAcquisitionDateChangeCdf] = useState("");
  const [AquisitionDateMAADCdf, setAquisitionDateMAADCdf] = useState("");
  const [SourceFinanceMACdf, setSourceFinanceMACdf] = useState("");
  const [AcquiredFormMACdf, setAcquiredFormMACdf] = useState("");

  const [TypeMakeMAJOCdf, setTypeMakeMAJOCdf] = useState("");
  const [RegNumberMAJOCdf, setRegNumberMAJOCdf] = useState("");
  const [PurchasedValueMAJOCdf, setPurchasedValueMAJOCdf] = useState("");
  const [ValueMAJOCdf, setValueMAJOCdf] = useState("");
  const [AquisitionDateMAJOADCdf, setAquisitionDateMAJOADCdf] = useState("");
  const [SourceOfIncomeMAJOCdf, setSourceOfIncomeMAJOCdf] = useState("");
  const [AcquiredFromMAJOCdf, setAcquiredFromMAJOCdf] = useState("");
  const [PartnerMAJOCdf, setPartnerMAJOCdf] = useState("");

  const [BankCCdf, setBankCCdf] = useState("");
  const [AccountHolderCCdf, setAccountHolderCCdf] = useState("");
  const [AccountNumberCCdf, setAccountNumberCCdf] = useState("");
  const [AmountCCdf, setAmountCCdf] = useState("");
  const [CurrencyCCdf, setCurrencyCCdf] = useState("");
  const [SourceFundsCCdf, setSourceFundsCCdf] = useState("");

  const [DescriptionOACdf, setDescriptionOACdf] = useState("");
  const [CostOACdf, setCostOACdf] = useState("");
  const [acquisitionDateOAADCdf, setacquisitionDateOAADCdf] = useState("");
  const [SourceFinanceOACdf, setSourceFinanceOACdf] = useState("");
  const [RegistrationOwerOACdf, setRegistrationOwerOACdf] = useState("");

  const [ShareCertificateNumberOICdf, setShareCertificateNumberOICdf] =
    useState("");
  const [PurchasePriceOICdf, setPurchasePriceOICdf] = useState("");
  const [NumberOfSharesOICdf, setNumberOfSharesOICdf] = useState("");
  const [acquisitionDateOIADCdf, setAcquisitionDateOIADCdf] = useState("");
  const [SourceOfFinanceOICdf, setSourceOfFinanceOICdf] = useState("");
  const [ValueOICdf, setValueOICdf] = useState("");
  //children declaration form

  // children transfared property form
  const [descriptiontypeCtp, setDescriptiontypeCtp] = useState("");
  const [propertyidCtp, setPropertyidCtp] = useState("");
  const [plotsizeCtp, setPlotsizeCtp] = useState("");
  const [LocationCtp, setLocationCtp] = useState("");
  const [MannerpurchaseIPCtp, setMannerpurchaseIPCtp] = useState("");
  const [DateoftransferCtp, setDateoftransferCtp] = useState("");
  const [TransferedtoCtp, setTransferedtoCtp] = useState("");
  const [TypemakeMACtp, setTypemakeMACtp] = useState("");
  const [RegNumberCtp, setRegNumberCtp] = useState("");
  const [DatetransferedCtp, setDatetransferedCtp] = useState("");
  const [MannertransferDTCtp, setMannertransferDTCtp] = useState("");
  const [PersontransferedtoDTCtp, setPersontransferedtoDTCtp] = useState("");
  const [AmounttransferedCtp, setAmounttransferedCtp] = useState("");
  const [DateoftransfertwoCtp, setDateoftransfertwoCtp] = useState("");
  const [PersontransferedtoCSCtp, setPersontransferedtoCSCtp] = useState("");
  const [MannertransferCSCtp, setMannertransferCSCtp] = useState("");
  const [CurrencyCSCtp, setCurrencyCSCtp] = useState("");
  const [SourcefundsCSCtp, setSourcefundsCSCtp] = useState("");
  const [CertificatenumberOICtp, setCertificatenumberOICtp] = useState("");
  const [DatetransferOICtp, setDatetransferOICtp] = useState("");
  const [PersontransferedOICtp, setPersontransferedOICtp] = useState("");
  const [MannertransferOICtp, setMannertransferOICtp] = useState("");
  const [PricepaidOCtp, setPricepaidOCtp] = useState("");
  const [DescriptionOACtp, setDescriptionOACtp] = useState("");
  const [DatetransferOACtp, setDatetransferOACtp] = useState("");
  const [PersontransferedtoOACtp, setPersontransferedtoOACtp] = useState("");
  const [mannertransferToOACtp, setMannertransferToOACtp] = useState("");
  const [PricepaidOACtp, setPricepaidOACtp] = useState("");
  const [creditorOLCtp, setCreditorOLCtp] = useState("");
  const [LiabilitytypeOLCtp, setLiabilitytypeOLCtp] = useState("");
  const [AmountOLCtp, setAmountOLCtp] = useState("");
  const [DateOLCtp, setDateOLCtp] = useState("");
  const [PlotsizeIPCtp, setPlotsizeIPCtp] = useState("");
  const [LocationIPCtp, setLocationIPCtp] = useState("");
  //children transfared property

  // oath
  const [oathName, setOathName] = useState();
  const [imageURL, setImageURL] = useState(null);

  //firebase variables
  const app = initializeApp(firebaseConfig)
 
  const uId = currentUid()

  const db = getFirestore()
    const declarationRef = doc(db,'declarations','/','declares')
    const ref = collection(declarationRef, uId)

    const submitDeclaration= async () => {
    try{
      await addDoc(ref,{
          status:'Pending',
          lastName:declareSurname,
          firstName:declareFirstName,
          dateOfBirth:declareDoB,
          placeOfBirth:declarePoB,
          idNumber:declareIdNum,
          citizenShip: declareCitizen,
          maritalStatus:declareMarritalStatus,
          physicalAddress:declarePhysicalAddress,
          postalAddress:declarePostalAddress,
          number:declareContact,
          jobTitle:declarePostion,
          appointment:declareCurrentAppointment,
          employerName:declareEmployerName,
          jobNature:declareEmployementNature,
          salary:declareSalary,
          allowance:declareAllowance,
          incomeSource:declareSourceOfIncome,
          bank: declareRank,
          lastAppointmentDate: {
            from: declareFromLastAppointment,
            to:declareToLastAppointment,
            taxId:declareTaxId 
          },
          propertyInfo:{
            type:typeIp,
            id:propertyidIP,
            plotSize:plotsizeIP,
            location:locationIP,
            mannerOfPurchase: mannerpurchaseIP,
            purchaseLoc:purchaseLocationIP,
            joint:jointRadio,
            declarantRelation:relodeclarantIP,
            declarantRelationValue:relodeclavalueIPrantIP,
            maType: typemakeMA,
            maRegNum:regNumberMA,
            maValue:value2MA,
            dateAd:aquisitiondateAD,
            currentStatus:activeRadio,
            sourceOfFinanceAD:sourcefinanceAD,
            aquiredFromAd:acquiredfromAD,
            moType:typemakejoMO,
            moRegNum:regNumberjoMO,
            moValue:value2MO,
            moDate: aquisitiondateMO,
            moStatus: activeRadioMO,
            moFinanceSource: sourcefinanceMO,
            moAquiredFrom:acquiredfromMO,
            moPartner:partnerMO,
            cBank: bankC,
            moAccountHolder:accountholderMO,
            moAccNum:accountnumberMO,
            cashAmount: amount2C,
            cashCurrency: currencyC,
            sourceOfCash:sourcefundsC,
            oaDescription:descriptionOA,
            oaCost:costOA,
            oaDate:acquisitiondateOA,
            oaStatus: activeRadioAO,
            oaFinanceSource:sourceFinanceAO,
            oaRegOwner:registeredownerAO,
            certificateNum:sharecertificatenumberOI,
            purchasePrice:purchasepriceOI,
            sharesAo:numberofsharesIO,
            aoStatus:activeRadioIO,
            aoDate:activeRadioIO,
            financeSource:sourcefinanceIO,
            aoValue:valueIO
          }
      }).then(() => console.log('declaration sent'))

  }catch(error){
      console.error("Error reading document ",error)
  }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        padding: 5,
        flex: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "500%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label={<Typography variant="h6">INTRO</Typography>}
          {...a11yProps(0)}
        />
        <Tab
          label={<Typography variant="h6">Personal Information </Typography>}
          {...a11yProps(1)}
        />
        <Tab
          label={<Typography variant="h6">Declarant Property Info </Typography>}
          {...a11yProps(2)}
        />
        <Tab
          label={<Typography variant="h7">Transferable Property </Typography>}
          {...a11yProps(3)}
        />
        <Tab
          label={<Typography variant="h6">Spouse Property Info </Typography>}
          {...a11yProps(4)}
        />
        <Tab
          label={<Typography variant="h7">Transferable Property </Typography>}
          {...a11yProps(5)}
        />
        <Tab
          label={
            <Typography variant="h6">
              Children/Dependents Property Info{" "}
            </Typography>
          }
          {...a11yProps(6)}
        />
        <Tab
          label={<Typography variant="h7">Transferable Property </Typography>}
          {...a11yProps(7)}
        />
        <Tab
          label={<Typography variant="h6">Finish</Typography>}
          {...a11yProps(8)}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Intro />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Declaration
          setDeclareSurname={setDeclareSurname}
          setDeclareFirstName={setDeclareFirstName}
          setDeclareDoB={setDeclareDoB}
          setDeclarePoB={setDeclarePoB}
          setDeclareIdNum={setDeclareIdNum}
          setDeclareCitizen={setDeclareCitizen}
          setDeclareMarritalStatus={setDeclareMarritalStatus}
          setDeclarePhysicalAddress={setDeclarePhysicalAddress}
          setDeclarePostalAddress={setDeclarePostalAddress}
          setdeclareContact={setdeclareContact}
          setdeclarePostion={setdeclarePostion}
          setDeclareCurrentAppointment={setDeclareCurrentAppointment}
          setDeclareEmployerName={setDeclareEmployerName}
          setDeclareEmployementNature={setDeclareEmployementNature}
          setDeclareSalary={setDeclareSalary}
          setDeclareAllowance={setDeclareAllowance}
          setDeclareSourceOfIncome={setDeclareSourceOfIncome}
          setDeclareRank={setDeclareRank}
          setDeclareFromLastAppointment={setDeclareFromLastAppointment}
          setDeclareToLastAppointment={setDeclareToLastAppointment}
          setDeclareTaxId={setDeclareTaxId}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Property
          setTypeIp={setTypeIp}
          setPropertyidIP={setPropertyidIP}
          setPlotsizeIP={setPlotsizeIP}
          setLocationIP={setLocationIP}
          setMannerpurchaseIP={setMannerpurchaseIP}
          setpurchaseLocationIP={setpurchaseLocationIP}
          setJointRadio={setJointRadio}
          setRelodeclarantIP={setRelodeclarantIP}
          setValueIP={setValueIP}
          setTypemakeMA={setTypemakeMA}
          setRegNumberMA={setRegNumberMA}
          setValue2MA={setValue2MA}
          setAquisitiondateAD={setAquisitiondateAD}
          setActiveRadio={setActiveRadio}
          setSourcefinanceAD={setSourcefinanceAD}
          setAcquiredfromAD={setAcquiredfromAD}
          setTypemakejoMO={setTypemakejoMO}
          setRegNumberjoMO={setRegNumberjoMO}
          setValue2MO={setValue2MO}
          setAquisitiondateMO={setAquisitiondateMO}
          setActiveRadioMO={setActiveRadioMO}
          setSourcefinanceMO={setSourcefinanceMO}
          setAcquiredfromMO={setAcquiredfromMO}
          setPartnerMO={setPartnerMO}
          setBankC={setBankC}
          setAccountholderMO={setAccountholderMO}
          setAccountnumberMO={setAccountnumberMO}
          setAmount2C={setAmount2C}
          setCurrencyC={setCurrencyC}
          setSourcefundsC={setSourcefundsC}
          setDescriptionOA={setDescriptionOA}
          setCostOA={setCostOA}
          setAcquisitiondateOA={setAcquisitiondateOA}
          setActiveRadioAO={setActiveRadioAO}
          setSourceFinanceAO={setSourceFinanceAO}
          setRegisteredownerAO={setRegisteredownerAO}
          setSharecertificatenumberOI={setSharecertificatenumberOI}
          setPurchasepriceOI={setPurchasepriceOI}
          setNumberofsharesIO={setNumberofsharesIO}
          setActiveRadioIO={setActiveRadioIO}
          setAcquisitiondateIO={setAcquisitiondateIO}
          setSourcefinanceIO={setSourcefinanceIO}
          setvalueIO={setvalueIO}
          jointRadio={jointRadio}
          activeRadio={activeRadio}
          activeRadioAO={activeRadioAO}
          activeRadioIO={activeRadioIO}
          activeRadioMO={activeRadioMO}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Transfered
          setDescriptiontypeTP={setDescriptiontypeTP}
          setPropertyidTP={setPropertyidTP}
          setPlotsizeTP={setPlotsizeTP}
          setLocationTP={setLocationTP}
          setMannerpurchaseIPTP={setMannerpurchaseIPTP}
          setDateoftransferTP={setDateoftransferTP}
          setTransferedtoTP={setTransferedtoTP}
          setTypemakeMATP={setTypemakeMATP}
          setRegNumberTP={setRegNumberTP}
          setDatetransferedTP={setDatetransferedTP}
          setMannertransferDTTP={setMannertransferDTTP}
          setPersontransferedtoDTTP={setPersontransferedtoDTTP}
          setAmounttransferedTP={setAmounttransferedTP}
          setDateoftransfertwoTP={setDateoftransfertwoTP}
          setPersontransferedtoCSTP={setPersontransferedtoCSTP}
          setMannertransferCSTP={setMannertransferCSTP}
          setCurrencyCSTP={setCurrencyCSTP}
          setSourcefundsCSTP={setSourcefundsCSTP}
          setCertificatenumberOITP={setCertificatenumberOITP}
          setDatetransferOITP={setDatetransferOITP}
          setPersontransferedOITP={setPersontransferedOITP}
          setMannertransferOITP={setMannertransferOITP}
          setPricepaidOTP={setPricepaidOTP}
          setDescriptionOATP={setDescriptionOATP}
          setDatetransferOATP={setDatetransferOATP}
          setPersontransferedtoOATP={setPersontransferedtoOATP}
          setMannertransferOATP={setMannertransferOATP}
          setPricepaidOATP={setPricepaidOATP}
          setCreditorOLTP={setCreditorOLTP}
          setLiabilitytypeOLTP={setLiabilitytypeOLTP}
          setAmountOLTP={setAmountOLTP}
          setDateOLTP={setDateOLTP}
          setPlotsizeIPTP={setPlotsizeIPTP}
          setLocationIPTP={setLocationIPTP}
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SpouseDeclarationForm
          setDescriptiontypeISPSD={setDescriptiontypeISPSD}
          setPropertyIdIPSD={setPropertyIdIPSD}
          setPlotsizeIPSD={setPlotsizeIPSD}
          setLocationIPSD={setLocationIPSD}
          setManneraquisitionIPSD={setManneraquisitionIPSD}
          setCoownerNameIPSD={setCoownerNameIPSD}
          setCoownerIdIPSD={setCoownerIdIPSD}
          setAssetValueIPSD={setAssetValueIPSD}
          setReloDeclarantIPSD={setReloDeclarantIPSD}
          setTypemakeMASD={setTypemakeMASD}
          setRegNumberMASD={setRegNumberMASD}
          setPurchaseValueMASD={setPurchaseValueMASD}
          setCurrentValueMASD={setCurrentValueMASD}
          setAquisitionDateMASD={setAquisitionDateMASD}
          setSourceOfFinanceMASD={setSourceOfFinanceMASD}
          setPartnerMASD={setPartnerMASD}
          setBankCSD={setBankCSD}
          setAccHolderCSD={setAccHolderCSD}
          setAccTypeCSD={setAccTypeCSD}
          setAccNumberCSD={setAccNumberCSD}
          setAmountCSD={setAmountCSD}
          setCurrencyCSD={setCurrencyCSD}
          setSourceOfFundsCSD={setSourceOfFundsCSD}
          setDescriptionOASD={setDescriptionOASD}
          setCostOASD={setCostOASD}
          setAcquisitiondateOASD={setAcquisitiondateOASD}
          setSourceFinanceOASD={setSourceFinanceOASD}
          setRegisteredownerOASD={setRegisteredownerOASD}
          setSharecertificatenumberOISD={setSharecertificatenumberOISD}
          setPurchasepriceOISD={setPurchasepriceOISD}
        />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SpouseTransferedProperty
          setDescriptiontypeStp={setDescriptiontypeStp}
          setPropertyidStp={setPropertyidStp}
          setPlotsizeStp={setPlotsizeStp}
          setLocationStp={setLocationStp}
          setMannerpurchaseIPStp={setMannerpurchaseIPStp}
          setDateoftransferStp={setDateoftransferStp}
          setTransferedtoStp={setTransferedtoStp}
          setTypemakeMAStp={setTypemakeMAStp}
          setRegNumberStp={setRegNumberStp}
          setDatetransferedStp={setDatetransferedStp}
          setMannertransferDTStp={setMannertransferDTStp}
          setPersontransferedtoDTStp={setPersontransferedtoDTStp}
          setAmounttransferedStp={setAmounttransferedStp}
          setDateoftransfertwoStp={setDateoftransfertwoStp}
          setPersontransferedtoCSStp={setPersontransferedtoCSStp}
          setMannertransferCSStp={setMannertransferCSStp}
          setCurrencyCSStp={setCurrencyCSStp}
          setSourcefundsCSStp={setSourcefundsCSStp}
          setCertificatenumberOIStp={setCertificatenumberOIStp}
          setDatetransferOIStp={setDatetransferOIStp}
          setPersontransferedOIStp={setPersontransferedOIStp}
          setMannertransferOIStp={setMannertransferOIStp}
          setPricepaidOStp={setPricepaidOStp}
          setDescriptionOAStp={setDescriptionOAStp}
          setDatetransferOAStp={setDatetransferOAStp}
          setPersontransferedtoOAStp={setPersontransferedtoOAStp}
          setMannertransferdOIStp={setMannertransferdOIStp}
          setPricepaidOAStp={setPricepaidOAStp}
          setCreditorOLStp={setCreditorOLStp}
          setLiabilitytypeOLStp={setLiabilitytypeOLStp}
          setAmountOLStp={setAmountOLStp}
          setDateOLStp={setDateOLStp}
        />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ChildrenDeclarationForm
          setDescriptionTypeIPCdf={setDescriptionTypeIPCdf}
          setPropertyIdIPCdf={setPropertyIdIPCdf}
          setPlotSizeIPCdf={setPlotSizeIPCdf}
          setLocationIPCdf={setLocationIPCdf}
          setMannerOfPurchaseChangeIPCdf={setMannerOfPurchaseChangeIPCdf}
          setRelationshipToDeclarantIPJOCdf={setRelationshipToDeclarantIPJOCdf}
          setValueIPJOCdf={setValueIPJOCdf}
          setTyprOfMakeMACdf={setTyprOfMakeMACdf}
          setRegistrationNumberMACdf={setRegistrationNumberMACdf}
          setPurchasedValueMACdf={setPurchasedValueMACdf}
          setValueMACdf={setValueMACdf}
          setAcquisitionDateChangeCdf={setAcquisitionDateChangeCdf}
          setAquisitionDateMAADCdf={setAquisitionDateMAADCdf}
          setSourceFinanceMACdf={setSourceFinanceMACdf}
          setAcquiredFormMACdf={setAcquiredFormMACdf}
          setTypeMakeMAJOCdf={setTypeMakeMAJOCdf}
          setRegNumberMAJOCdf={setRegNumberMAJOCdf}
          setPurchasedValueMAJOCdf={setPurchasedValueMAJOCdf}
          setValueMAJOCdf={setValueMAJOCdf}
          setAquisitionDateMAJOADCdf={setAquisitionDateMAJOADCdf}
          setSourceOfIncomeMAJOCdf={setSourceOfIncomeMAJOCdf}
          setAcquiredFromMAJOCdf={setAcquiredFromMAJOCdf}
          setPartnerMAJOCdf={setPartnerMAJOCdf}
          setBankCCdf={setBankCCdf}
          setAccountHolderCCdf={setAccountHolderCCdf}
          setAccountNumberCCdf={setAccountNumberCCdf}
          setAmountCCdf={setAmountCCdf}
          setCurrencyCCdf={setCurrencyCCdf}
          setSourceFundsCCdf={setSourceFundsCCdf}
          setDescriptionOACdf={setDescriptionOACdf}
          setCostOACdf={setCostOACdf}
          setacquisitionDateOAADCdf={setacquisitionDateOAADCdf}
          setSourceFinanceOACdf={setSourceFinanceOACdf}
          setRegistrationOwerOACdf={setRegistrationOwerOACdf}
          setShareCertificateNumberOICdf={setShareCertificateNumberOICdf}
          setPurchasePriceOICdf={setPurchasePriceOICdf}
          setNumberOfSharesOICdf={setNumberOfSharesOICdf}
          setAcquisitionDateOIADCdf={setAcquisitionDateOIADCdf}
          setSourceOfFinanceOICdf={setSourceOfFinanceOICdf}
          setValueOICdf={setValueOICdf}
        />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <ChildrenTransferedProperty
          setDescriptiontypeCtp={setDescriptiontypeCtp}
          setPropertyidCtp={setPropertyidCtp}
          setPlotsizeCtp={setPlotsizeCtp}
          setLocationCtp={setLocationCtp}
          setMannerpurchaseIPCtp={setMannerpurchaseIPCtp}
          setDateoftransferCtp={setTransferedtoCtp}
          setTransferedtoCtp={setTransferedtoCtp}
          setTypemakeMACtp={setTypemakeMACtp}
          setRegNumberCtp={setRegNumberCtp}
          setDatetransferedCtp={setDatetransferedCtp}
          setMannertransferDTCtp={setMannertransferDTCtp}
          setPersontransferedtoDTCtp={setPersontransferedtoDTCtp}
          setAmounttransferedCtp={setAmounttransferedCtp}
          setDateoftransfertwoCtp={setDateoftransfertwoCtp}
          setPersontransferedtoCSCtp={setPersontransferedtoCSCtp}
          setMannertransferCSCtp={setMannertransferCSCtp}
          setCurrencyCSCtp={setCurrencyCSCtp}
          setSourcefundsCSCtp={setSourcefundsCSCtp}
          setCertificatenumberOICtp={setCertificatenumberOICtp}
          setDatetransferOICtp={setDatetransferOICtp}
          setPersontransferedOICtp={setPersontransferedOICtp}
          setMannertransferOICtp={setMannertransferOICtp}
          setPricepaidOCtp={setPricepaidOCtp}
          setDescriptionOACtp={setDescriptionOACtp}
          setDatetransferOACtp={setDatetransferOACtp}
          setPersontransferedtoOACtp={setPersontransferedtoOACtp}
          setMannertransferToOACtp={setMannertransferToOACtp}
          setPricepaidOACtp={setPricepaidOACtp}
          setCreditorOLCtp={setCreditorOLCtp}
          setLiabilitytypeOLCtp={setLiabilitytypeOLCtp}
          setAmountOLCtp={setAmountOLCtp}
          setDateOLCtp={setDateOLCtp}
          setPlotsizeIPCtp={setPlotsizeIPCtp}
          setLocationIPCtp={setLocationIPCtp}
        />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Oath
          setOathName={setOathName}
          setImageURL={setImageURL}
          imageURL={imageURL}
          submitDeclaration={submitDeclaration}
        />
      </TabPanel>
    </Box>
  );
}
