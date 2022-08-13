import React, { useState } from "react";
import PersonCard from "../components/Card/PersonCard";
import { people } from "../data/people_data";

const HomeScreen = () => {
  const [peopleData, setPeopleData] = useState(people);

  const dropPerson = (id) => {
    console.log(id);
    setPeopleData(peopleData.filter((item) => item.id !== +id));
  };

  return (
    <>
      <div className="row">
        {peopleData.length === 0 ? (
          <>
            <div className="spinner">
              <h2>Loading</h2>
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </>
        ) : (
          peopleData.map((person) => (
            <div key={person.id} className="column">
              <PersonCard person={person} dropPerson={dropPerson} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default HomeScreen;
