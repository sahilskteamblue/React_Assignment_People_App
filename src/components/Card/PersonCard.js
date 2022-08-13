import React, { useState, useEffect } from "react";
import CardIconText from "./CardIconText";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import CardActions from "./CardActions";
import FormModal from "../Form/FormModal";
import classes from "./Card.module.css";

const PersonCard = (props) => {
  const [name, setName] = useState(props.person.name);
  const [email, setEmail] = useState(props.person.email);
  const [phone, setPhone] = useState(props.person.phone);
  const [website, setWebsite] = useState(props.person.website);

  const [isEditClicked, setisEditClicked] = useState(false);

  const onEditClicked = (value) => {
    setisEditClicked(value);
  };

  const onDeleteClicked = (id) => {
    props.dropPerson(id);
  };

  const onOkClicked = (newData) => {
    const [newname, newemail, newphone, newwebsite] = [...newData];

    if (name !== newname) {
      setName(newname);
    }
    if (email !== newemail) {
      setEmail(newemail);
    }
    if (phone !== newphone) {
      setPhone(newphone);
    }
    if (website !== newwebsite) {
      setWebsite(newwebsite);
    }
    setisEditClicked(false);
  };

  useEffect(() => {}, [isEditClicked]);
  return (
    <>
      {isEditClicked && (
        <FormModal
          name={name}
          email={email}
          phone={phone}
          website={website}
          onEditClicked={onEditClicked}
          onOkClicked={onOkClicked}
        />
      )}
      <div className={classes.card}>
        <div className={classes["card-header"]}>
          <img
            src={props.person.image}
            alt="Avatar"
            width="200px"
            height="200px"
          ></img>
        </div>
        <div className={classes["card-body"]}>
          <h3>{name}</h3>

          <CardIconText icon={<MailOutlined />} text={email} />
          <CardIconText icon={<PhoneOutlined />} text={phone} />
          <CardIconText icon={<GlobalOutlined />} text={website} />
        </div>
        <div className={classes["card-actions"]}>
          <CardActions
            id={props.person.id}
            onEditClicked={onEditClicked}
            onDeleteClicked={onDeleteClicked}
          />
        </div>
      </div>
    </>
  );
};

export default PersonCard;
