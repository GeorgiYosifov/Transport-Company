import { useState } from 'react';
import Input from '../components/input';
import StyledLabel from '../components/label';
import FormRow from '../components/form-row';
import FormCol from '../components/form-col';
import Select from '../components/select';
import RemovableRow from '../components/removable-row';
import ListInput from '../components/list-input';

const VEHICLE_OPTIONS = ['Bus', 'TIR', 'Lorry'];

const CreateCompany = () => {
  const [companyName, setCompanyName] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [vehicleType, setVehicleType] = useState('Bus');
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Goshe' },
  ]);

  const handleCreateCompany = () => {
    console.log(companyName, vehicles);
  };

  const removeVehicle = (id) => {
    setVehicles([]);
  };

  const handleAddVehicle = (e) => {
    e.preventDefault();
    setVehicles((vehicles) => {
      return [...vehicles, { id: vehicles.length + 1, type: vehicleType }];
    });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();

    setEmployees((employees) => {
      return [...employees, { id: employees.length + 1, name: 'Ivan' }];
    });
  };

  const removeEmployee = (id) => {
    return employees.filter((emp) => emp.id !== id);
  };

  return (
    <form className="w-full max-w-lg">
      <FormRow>
        <FormCol className="md:w-1/1">
          <StyledLabel htmlFor="grid-first-name">Company Name</StyledLabel>
          <Input
            id="grid-first-name"
            type="text"
            onChange={(name, value) => setCompanyName(value)}
          />
        </FormCol>
      </FormRow>
      <FormRow className="flex flex-wrap -mx-3 mb-2">
        <FormCol className="md:w-1/3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            City
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </FormCol>
        <FormCol className="md:w-1/3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            State
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </FormCol>
        <FormCol className="md:w-1/3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-zip"
          >
            Zip
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="90210"
          />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol>
          {vehicles.map(({ id, type }) => (
            <RemovableRow
              key={id}
              text={type}
              onClick={() => removeVehicle(id)}
            />
          ))}
          <StyledLabel htmlFor="grid-first-name">Vehicles</StyledLabel>
          <Select
            onChange={setVehicleType}
            options={VEHICLE_OPTIONS.map((vehicle) => ({
              value: vehicle,
              label: vehicle,
            }))}
          />
          <button onClick={handleAddVehicle}>Add Vehicle</button>
        </FormCol>
      </FormRow>
      <FormRow>
        <ListInput
          data={employees}
          dataName="name"
          onAdd={handleAddEmployee}
          onRemove={removeEmployee}
          buttonMessage="Add employee"
        />
      </FormRow>
      <FormRow>
        <button onClick={() => {}}>Create</button>
      </FormRow>
    </form>
  );
};

export default CreateCompany;
