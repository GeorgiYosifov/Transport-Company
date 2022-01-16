import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../components/input';
import StyledLabel from '../components/label';
import FormRow from '../components/form-row';
import FormCol from '../components/form-col';
import ListInput from '../components/list-input';
import PageHeader from '../components/page-header';
import Button from '../components/button';
import { createCompany } from '../requests/company-requests';
import VehiclePicker from '../components/vehicle-picker';

const VEHICLE_IDS = {
  Bus: 0,
  TIR: 1,
  Lorry: 2,
};

const CreateCompany = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});

  const handleCreateCompany = async (e) => {
    e.preventDefault();
    const id = await createCompany({
      name: companyName,
      vehicles: vehicles.map((vehicle) => ({
        type: VEHICLE_IDS[vehicle.type],
      })),
      employees,
    });

    navigate(`/companies/${id}`);
  };

  const handleRemoveVehicle = (id) =>
    setVehicles((vehicles) => vehicles.filter((veh) => veh.id !== id));

  const handleAddVehicle = (type) => {
    setVehicles((vehicles) => {
      return [...vehicles, { id: uuidv4(), type }];
    });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();

    setEmployees((employees) => {
      return [...employees, { id: uuidv4(), ...employee }];
    });
  };

  const removeEmployee = (id) =>
    setEmployees((employees) => employees.filter((emp) => emp.id !== id));

  return (
    <div className="shadow-lg p-4">
      <PageHeader title="Create a transport companay" />
      <form className="w-full max-w-6xl border-blue-500 border-opacity-100 flex flex-col">
        <FormRow>
          <FormCol className="md:w-1/2">
            <StyledLabel htmlFor="grid-company-name">Company Name</StyledLabel>
            <Input
              id="grid-company-name"
              type="text"
              onChange={(name, value) => setCompanyName(value)}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <VehiclePicker
            onAddVehicle={handleAddVehicle}
            removeVehicle={handleRemoveVehicle}
            vehicles={vehicles}
          />
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
          <FormCol className="md:w-1/3">
            <StyledLabel>Employees: </StyledLabel>
            <ListInput
              data={employees}
              dataName="name"
              onAdd={handleAddEmployee}
              onRemove={removeEmployee}
              buttonMessage="Add employee"
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <Button onClick={handleCreateCompany}>Create Company</Button>
        </FormRow>
      </form>
    </div>
  );
};

export default CreateCompany;
