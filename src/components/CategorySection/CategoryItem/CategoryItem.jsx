import "./index.css";

const CategoryItem = ({ data, setSection }) => {
  const nameArr = data.name.split(" ");

  return (
    <div className="CategoryItem" onClick={() => setSection("item")}>
      <img src={data.image} alt={data.name} />
      <p className="CategoryItem__Name">
        {nameArr
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </p>
    </div>
  );
};

export default CategoryItem;
