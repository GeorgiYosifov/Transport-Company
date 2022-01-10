const Input = ({ id, type, name, onChange }) => {
  const handleChange = ({ target: { name, value } }) => {
    onChange(name, value);
  };

  return (
    <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id={id}
      type={type}
      name={name}
      onChange={handleChange}
    />
  );
};

export default Input;
