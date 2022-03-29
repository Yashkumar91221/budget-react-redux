import classes from "./App.module.css";
import { DisplayBalance } from "./components/DisplayBalance";
import { EntryLine } from "./components/EntryLine";
import { MainHeader } from "./components/MainHeader";
import { NewEntryForm } from "./components/NewEntryForm";

function App() {
  return (
    <div className={classes.app}>
      <MainHeader title="Budget" />
      <DisplayBalance income={5000.0} expenses={100.5} />
      <MainHeader title="History" type="medium" />
      <EntryLine description="Some expense" amount={100} />
      <EntryLine
        description="Some other expense"
        amount={100}
        isExpense={true}
      />
      <MainHeader title="Add a new transaction" type="medium" />
      <NewEntryForm />
    </div>
  );
}

export default App;
