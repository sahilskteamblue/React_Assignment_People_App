import React from "react";

import classes from "./Card.module.css";

const PersonCard = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.row}>
            <div className={classes["col-20"]}>
              <img
                src={props.person.image}
                alt="Avatar"
                width="200px"
                height="200px"
              ></img>
            </div>
            <div className={classes["col-80"]}>
              <h2>{props.person.name}</h2>
              <p>
                <strong>Email: </strong>
                {props.person.email}
              </p>
              <p>
                <strong>Phone: </strong>
                {props.person.phone}
              </p>
              <p>
                <strong>Company: </strong>
                {props.person.company}
              </p>
              <p>
                <strong>Website: </strong>
                {props.person.website}
              </p>
              <p>
                <strong>Address: </strong>
                {props.person.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
