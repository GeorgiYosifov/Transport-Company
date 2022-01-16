import Button from './button';

const Vehicle = ({ vehicles, handleDelete }) => {
  return (
    <div>
      <h3>Vehicles</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {vehicles?.map(({ id, type }, idx) => (
            <tr key={id} className={idx % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{id}</td>
              <td className="border px-4 py-2">{type}</td>
              <td className="border px-4 py-2">
                <Button className="bg-red-900" onClick={() => handleDelete(id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vehicle;
