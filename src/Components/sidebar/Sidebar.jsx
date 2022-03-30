import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { currentUserName } from "../../Firebase/firebaseFunctions";
import { logOut } from "../../Firebase/firebaseFunctions";

export default function Sidebar() {
  const name = currentUserName()
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <h4>Welcome {name}</h4>
          <ul className="sidebarList">

            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>

            <Link to="/apply" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Declaration
            </li>
            </Link>
            <Button onClick={logOut}>Logout</Button>
          </ul>
        </div>
 
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
