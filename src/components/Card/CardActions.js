import React, { useState } from "react";
import {
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteFilled,
} from "@ant-design/icons";

import classes from "./Card.module.css";

const CardActions = (props) => {
  const heartColorStyle = {
    color: "#FF0000",
  };

  const [isEditClicked, setisEditClicked] = useState(true);
  const [isHeartClicked, setisHeartClicked] = useState(false);

  // FUnction to open form modal on clicked edit button of card
  const onEditClickHandler = () => {
    setisEditClicked(true);
    sendEditClickedValue();
  };

  // Function to send edit clicked to value to card component to open/close form modal
  const sendEditClickedValue = () => {
    props.onEditClicked(isEditClicked);
  };

  // Function to send delete clicked value to card component to open/close delete modal.
  const onDeleteClickHandler = (e) => {
    props.onDeleteClicked(true);
  };

  // Function to change liked heart status
  const changeHeartHandler = () => {
    setisHeartClicked((prevstate) => !isHeartClicked);
  };

  return (
    <>
      <ul>
        <li>
          <button
            className={classes["invisible-btn"]}
            onClick={changeHeartHandler}
          >
            {isHeartClicked ? (
              <HeartFilled style={heartColorStyle} />
            ) : (
              <HeartOutlined style={heartColorStyle} />
            )}
          </button>
        </li>
        <li>
          <button
            className={`${classes["invisible-btn"]} anticon-hover-blue`}
            onClick={onEditClickHandler}
          >
            <EditOutlined />
          </button>
        </li>

        <li>
          <button
            className={`${classes["invisible-btn"]} anticon-hover-blue`}
            onClick={onDeleteClickHandler}
          >
            <DeleteFilled />
          </button>
        </li>
      </ul>
    </>
  );
};

export default CardActions;
