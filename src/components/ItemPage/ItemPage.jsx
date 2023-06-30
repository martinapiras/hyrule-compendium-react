import "./index.css";
import CloseButton from "../CloseButton";

const ItemPage = ({ data, setModal }) => {
  const nameArr = data.name.split(" ");
  const cookingArr = data?.cooking_effect?.split(" ");

  const dropsArr = data?.drops?.map((drop) => drop.split(" "));
  const dropsCapitalized = dropsArr?.map((dropArr) =>
    dropArr
      .map((drop) => drop.charAt(0).toUpperCase() + drop.slice(1))
      .join(" ")
  );

  const itemPageRender = () => {
    switch (data.category) {
      case "creatures":
      case "materials":
      case "monsters":
      case "treasure":
        return (
          <>
            {data?.drops && data?.drops?.length > 0 && (
              <>
                <h3 className="ItemPage__Text--subtitle">Drops</h3>
                <ul className="ItemPage__Text--drops">
                  {dropsCapitalized?.map((drop) => (
                    <li key={Math.random() * (100 - 1) + 1}>{drop}</li>
                  ))}
                </ul>
              </>
            )}

            {data?.cooking_effect && (
              <>
                <h3 className="ItemPage__Text--subtitle">Cooking Effect</h3>
                <p className="ItemPage__Text--cooking">
                  {cookingArr
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </p>
              </>
            )}

            {(data?.hearts_recovered || data?.hearts_recovered === 0) && (
              <>
                <h3 className="ItemPage__Text--subtitle">Hearts Recovered</h3>
                <p className="ItemPage__Text--hearts">
                  {data?.hearts_recovered}
                </p>
              </>
            )}
          </>
        );
        break;

      case "equipment":
        return (
          <>
            {data?.attack > 0 && (
              <>
                <h3 className="ItemPage__Text--subtitle">Attack</h3>
                <p className="ItemPage__Text--strength">{data.attack}</p>
              </>
            )}
            {data?.defense > 0 && (
              <>
                <h3 className="ItemPage__Text--subtitle">Defense</h3>
                <p className="ItemPage__Text--strength">{data.defense}</p>
              </>
            )}
          </>
        );
    }
  };

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
        <h3 className="ItemPage__Text--subtitle">Common locations:</h3>
        <ul className="ItemPage__Text--locations">
          {data?.common_locations && data?.common_locations.length > 0 ? (
            data?.common_locations?.map((location) => (
              <li key={Math.random() * (100 - 1) + 1}>{location}</li>
            ))
          ) : (
            <li>N/A</li>
          )}
        </ul>
        {itemPageRender()}
      </div>
    </div>
  );
};

export default ItemPage;
