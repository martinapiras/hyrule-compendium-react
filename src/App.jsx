import { useState } from "react";
import HomePage from "./components/HomePage";
import CategorySection from "./components/CategorySection";
import "./App.css";

function App() {
  const [section, setSection] = useState("");

  return (
    <>
      {section ? (
        <CategorySection section={section} setSection={setSection} />
      ) : (
        <HomePage setSection={setSection} />
      )}
    </>
  );
}

export default App;
