import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Employees from '../components/employees';
import Vehicles from '../components/vehicles';
import StyledLink from '../components/styled-link';
import Cargos from '../components/cargos';
import { getCompany, updateCompany } from '../requests/company-requests';
import PageHeader from '../components/page-header';

const Company = () => {
  const { id } = useParams();
  const [company, setCompany] = useState({
    vehicles: [],
    employees: [],
    cargos: [],
  });

  useEffect(() => {
    getCompany(id).then((data) => {
      setCompany(data);
    });
  }, [id]);

  const handleVehicleDelete = async (id) => {
    const updatedCompany = {
      ...company,
      vehicles: company.vehicles.filter(({ id: oldId }) => oldId !== id),
    };
    await updateCompany(updatedCompany);
    setCompany(updatedCompany);
  };

  const handleEmployeeDelete = async (id) => {
    const updatedCompany = {
      ...company,
      employees: company.employees.filter(({ id: oldId }) => oldId !== id),
    };

    await updateCompany(updatedCompany);
    setCompany(updatedCompany);
  };

  return (
    <div>
      <PageHeader title={company.name} />
      <main>
        <section>
          <h2>Links</h2>
          <ul>
            <li>
              <StyledLink to={`/companies/${id}/create-cargo`}>
                Load cargo
              </StyledLink>
            </li>
          </ul>
        </section>
        <section className="grid grid-rows-1 grid-flow-col gap-1 shadow-lg p-4">
          <div>
            <h3>Vehicles Owned: </h3>
            <Vehicles
              vehicles={company.vehicles}
              handleDelete={handleVehicleDelete}
            />
          </div>
          <div>
            <h3>Employees: </h3>
            <Employees
              employees={company.employees}
              handleFire={handleEmployeeDelete}
            />
          </div>
          <div>
            <h3>Cargos: </h3>
            <Cargos cargos={company.cargos} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Company;
