import classes from "./App.module.css";
import { DisplayBalance } from "./components/DisplayBalance";
import { MainHeader } from "./components/MainHeader";
import { NewEntryForm } from "./components/NewEntryForm";
import { useEffect, useState } from "react";
import { EntryLines } from "./components/EntryLines";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [entry, setEntry] = useState({});
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    let income = 0;
    let tot = 0;
    for (let i = 0; i < entries.length; i++) {
      if (!entries[i].isExpense) {
        income += +entries[i].amount;
      }
      tot += +entries[i].amount;
    }
    setIncome(income);
    setExpenses(tot - income);
  }, [entries]);
  
  useEffect(() => {
    if (entry) {
      const index = entries.findIndex((en) => en.id === entry.id);
      let newEntries = [...entries];
      newEntries[index] = { ...entry };
      setEntries(newEntries);
      setEntry(null);
    }
  }, [entry, entries]);

  const deleteEntryhandler = (deleteId) => {
    setEntries((prevState) =>
      prevState.filter((entry) => entry.id !== deleteId)
    );
  };

  const addEntryHandler = ({ description, amount, isExpense }) => {
    const entry = {
      id: new Date().toUTCString(),
      description,
      amount,
      isExpense,
    };
    setEntries((prevState) => prevState.concat(entry));
  };

  const editEntryHandler = (editedEntry) => {
    setEntry(editedEntry);
  };

  return (
    <div className={classes.app}>
      <MainHeader title="Budget" />
      <DisplayBalance income={income} expenses={expenses} />
      <MainHeader title="History" type="medium" />
      <EntryLines
        entries={entries}
        onDeleteEntry={deleteEntryhandler}
        onEdit={editEntryHandler}
      />
      <MainHeader title="Add a new transaction" type="medium" />
      <NewEntryForm onFormSubmit={addEntryHandler} />
    </div>
  );
}

export default App;

const initialEntries = [
  { id: "1", description: "Power bill", amount: "754", isExpense: true },
  { id: "2", description: "Salary Credit", amount: "25054", isExpense: false },
  { id: "3", description: "Water bill", amount: "317", isExpense: true },
  { id: "4", description: "Gas bill", amount: "456", isExpense: true },
  { id: "5", description: "Internet Expense", amount: "450", isExpense: true },
];
