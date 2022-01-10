import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../components/input';
import StyledLabel from '../components/label';
import FormRow from '../components/form-row';
import FormCol from '../components/form-col';
import Select from '../components/select';
import ListInput from '../components/list-input';
import Button from '../components/button';
import { createCompany } from '../requests/company-requests';

const VEHICLE_OPTIONS = ['Bus', 'TIR', 'Lorry'];
const VEHICLE_IDS = {
  Bus: 1,
  TIR: 2,
  Lorry: 3,
};

const CreateCompany = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [vehicleType, setVehicleType] = useState('Bus');
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});

  const handleCreateCompany = async (e) => {
    e.preventDefault();
    await createCompany({
      name: companyName,
      vehicles: vehicles.map((vehicle) => ({
        type: VEHICLE_IDS[vehicle.type],
      })),
      employees,
    });

    navigate('/companies');
  };

  const removeVehicle = (id) =>
    setVehicles((vehicles) => vehicles.filter((veh) => veh.id !== id));

  const handleAddVehicle = (e) => {
    e.preventDefault();
    setVehicles((vehicles) => {
      return [...vehicles, { id: vehicles.length + 1, type: vehicleType }];
    });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();

    setEmployees((employees) => {
      return [...employees, { id: employees.length + 1, ...employee }];
    });
  };

  const removeEmployee = (id) =>
    setEmployees((employees) => employees.filter((emp) => emp.id !== id));

  return (
    <form className="w-full max-w-6xl border-blue-500 border-opacity-100">
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
        <FormCol className={'md:w-1/2'}>
          <StyledLabel>Vehicle Type</StyledLabel>
          <Select
            onChange={setVehicleType}
            options={VEHICLE_OPTIONS.map((vehicle) => ({
              value: vehicle,
              label: vehicle,
            }))}
          />
        </FormCol>
        <FormCol className="md:w-1/2">
          <StyledLabel>Vehicles:</StyledLabel>
          <ListInput
            data={vehicles}
            dataName="type"
            onAdd={handleAddVehicle}
            onRemove={removeVehicle}
            buttonMessage={`Add ${vehicleType}`}
          />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol className="md:w-1/2">
          <StyledLabel htmlFor="grid-name">Name</StyledLabel>
          <Input
            id="grid-name"
            type="text"
            onChange={(name, value) =>
              setEmployee((employee) => ({ ...employee, name: value }))
            }
          />
        </FormCol>
        <FormCol className="md:w-1/2">
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
        <FormCol className="md:w-1/2">
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
      <FormRow>
        <Button onClick={handleCreateCompany}>Create Company</Button>
      </FormRow>
    </form>
  );
};

export default CreateCompany;
