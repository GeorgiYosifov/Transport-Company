import Button from './button';

const Cargos = ({ cargos, handleDelete }) => {
  return (
    <div>
      <h3>Cargos: </h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Departure Date</th>
            <th className="px-4 py-2">Arrival Date</th>
            <th className="px-4 py-2">Customer Id</th>
          </tr>
        </thead>
        <tbody>
          {cargos.map(({ id, arrival, departure, description }, idx) => (
            <tr key={id} className={idx % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{id}</td>
              <td className="border px-4 py-2">
                {new Date(departure).toLocaleString()}
              </td>
              <td className="border px-4 py-2">
                {new Date(arrival).toLocaleString()}
              </td>
              <td className="border px-4 py-2">{description}</td>
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

export default Cargos;
