import React, { useState } from "react";
import PersonCard from "../components/Card/PersonCard";
import { people } from "../data/people_data";
import classes from "../components/Card/Card.module.css";

const HomeScreen = () => {
  const [peopleData, setPeopleData] = useState(people);

  // Function to update people list on delete
  const dropPerson = (id) => {
    setPeopleData(peopleData.filter((item) => item.id !== +id));
  };

  return (
    <>
      <div className={classes.row}>
        {peopleData.length === 0 ? (
          <>
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </>
        ) : (
          peopleData.map((person) => (
            <div key={person.id} className={classes.column}>
              <PersonCard person={person} dropPerson={dropPerson} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default HomeScreen;
