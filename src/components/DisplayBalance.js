import React from "react";
import classes from "./DisplayBalance.module.css";

export const DisplayBalance = ({ income, expenses }) => {
  return (
    <>
      <div>
        <label>Your balance:</label>
        {"  "}
        <span style={{ fontSize: "23px" }}>{+income - +expenses}</span>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th style={{ border: "solid 1px green", padding: "10px 30px" }}>
              Incoming:
            </th>
            <th style={{ border: "solid 1px red", padding: "10px 30px" }}>
              Expenses:
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: "green", fontSize: "20px" }}>{income}</td>
            <td style={{ color: "red", fontSize: "20px" }}>{expenses}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
