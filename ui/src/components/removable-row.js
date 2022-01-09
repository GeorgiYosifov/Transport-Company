const RemovableRow = ({ text, onClick }) => {
  return (
    <div className="block p-2">
      {text} <button onClick={onClick}>X</button>
    </div>
  );
};

export default RemovableRow;
