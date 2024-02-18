import { useState } from "react";
import "./App.css";
import Details from "./components/Details";
import List from "./components/List";

function App() {
  const [selectedUser, setSelectedUser] = useState(0);

  return (
    <div className="App">
      <List selectedUser={selectedUser} changeSelected={setSelectedUser} />
      <Details info={selectedUser} />
    </div>
  );
}

export default App;
