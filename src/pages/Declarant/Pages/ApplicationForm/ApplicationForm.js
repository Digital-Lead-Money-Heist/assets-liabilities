import React from "react";

import { Typography } from "@mui/material";
import Stepper from "../../Components/DeclarantForm/FormNav";
import coat from "../../images/coat.png";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../Firebase/config";
import VerticalTabs from "../../../../Components/DeclarantForm/FormNav";

const ApplicationForm = () => {
  const app = initializeApp(firebaseConfig);

  return (
    <div>
      <img
        src={coat}
        style={{ width: "200px", height: "150px", marginLeft: "43%" }}
      />
      <Typography
        style={{ marginLeft: "43%" }}
        variant="h5"
        gutterBottom
        component="div"
      >
        REPUBLIC OF BOTSWANA
      </Typography>
      <Typography
        style={{ marginLeft: "43%" }}
        variant="h7"
        gutterBottom
        component="div"
      >
        DECLARATION OF ASSETS AND LIABILITIES FORM
      </Typography>
        
      <VerticalTabs />
    </div>
  );
};

export default ApplicationForm;
