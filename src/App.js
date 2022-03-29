import classes from "./App.module.css";
import { Button } from "./UI/Button";
import { Card } from "./UI/Card";

function App() {
  return (
    <div className={classes.app}>
      <h1>Budget</h1>
      <div>
        <label>Your balance:</label>
        <span>5000</span>
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
            <td>1000.00</td>
            <td>1000.00</td>
          </tr>
        </tbody>
      </table>
      <h2>History</h2>
      <table className={classes.table}>
        <tbody>
          <tr>
            <Card>
              <td style={{ flex: 1 }}>Some expense</td>
              <td
                style={{
                  border: "solid 1px grey",
                  borderTop: "none",
                  borderBottom: "none",
                  margin: "2px 50px",
                }}
              >
                1000.00
              </td>
              <td>
                <Button color="#f6f7a1">Edit</Button>
                <Button color="#f07065">Delete</Button>
              </td>
            </Card>
          </tr>
          <tr>
            <Card>
              <td style={{ flex: 1 }}>Some other expense</td>
              <td
                style={{
                  border: "solid 1px grey",
                  borderTop: "none",
                  borderBottom: "none",
                  margin: "2px 50px",
                }}
              >
                500.00
              </td>
              <td>
                <Button color="#f6f7a1">Edit</Button>
                <Button color="#f07065">Delete</Button>
              </td>
            </Card>
          </tr>
        </tbody>
      </table>

      <h2>Add new transaction</h2>
      <form>
        <label htmlFor="description">
          Description:
          <input
            name="description"
            type="text"
            placeholder="Please enter transaction"
          ></input>
        </label>
        {"    "}
        <label htmlFor="amount">
          Rs.
          <input
            name="amount"
            type="number"
            min="1"
            placeholder="Please enter amount"
          ></input>
        </label>
        <Button color="#d5dbd3">Cancel</Button>
        <span>Or</span>
        <Button color="#83ed55">Ok</Button>
      </form>
    </div>
  );
}

export default App;
