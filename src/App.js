import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import Array from "./ArrayUsers";
import ErrorModal from "./components/UI/ErrorModal";
import logo from "./images/Ietlogo.png";
import logo2 from "./images/iethublogo.png";
import UserCard2 from "./components/UI/UserCard2";
import "./index.css";

function App() {
  const [UserCard, setUserCard] = useState(null);
  const [start, setStart] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const setUserCardHandler = () => {
    setUserCard(null);
    setStart(false);
  };

  const addUserHandler = (uName, uGradYear) => {
    setStart(true);
    for (let i = 0; i < Array.length; i++) {
      if (
        uName.toLowerCase().includes(Array[i].name.toLowerCase()) &&
        parseInt(uGradYear) === Array[i].gradYear
      ) {
        setUserCard(Array[i]);
        break;
      }
      if (i === Array.length - 1) {
        setError("No matching records found!");
        setMessage("Please check for the accurateness of the filled details");
      }
    }
  };

  return (
    <Fragment>
      <div style={{ display: "flex" }}>
        <img src={logo} className="ietlogo" alt="IET LOGO" />
        <div className="welcomediv" style={{ width: "50vw", margin: "0 auto" }}>
          <h2>IET HUB Membership Card Generator</h2>
          <h3>We are a proud IET-Hub member!</h3>
        </div>
        <img src={logo2} className="iethublogo" alt="IET LOGO"/>
      </div>
      <div className="cardpart">
      {UserCard === null && <AddUser onAddUser={addUserHandler} />}
      {UserCard === null && start && (
        <ErrorModal
          title={error}
          message={message}
          onConfirm={setUserCardHandler}
        />
      )}
      {UserCard !== null && <UserCard2 name={UserCard.name} branch={UserCard.branch} gradYear={UserCard.gradYear} imgg={UserCard.img} member={UserCard.membership} karma={UserCard.karma} qr={UserCard.qr}/> }
      
      </div>
      
    </Fragment>
  );
}

export default App;
