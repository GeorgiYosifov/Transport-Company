import { useState, useEffect } from 'react';
import { getCompanies } from '../requests/company-requests';
import StyledLink from '../components/styled-link';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getCompanies().then((companies) => {
      setCompanies(companies);
    });
  }, []);

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Id</th>
          <th className="px-4 py-2">Company Name</th>
          <th className="px-4 py-2">Created On</th>
        </tr>
      </thead>
      <tbody>
        {companies.map(({ id, name, createdOn }, idx) => (
          <tr key={id} className={idx % 2 === 0 ? 'bg-gray-100' : ''}>
            <td className="border px-4 py-2">{id}</td>
            <td className="border px-4 py-2">
              <StyledLink to={`/companies/${id}`}>{name}</StyledLink>
            </td>
            <td className="border px-4 py-2">{createdOn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Companies;
