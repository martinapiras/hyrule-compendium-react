import { useState } from "react";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  const [section, setSection] = useState("");

  return <>{section ? <h1>WIP</h1> : <HomePage />}</>;
}

export default App;
