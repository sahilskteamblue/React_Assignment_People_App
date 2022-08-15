import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import classes from "./FormModal.module.css";

const DeleteModal = (props) => {
  // Function to delete the card on delete button clicked of the modal
  const onDeleteHandler = (e) => {
    e.preventDefault();
    props.onConfirmDeleteClicked(props.id);
  };

  // Function to close the delete modal on clicked cancel.
  const onCancelHandler = () => {
    props.onDeleteClicked(false);
  };

  return (
    <>
      <div className={classes["modal-backdrop"]}>
        <div className={classes["modal-form"]}>
          <div className={classes.container}>
            <div className={classes["modal-header"]}>
              <span className={classes["modal-title"]}>Basic Modal</span>
              <span className={classes.close} onClick={onCancelHandler}>
                <CloseOutlined />
              </span>
            </div>
            <hr />
            <div className={classes["modal-content"]}>
              <h3>Are you sure you want to delete this item? </h3>
            </div>
            <hr />
            <div className={classes.row}>
              <button
                type="button"
                onClick={onDeleteHandler}
                className={`${classes.btn} ${classes["btn-danger"]} ${classes["btn-right"]}`}
              >
                <span>Delete</span>
              </button>
              <button
                type="button"
                onClick={onCancelHandler}
                className={`${classes.btn} ${classes["btn-right"]}`}
              >
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
