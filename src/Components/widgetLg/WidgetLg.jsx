import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import "./widgetLg.css";
import { getdeclarations, currentUid } from "../../Firebase/firebaseFunctions";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

export default function WidgetLg(props) {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const initState = [
    { name: "Stillwell Jacob", date: "2022-03-05", type: "Pending" },
    { name: "Stillwell Jacob", date: "2022-03-28", type: "Pending" },
   { name: " stillwell", date: "2022-03-06", type: "Pending" },
   { name: " thabo", date: "2022-02-23", type: "Pending" }
  ];

  const [declarations, setDeclarations] = useState([]);
  const [count,setCount] = useState(0)
  
  const {setApproved,approved} = props


  const {
    data: userData,
    mutate: mutateUserId,
    isError: mutateGetError,
  } = useMutation("getUser", getdeclarations, { retry: 2 });

  const itemList = [];
  
let id
let arr= []
  useEffect(() => { 
     id = currentUid()
    if(userData){
        setDeclarations(userData)
        userData.forEach(e => {
          console.log(e.status)
          setApproved(approved+1)
          if(e.status == 'Pending')
          {
            console.log(e.status)
            //setApproved(approved+1)
          }
        })
    }else{
      console.log('no data')
      mutateUserId(id)
    }

  }, [userData,id]);
  
  declarations.map(({idNumber,employerName,appointment,status})=> {
    itemList.push(
      <tr key={idNumber} className="widgetLgTr">
        <td className="widgetLgUser">
          <span className="widgetLgName">{employerName}</span>
        </td>
        <td className="widgetLgDate">{appointment}</td>
        <td className="widgetLgStatus">
          <Button type={status} />
        </td>
      </tr>
    )
  })

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
