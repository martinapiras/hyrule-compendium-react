import "./index.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1 className="HomePage__title">Hyrule Compendium</h1>
      <ul className="HomePage__Categories">
        <li className="HomePage__Categories--category">Creatures</li>
        <li className="HomePage__Categories--category">Equipment</li>
        <li className="HomePage__Categories--category">Materials</li>
        <li className="HomePage__Categories--category">Monsters</li>
        <li className="HomePage__Categories--category">Treasure</li>
      </ul>
    </div>
  );
};

export default HomePage;
