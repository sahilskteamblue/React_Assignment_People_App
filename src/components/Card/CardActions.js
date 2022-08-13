import React, { useState } from "react";
import {
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteFilled,
} from "@ant-design/icons";

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
          <button className="invisible-btn" onClick={changeHeartHandler}>
            {isHeartClicked ? (
              <HeartFilled style={heartColorStyle} />
            ) : (
              <HeartOutlined style={heartColorStyle} />
            )}
          </button>
        </li>
        <li className="anticon-hover-blue ">
          <button className="invisible-btn" onClick={onEditClickHandler}>
            <EditOutlined />
          </button>
        </li>

        <li className="anticon-hover-blue " id={props.id}>
          <button className="invisible-btn" onClick={onDeleteClickHandler}>
            <DeleteFilled />
          </button>
        </li>
      </ul>
    </>
  );
};

export default CardActions;
