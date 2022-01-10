import { useState } from 'react';
import FormRow from '../components/form-row';
import FormCol from '../components/form-col';
import StyledLabel from '../components/label';
import Input from '../components/input';
import Button from '../components/button';
import { useParams } from 'react-router-dom';
import { createCargo } from '../requests/company-requests';

const CreateCargo = () => {
  const { id } = useParams();
  const [cargo, setCargo] = useState({
    id: 1,
    employeeId: 1,
    vehicleId: 1,
    companyId: id,
    clients: [],
  });

  const handleChange = (name, value) => {
    setCargo((cargo) => ({ ...cargo, [name]: value }));
  };

  const handleCreateCargo = async (e) => {
    e.preventDefault();
    await createCargo(id, cargo);
  };

  return (
    <form className="w-full max-w-6xl border-blue-500 border-opacity-100">
      <FormRow>
        <FormCol className="md:w-1/2">
          <StyledLabel htmlFor="grid-company-name">Destination</StyledLabel>
          <Input
            id="grid-company-name"
            name="destination"
            type="text"
            onChange={handleChange}
          />
        </FormCol>
        <FormCol className="md:w-1/2">
          <StyledLabel htmlFor="grid-company-name">Description</StyledLabel>
          <Input
            id="grid-company-name"
            name="description"
            type="text"
            onChange={handleChange}
          />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol className="md:w-1/2">
          <StyledLabel htmlFor="grid-company-name">Departure Date</StyledLabel>
          <Input
            id="grid-company-name"
            name="departureD"
            type="date"
            onChange={handleChange}
          />
        </FormCol>
        <FormCol className="md:w-1/2">
          <StyledLabel htmlFor="grid-company-name">Arrival Date</StyledLabel>
          <Input
            id="grid-company-name"
            name="arrivalD"
            type="date"
            onChange={handleChange}
          />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol className="md:w-1/2">
          <StyledLabel htmlFor="grid-company-name">Weigth (kg)</StyledLabel>
          <Input
            id="grid-company-name"
            name="weigth"
            type="number"
            onChange={handleChange}
          />
        </FormCol>
      </FormRow>
      <Button onClick={handleCreateCargo}>Create Cargo</Button>
    </form>
  );
};

export default CreateCargo;
