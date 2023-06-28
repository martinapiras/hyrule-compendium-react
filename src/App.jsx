import { useState } from "react";
import HomePage from "./components/HomePage";
import CategorySection from "./components/CategorySection";
import ItemPage from "./components/ItemPage/";
import "./App.css";

function App() {
  const [section, setSection] = useState("");

  const onSectionRender = () => {
    switch (section) {
      case "":
        return <HomePage setSection={setSection} />;

      case "creatures":
      case "equipment":
      case "materials":
      case "monsters":
      case "treasure":
        return <CategorySection section={section} setSection={setSection} />;

      case "item":
        return <ItemPage setSection={setSection} />;
    }
  };

  return <>{onSectionRender()}</>;
}

export default App;
