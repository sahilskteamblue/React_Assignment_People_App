import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import RequiredStar from "./RequiredStar";
import classes from "./FormModal.module.css";

const FormModal = (props) => {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  const [website, setWebsite] = useState(props.website);

  // Function to pass the data to card which is updated on form modal.
  const submitHandler = (e) => {
    e.preventDefault();
    props.onOkClicked([name, email, phone, website]);
  };

  // Function to close the form modal on clicked cancel.
  const onCancelHandler = () => {
    props.onEditClicked(false);
  };

  return (
    <>
      <div className={classes["modal-backdrop"]}>
        <div
          className={classes["modal-form"]}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={classes.container}>
            <div className={classes["modal-header"]}>
              <span className={classes["modal-title"]}>Basic Modal</span>
              <span className={classes.close} onClick={onCancelHandler}>
                <CloseOutlined />
              </span>
            </div>
            <hr />
            <form onSubmit={submitHandler}>
              <div className={classes["modal-content"]}>
                <div className={classes.row}>
                  <div className={classes["col-25"]}>
                    <label htmlFor="name">
                      <RequiredStar />
                      Name:
                    </label>
                  </div>
                  <div className={classes["col-75"]}>
                    <input
                      type="text"
                      id="name"
                      title="Name"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className={classes.row}>
                  <div className={classes["col-25"]}>
                    <label htmlFor="email">
                      <RequiredStar />
                      Email:
                    </label>
                  </div>
                  <div className={classes["col-75"]}>
                    <input
                      type="email"
                      id="email"
                      title="Email"
                      value={email}
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className={classes.row}>
                  <div className={classes["col-25"]}>
                    <label htmlFor="phone">
                      <RequiredStar />
                      Phone:
                    </label>
                  </div>
                  <div className={classes["col-75"]}>
                    <input
                      type="text"
                      id="phone"
                      title="Phone"
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className={classes.row}>
                  <div className={classes["col-25"]}>
                    <label htmlFor="website">
                      <RequiredStar />
                      Website:
                    </label>
                  </div>
                  <div className={classes["col-75"]}>
                    <input
                      type="text"
                      id="website"
                      title="Website"
                      value={website}
                      pattern="http(s?)(:\/\/)((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)([a-zA-Z])(\/[^\s]*)?"
                      required
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className={classes.row}>
                <button
                  type="submit"
                  className={`${classes.btn} ${classes["btn-primary"]} ${classes["btn-right"]}`}
                >
                  <span>OK</span>
                </button>
                <button
                  type="button"
                  onClick={onCancelHandler}
                  className={`${classes.btn} ${classes["btn-right"]}`}
                >
                  <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormModal;
