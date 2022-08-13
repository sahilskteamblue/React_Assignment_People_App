import React from "react";
import { CloseOutlined } from "@ant-design/icons";

const FormModal = () => {
  return (
    <>
      <div id="formModal" className="formModal">
        <div className="modal-content">
          <span className="close">
            <CloseOutlined />
          </span>
          <div className="form"></div>
        </div>
      </div>
    </>
  );
};

export default FormModal;
