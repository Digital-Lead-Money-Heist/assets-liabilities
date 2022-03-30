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
    { name: "Declaration 4", date: "2 Jun 2021", type: "Approved" },
    { name: "Declaration 2", date: "2 Jun 2021", type: "Declined" },
    { name: "Declaration 3", date: "2 Jun 2021", type: "Pending" },
  ];

  const [declarations, setDeclarations] = useState([]);
  const [userId, setUserId] = useState()
  
  const auth = getAuth()
  auth.onAuthStateChanged((user) => {
    console.log(user.uid)
    setUserId(user.uid)
  });

  const {
    data: userData,
    mutate: mutateUserId,
    isError: mutateGetError,
  } = useMutation("getUser", getdeclarations, { retry: 2 });

  const itemList = [];
  
let id
  useEffect(() => {
     id = 'dLUa5xtDdzZiQ3zXFhOIyA1FQxS2'
    if(userData){
        setDeclarations(userData)
    }else{
      
      mutateUserId(id)
    }

  }, [userData,id]);



  console.log("data ", declarations);
  
  initState.forEach((item) => {
    itemList.push(
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <span className="widgetLgName">{item.jobNature}</span>
        </td>
        <td className="widgetLgDate">{item.firstName}</td>
        <td className="widgetLgStatus">
          <Button type={item.bank} />
        </td>
      </tr>
    );
  });

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Your Declarations</h3>
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
        {declarations.map(
          ({ allowance, firstName, jobNature, appointment }) => {
            <div key={allowance}>
              <tr className="widgetLgTr" >
              <td className="widgetLgUser">
                <span className="widgetLgName">{firstName}</span>
              </td>
              <td className="widgetLgDate">{jobNature}</td>
              <td className="widgetLgStatus">
                <Button type={appointment} />
              </td>
            </tr>
            </div>
            ;
          }
        )}
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
