import Button from './button';
import RemovableRow from './removable-row';

const ListInput = ({ data, onRemove, onAdd, buttonMessage, dataName }) => {
  return (
    <>
      <Button onClick={onAdd}>{buttonMessage}</Button>
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
    </>
  );
};

export default ListInput;
