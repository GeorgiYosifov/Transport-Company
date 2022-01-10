import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCompany } from '../requests/company-requests';

const Company = () => {
  const { id } = useParams();
  useEffect(() => {
    getCompany(id).then((data) => {
      console.log(data);
    });
  }, [id]);
  return <div>Company data</div>;
};

export default Company;
