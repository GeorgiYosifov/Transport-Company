import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  getCompany,
  updateCompany,
  deleteCompany,
} from '../requests/company-requests';
import PageHeader from '../components/page-header';
import StyledLabel from '../components/label';
import StyledLink from '../components/styled-link';
import Select from '../components/select';
import FormCol from '../components/form-col';
import Button from '../components/button';
import FormRow from '../components/form-row';

import Employees from '../components/employees';
import Vehicles from '../components/vehicles';
import Cargos from '../components/cargos';

import Input from '../components/input';
import { useNavigate } from 'react-router-dom';

const VEHICLE_OPTIONS = ['Bus', 'TIR', 'Lorry'];

const Company = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [company, setCompany] = useState({
    vehicles: [],
    employees: [],
    cargos: [],
  });

  const [vehicleType, setVehicleType] = useState('Bus');
  const [employee, setEmployee] = useState({});

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

  const handleAddVehicle = async () => {
    const updatedCompany = {
      ...company,
      vehicles: [
        ...(company.vehicles || []),
        { id: uuidv4(), type: vehicleType },
      ],
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

  const handleAddEmployee = async () => {
    const updatedCompany = {
      ...company,
      employees: [...(company.employees || []), { id: uuidv4(), ...employee }],
    };
    await updateCompany(updatedCompany);
    setCompany(updatedCompany);
  };

  const handleCargoDelete = async (id) => {
    const updatedCompany = {
      ...company,
      cargos: company.cargos.filter(({ id: oldId }) => oldId !== id),
    };

    await updateCompany(updatedCompany);
    setCompany(updatedCompany);
  };

  const handleDeleteCompany = async () => {
    await deleteCompany(company.id);
    navigate('/companies');
  };

  console.log(company);
  return (
    <div>
      <PageHeader title={company.name} />
      <main>
        <section className="shadow-lg p-4">
          <ul className="flex items-center justify-center">
            <li>
              <StyledLink to={`/companies/${id}/create-cargo`}>
                Load cargo
              </StyledLink>
            </li>
            <li>
              <Button
                onClick={handleDeleteCompany}
                className="bg-inherit p-0 hover:bg-inherit text-red-900"
              >
                Delete the company
              </Button>
            </li>
          </ul>
        </section>
        <div className="grid grid-rows-2 grid-flow-col gap-1 shadow-lg p-4">
          <FormRow>
            <FormCol className={'md:w-1/3'}>
              <StyledLabel>Vehicle Type</StyledLabel>
              <Select
                onChange={(value, name) => setVehicleType(value)}
                options={VEHICLE_OPTIONS.map((vehicle) => ({
                  value: vehicle,
                  label: vehicle,
                }))}
              />
              <Button className="mt-2" onClick={handleAddVehicle}>
                Add
              </Button>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol className="md:w-1/3">
              <StyledLabel htmlFor="grid-name">Name</StyledLabel>
              <Input
                id="grid-name"
                type="text"
                onChange={(name, value) =>
                  setEmployee((employee) => ({ ...employee, name: value }))
                }
              />
              <Button className="mt-2" onClick={() => handleAddEmployee()}>
                Add Employee
              </Button>
            </FormCol>
            <FormCol className="md:w-1/3">
              <StyledLabel htmlFor="grid-salary">Salary</StyledLabel>
              <Input
                id="grid-salary"
                type="text"
                onChange={(name, value) =>
                  setEmployee((employee) => ({ ...employee, salary: value }))
                }
              />
            </FormCol>
          </FormRow>
        </div>
        <section className="flex flex-col shadow-lg p-4">
          <Vehicles
            vehicles={company.vehicles}
            handleDelete={handleVehicleDelete}
          />
          <Employees
            employees={company.employees}
            handleFire={handleEmployeeDelete}
          />
          <Cargos cargos={company.cargos} handleDelete={handleCargoDelete} />
        </section>
      </main>
    </div>
  );
};

export default Company;
