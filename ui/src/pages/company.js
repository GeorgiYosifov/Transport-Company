import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const fetchCompanyData = (id) => {
  return Promise.resolve({
    id,
    name: 'Union Ivkoni',
    clients: [{ id: 1, name: 'Ivan' }],
    vehicles: [
      {
        id: 1,
        type: 'Bus',
      },
    ],
  });
};

const Company = () => {
  const { id } = useParams();
  useEffect(() => {
    fetchCompanyData(id).then((data) => {
      console.log(data);
    });
  }, [id]);
  return <div>Company data</div>;
};

export default Company;
