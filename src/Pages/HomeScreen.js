import React from "react";
import PersonCard from "../components/Card/PersonCard";
import { people } from "../data/people_data";

const HomeScreen = () => {
  return (
    <>
      <div className="row">
        {people.map((person) => (
          <div key={person.id} className="column">
            <PersonCard person={person} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
