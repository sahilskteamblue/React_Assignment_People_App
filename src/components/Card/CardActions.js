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

  const onEditClickHandler = () => {
    setisEditClicked(true);
    sendEditClickedValue();
  };

  const sendEditClickedValue = () => {
    props.onEditClicked(isEditClicked);
  };

  const onDeleteClickHandler = (e) => {
    props.onDeleteClicked(e.currentTarget.id);
  };

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
            id={props.id}
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
