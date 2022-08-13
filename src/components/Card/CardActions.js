import React from "react";
import {
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteFilled,
} from "@ant-design/icons";

const CardActions = () => {
  const heartColorStyle = {
    color: "#FF0000",
  };

  return (
    <>
      <ul>
        <li>
          <HeartOutlined style={heartColorStyle} />
          {/* <HeartFilled style={heartColorStyle} /> */}
        </li>
        <li>
          <EditOutlined />
        </li>
        <li>
          <DeleteFilled />
        </li>
      </ul>
    </>
  );
};

export default CardActions;
