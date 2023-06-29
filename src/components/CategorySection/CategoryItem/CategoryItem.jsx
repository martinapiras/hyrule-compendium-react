import { useRef } from "react";
import { GET } from "../../../utils/HTTP";
import "./index.css";

const CategoryItem = ({ data, setModal }) => {
  const nameArr = data.name.split(" ");

  const entryName = useRef(data.name);

  const onHandleClick = () => {
    GET("entry/" + entryName.current).then((data) => setModal(data.data));
  };

  return (
    <div className="CategoryItem" onClick={onHandleClick}>
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
