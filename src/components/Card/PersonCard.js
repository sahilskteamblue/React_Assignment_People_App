import React from "react";
import CardIconText from "./CardIconText";
import CardImage from "./CardImage";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import CardActions from "./CardActions";

const PersonCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <CardImage Image={props.person.image} />
        </div>
        <div className="card-body">
          <h3>{props.person.name}</h3>

          <CardIconText icon={<MailOutlined />} text={props.person.email} />
          <CardIconText icon={<PhoneOutlined />} text={props.person.contact} />
          <CardIconText icon={<GlobalOutlined />} text={props.person.website} />
        </div>
        <div className="card-actions">
          <CardActions />
        </div>
      </div>
    </>
  );
};

export default PersonCard;
