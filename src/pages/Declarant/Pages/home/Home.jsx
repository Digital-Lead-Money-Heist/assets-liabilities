

import "./home.css";
import { userData } from "../../dummyData";
import Chart from "../../../../Components/chart/Chart";
import FeaturedInfo from "../../../../Components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../../../Components/widgetLg/WidgetLg";
import WidgetSm from "../../../../Components/widgetSm/WidgetSm";
import Button from '@mui/material/Button';
import {getAuth} from "firebase/auth";

export default function Home() {
  const signOut = () => {
    const auth = getAuth();
    auth.signOut();
}
  return (
    <div className="home">
      <FeaturedInfo />

      <div className="homeWidgets">
        <WidgetLg/>
      </div>
    </div>
  );
}
