import RemovableRow from './removable-row';

const ListInput = ({ data, onRemove, onAdd, buttonMessage, dataName }) => {
  return (
    <div>
      {data.map(({ id, [dataName]: text }) => (
        <RemovableRow
          key={id}
          text={text}
          onClick={(e) => {
            e.preventDefault();
            onRemove(id);
          }}
        />
      ))}
      <button onClick={onAdd}>{buttonMessage}</button>
    </div>
  );
};

export default ListInput;
