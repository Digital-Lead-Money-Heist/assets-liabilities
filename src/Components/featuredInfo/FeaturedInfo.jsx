import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo(props) {
  const {approved} = props
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Approved Declarations</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">0</span>
          {/* <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>*/}
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div> 
      <div className="featuredItem">
        <span className="featuredTitle">Pending Declarations</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{approved}</span>
          {/* <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>*/}
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div> 
      <div className="featuredItem">
        <span className="featuredTitle">Next Declaration</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">365 Days</span>
          {/* <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>*/}
        </div>
        {/* <span className="featuredSub">Compared to last month</span>  */}
      </div>
    </div>
  );
}
