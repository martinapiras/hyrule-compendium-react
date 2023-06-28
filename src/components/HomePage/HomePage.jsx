import "./index.css";
const HomePage = ({ setSection }) => {
  return (
    <div className="HomePage">
      <h1 className="HomePage__title">Hyrule Compendium</h1>
      <ul className="HomePage__Categories">
        <li
          className="HomePage__Categories--category"
          onClick={() => setSection("")}
        >
          Creatures
        </li>
        <li
          className="HomePage__Categories--category"
          onClick={() => setSection("equipment")}
        >
          Equipment
        </li>
        <li
          className="HomePage__Categories--category"
          onClick={() => setSection("materials")}
        >
          Materials
        </li>
        <li
          className="HomePage__Categories--category"
          onClick={() => setSection("monsters")}
        >
          Monsters
        </li>
        <li
          className="HomePage__Categories--category"
          onClick={() => setSection("treasure")}
        >
          Treasure
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
