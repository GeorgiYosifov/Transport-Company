import Button from './button';

const Employees = ({ employees, handleFire }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Id</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(({ id, name, salary }, idx) => (
          <tr key={id} className={idx % 2 === 0 ? 'bg-gray-100' : ''}>
            <td className="border px-4 py-2">{id}</td>
            <td className="border px-4 py-2">{name}</td>
            <td className="border px-4 py-2">{salary}</td>
            <td className="border px-4 py-2">
              <Button className="bg-red-900" onClick={() => handleFire(id)}>
                Fire
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Employees;
