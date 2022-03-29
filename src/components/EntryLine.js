import React from "react";
import Button from "../UI/Button";
import classes from "./EntryLine.module.css";
import Card from "../UI/Card";

export const EntryLine = ({ description, amount, isExpense = false }) => {
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
            color: `${isExpense ? "red" : "green"}`,
          }}
        >
          {amount}
          {` ${isExpense ? "Dr" : "Cr"}`}
        </span>
        <span>
          <Button color="#f6f7a1">Edit</Button>
          <Button color="#f07065">Delete</Button>
        </span>
      </Card>
    </div>
  );
};
