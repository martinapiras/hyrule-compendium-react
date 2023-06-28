import { useEffect, useState } from "react";
import { GET } from "../../utils/HTTP";
import CategoryItem from "./CategoryItem/";
import CloseButton from "../CloseButton/";
import ItemPage from "../ItemPage";
import "./index.css";

const CategorySection = ({ section, setSection }) => {
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    GET("category/" + section).then((data) => setList(data.data));
  }, []);

  return (
    <>
      {modal ? (
        <ItemPage data={modal} setSection={setSection} setModal={setModal} />
      ) : (
        <div className="CategorySection">
          <CloseButton onClick={() => setSection("")} />
          <h2 className="CategorySection__Title">
            {section.charAt(0).toUpperCase()}
            {section.slice(1)}
          </h2>
          {section !== "creatures" && (
            <ul className="CategorySection__List">
              {list.map((item) => (
                <CategoryItem data={item} setModal={setModal} key={item.id} />
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default CategorySection;
