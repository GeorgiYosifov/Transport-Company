import { useState, useEffect } from 'react';
import { getCompanies, deleteCompany } from '../requests/company-requests';
import StyledLink from '../components/styled-link';
import Button from '../components/button';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getCompanies().then((companies) => {
      setCompanies(companies);
    });
  }, []);

  const removeCompany = async (id) => {
    await deleteCompany(id);
    setCompanies((companies) =>
      companies.filter(({ id: oldId }) => oldId !== id),
    );
  };

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Id</th>
          <th className="px-4 py-2">Company Name</th>
          <th className="px-4 py-2">Vehicles</th>
          <th className="px-4 py-2">Employees</th>
          <th className="px-4 py-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        {companies.map(({ id, name, employees, vehicles }, idx) => (
          <tr key={id} className={idx % 2 === 0 ? 'bg-gray-100' : ''}>
            <td className="border px-4 py-2">{id}</td>
            <td className="border px-4 py-2">
              <StyledLink to={`/companies/${id}`}>{name}</StyledLink>
            </td>
            <td className="border px-4 py-2">{vehicles.length}</td>
            <td className="border px-4 py-2">{employees.length}</td>
            <td className="border px-4 py-2">
              <Button
                className="bg-red-900"
                onClick={async () => {
                  await removeCompany(id);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Companies;
