import Button from './button';

const RemovableRow = ({ text, onClick }) => {
  return (
    <div className="flex justify-between p-2">
      {text}{' '}
      <Button className="bg-red-800" onClick={onClick}>
        X
      </Button>
    </div>
  );
};

export default RemovableRow;
