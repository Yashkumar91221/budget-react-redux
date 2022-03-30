import React from "react";
import { EntryLine } from "./EntryLine";

export const EntryLines = ({ entries, onEdit, onDeleteEntry }) => {
  return (
    <>
      {entries.map((entry, i) => (
        <EntryLine
          key={i}
          id={entry.id}
          description={entry.description}
          amount={entry.amount}
          isExpense={entry.isExpense}
          onDeleteEntry={onDeleteEntry}
          onEdit={onEdit}
        />
      ))}
    </>
  );
};
