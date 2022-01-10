import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCompany } from '../requests/company-requests';

const Company = () => {
  const { id } = useParams();
  const [company, setCompany] = useState({});

  useEffect(() => {
    getCompany(id).then((data) => {
      setCompany(data);
    });
  }, [id]);

  return (
    <div>
      <header>
        <h1>{company.name}</h1>
      </header>
    </div>
  );
};

export default Company;
