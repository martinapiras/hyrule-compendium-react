import "./index.css";
import CloseButton from "../CloseButton";

const ItemPage = ({ data, setModal }) => {
  const nameArr = data.name.split(" ");

  return (
    <div className="ItemPage">
      <CloseButton onClick={() => setModal(null)} />
      <img src={data.image} alt={data.name} />
      <div className="ItemPage__Text">
        <h2 className="ItemPage__Text--title">
          {nameArr
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h2>
        <p className="ItemPage__Text--description">{data.description}</p>
      </div>
    </div>
  );
};

export default ItemPage;
