import React from "react";
import PersonCard from "../components/Assignment2/Card/PersonCard";
import { people } from "../data/people_data";

import classes from "../components/Assignment2/Card/Card.module.css";

const Assignment2 = () => {
  return (
    <>
      {people.map((person) => (
        <div key={person.id} className={classes.column}>
          <PersonCard person={person} />
        </div>
      ))}
    </>
  );
};

export default Assignment2;
