import React from "react";
import { ButtonSaveOrCancel } from "./ButtonSaveOrCancel";

export const EditForm = ({
  id,
  description,
  amount,
  isExpense,
  setNewDescription,
  setNewIsExpense,
  setNewAmount,
  setModalOpen,
  onEdit,
}) => {
  const editHandler = () => {
    const editedEntry = { id, description, amount, isExpense };
    onEdit(editedEntry);
    setModalOpen(false);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="description">
        Description:
        <input
          id="description"
          name="description"
          type="text"
          value={description}
          placeholder="Name of transaction"
          onChange={(e) => setNewDescription(e.target.value)}
        ></input>
      </label>
      {"    "}
      <label htmlFor="amount">
        Rs.
        <input
          id="amount"
          name="amount"
          type="number"
          min="1"
          placeholder="Please enter amount"
          value={amount}
          onChange={(e) => setNewAmount(+e.target.value)}
        ></input>
      </label>
      {"    "}
      <label htmlFor="isexpense">
        Expense
        <input
          id="isexpense"
          name="isexpense"
          type="checkbox"
          checked={isExpense}
          onChange={() => setNewIsExpense((prevState) => !prevState)}
        ></input>
      </label>
      <ButtonSaveOrCancel
        onClickCancel={() => setModalOpen(false)}
        onClickOk={editHandler}
      />
    </form>
  );
};
