import "./index.css";
import CloseButton from "../CloseButton";
import { monster } from "../../mocks/monster";

const ItemPage = ({ setSection }) => {
  return (
    <div className="ItemPage">
      <CloseButton onClick={() => setSection("")} />
      <img src={monster.image} alt={monster.name} />
      <div className="ItemPage__Text">
        <h2 className="ItemPage__Text--title">{monster.name}</h2>
        <p className="ItemPage__Text--description">{monster.description}</p>
      </div>
    </div>
  );
};

export default ItemPage;
