import React from "react";
import "./topbar.css";
import NotificationsNone from '@mui/icons-material/AccessAlarm';
import Language from '@mui/icons-material/Language';
import Settings from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from './logo.png'
import propic from './Kk18.png'

import { getAuth } from "firebase/auth";
import { auth } from "../../Firebase/firebaseFunctions";

export default function Topbar() {
  // const app = initializeApp(firebaseConfig);
  const signOut = () => {
    const auth = getAuth();
    auth.signOut();
  };

  const url = auth?.currentUser?.photoURL
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img src={Logo} alt="" />
            <p>Ministry for Presidential Affairs, Governance and Public Administration</p> 
          </span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div> */}
          <div className="topbarIconContainer">
            <LogoutIcon onClick={signOut}/>
          </div>
          {/* <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <img src={url} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
