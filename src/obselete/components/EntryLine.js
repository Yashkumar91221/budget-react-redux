import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./EntryLine.module.css";
import Card from "../UI/Card";
import { Modal } from "../UI/Modal";
import { EditForm } from "./EditForm";

export const EntryLine = ({
  description,
  amount,
  id,
  isExpense = false,
  onDeleteEntry,
  onEdit,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const [newAmount, setNewAmount] = useState(amount);
  const [newIsExpense, setNewIsExpense] = useState(isExpense);

  const deleteHandler = () => {
    onDeleteEntry(id);
  };

  const editButtonHandler = () => {
    setModalOpen(true);
  };
  return (
    <div className={classes.entryline}>
      <Card>
        <span style={{ flex: 1 }}>{description}</span>
        <span
          style={{
            border: "solid 1px grey",
            borderTop: "none",
            borderBottom: "none",
            margin: "2px 50px",
            width: "20%",
            color: `${isExpense ? "red" : "green"}`,
          }}
        >
          {`${isExpense ? "-" : "+"} ${amount} `}
        </span>
        <span>
          <Button color="#f6f7a1" onClick={editButtonHandler}>
            Edit
          </Button>
          <Button color="#f07065" onClick={deleteHandler}>
            Delete
          </Button>
        </span>
      </Card>
      {modalOpen && (
        <Modal>
          <EditForm
            id={id}
            description={newDescription}
            amount={newAmount}
            isExpense={newIsExpense}
            setNewDescription={setNewDescription}
            setNewIsExpense={setNewIsExpense}
            setNewAmount={setNewAmount}
            setModalOpen={setModalOpen}
            onEdit={onEdit}
          />
        </Modal>
      )}
    </div>
  );
};
