import React, { useState } from "react";
import classes from "./NewEntryForm.module.css";

export const NewEntryForm = ({ onFormSubmit }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onFormSubmit({ description, amount, isExpense });
    setDescription("");
    setAmount("");
    setIsExpense("");
  };
  const cancelHandler = () => {
    setDescription("");
    setAmount("");
    setIsExpense("");
  };
  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes.row}>
        <label htmlFor="description" className={classes.label}>
          Description:
        </label>
        <input
          className={classes.input}
          required
          id="description"
          name="description"
          type="text"
          value={description}
          placeholder="Name of transaction"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>

      {"    "}
      <div className={classes.row}>
        <label htmlFor="amount" className={classes.label}>
          Rs.
        </label>
        <input
          className={classes.input}
          required
          id="amount"
          name="amount"
          type="number"
          min="1"
          placeholder="Please enter amount"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        ></input>
      </div>

      {"    "}
      <div className={classes.row}>
        <label htmlFor="isexpense" className={classes.label}>
          Is it an expense?
        </label>
        <input
          className={classes.checkbox}
          id="isexpense"
          name="isexpense"
          type="checkbox"
          checked={isExpense}
          onChange={() => setIsExpense((prevState) => !prevState)}
        ></input>
      </div>
      <div>
        <button
          style={{ backgroundColor: "#d2dadf" }}
          className={classes.button}
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <span>or</span>
        <button className={classes.button} type="submit">
          Ok
        </button>
      </div>
    </form>
  );
};
