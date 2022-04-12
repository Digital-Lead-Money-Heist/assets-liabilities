import React, { useState } from "react";
import "./home.css";
import { userData } from "../../dummyData";
import Chart from "../../../../Components/chart/Chart";
import FeaturedInfo from "../../../../Components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../../../Components/widgetLg/WidgetLg";
import WidgetSm from "../../../../Components/widgetSm/WidgetSm";
import Button from "@mui/material/Button";

export default function Home() {
  const [approved, setApproved] = useState(0);
  const [notApproved, setNotApproved] = useState(0);

  return (
    <div className="home">
      <FeaturedInfo
        approved={approved}
        setApproved={setApproved}
        notApproved={notApproved}
        setNotApproved={setNotApproved}
      />

      <div className="homeWidgets">
        <WidgetLg approved={approved}
        setApproved={setApproved}
        notApproved={notApproved}
        setNotApproved={setNotApproved}/>
      </div>
    </div>
  );
}
