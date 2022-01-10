const Select = ({ options, onChange }) => {
  const handleChange = ({ target: { value, name } }) => {
    onChange(value, name);
  };

  return (
    <select
      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-state"
      onChange={handleChange}
    >
      {options.map(({ value, label }) => (
        <option value={value} key={value} name={label}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
