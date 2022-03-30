import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import "./widgetLg.css";
import { getdeclarations, currentUid } from "../../Firebase/firebaseFunctions";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import firebaseConfig from "../../Firebase/config";
import {
  collection,
  doc,
  addDoc,
  getFirestore,
  collectionGroup,
  getDocs,
  onSnapshot,
  getDoc
} from "firebase/firestore";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const initState = [
    { name: "Stillwell Jacob", date: "2022-03-05", type: "Pending" },
    { name: "Stillwell Jacob", date: "2022-03-28", type: "Pending" },
   { name: " stillwell", date: "2022-03-06", type: "Pending" },
  ];

  const [declarations, setDeclarations] = useState([]);
  const [userId, setUserId] = useState()
  
  const auth = getAuth()
  auth.onAuthStateChanged((user) => {
    console.log(user.uid)
    setUserId(user.uid)
  });

  

  const itemList = [];
  
 



  console.log("data ", declarations);
  
  initState.forEach((item) => {
    itemList.push(
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <span className="widgetLgName">{item.name}</span>
        </td>
        <td className="widgetLgDate">{item.date}</td>
        <td className="widgetLgStatus">
          <Button type={item.type} />
        </td>
      </tr>
    );
  });

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Your  Declarations</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Declaration</th>
          <th className="widgetLgTh">Date</th>
          {/* <th className="widgetLgTh">Amount</th> */}
          <th className="widgetLgTh">Status</th>
        </tr>
        {/* Loop through array to display rows */}
        {/* <tr className="widgetLgTr">
          <td className="widgetLgUser">
 
            <span className="widgetLgName">Declaration 1</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr> */}
       {itemList}
        
        {/* <tr className="widgetLgTr">
          <td className="widgetLgUser">

            <span className="widgetLgName">Declaration 2</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>

          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">

            <span className="widgetLgName">Declaration 3</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>

          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">

            <span className="widgetLgName">Declaration 4</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
       
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr> */}
      </table>
    </div>
  );
}
