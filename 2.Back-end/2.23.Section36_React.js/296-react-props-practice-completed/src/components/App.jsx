import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const contactCards = [];
  for (let i = 0; i < contacts.length; i++) {
    contactCards.push(
      <Card
        key={i}
        name={contacts[i].name}
        img={contacts[i].imgURL}
        tel={contacts[i].phone}
        email={contacts[i].email}
      />
    );
  }

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contactCards}
    </div>
  );
}

export default App;
