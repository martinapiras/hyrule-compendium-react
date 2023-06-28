import "./index.css";

const CloseButton = ({ onClick }) => {
  return (
    <button className="CloseButton" onClick={onClick}>
      ❌
    </button>
  );
};

export default CloseButton;
