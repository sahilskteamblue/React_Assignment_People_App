import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import RequiredStar from "./RequiredStar";

const FormModal = (props) => {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  const [website, setWebsite] = useState(props.website);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onOkClicked([name, email, phone, website]);
  };

  const onCancelHandler = () => {
    props.onEditClicked(false);
  };

  return (
    <>
      <div id="formModal" className="modal-backdrop">
        <div className="modal-form">
          <div className="container">
            <div className="modal-header">
              <span className="modal-title">Basic Modal</span>
              <span className="close" onClick={onCancelHandler}>
                <CloseOutlined />
              </span>
            </div>
            <hr />
            <form onSubmit={submitHandler}>
              <div className="modal-content">
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">
                      <RequiredStar />
                      Name:
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="email">
                      <RequiredStar />
                      Email:
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="phone">
                      <RequiredStar />
                      Phone:
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="website">
                      <RequiredStar />
                      Website:
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <button type="submit" className="btn btn-primary btn-right">
                  <span>OK</span>
                </button>
                <button
                  type="button"
                  onClick={onCancelHandler}
                  className="btn btn-right"
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
