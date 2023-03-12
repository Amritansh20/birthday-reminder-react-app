import "./index.css";
import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  const handelClick = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people}></List>
        <button onClick={handelClick}>clear All</button>
      </section>
    </main>
  );
}

export default App;
