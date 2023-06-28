import { useEffect, useState } from "react";
import { GET } from "../../utils/HTTP";
import { categoryMock } from "../../mocks/category";
import CategoryItem from "./CategoryItem/";
import CloseButton from "../CloseButton/";
import "./index.css";

const CategorySection = ({ section, setSection }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    GET(section).then((data) => setList(data.data));
  }, []);

  return (
    <div className="CategorySection">
      <CloseButton onClick={() => setSection("")} />
      <h2 className="CategorySection__Title">
        {section.charAt(0).toUpperCase()}
        {section.slice(1)}
      </h2>
      {section !== "creatures" && (
        <ul className="CategorySection__List">
          {list.map((item) => (
            <CategoryItem data={item} setSection={setSection} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategorySection;
