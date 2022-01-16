import { useState } from 'react';
import StyledLabel from './label';
import Select from './select';
import FormCol from './form-col';
import ListInput from './list-input';

const VEHICLE_OPTIONS = ['Bus', 'TIR', 'Lorry'];

const VehiclePicker = ({ onAddVehicle, removeVehicle, vehicles }) => {
  const [vehicleType, setVehicleType] = useState('Bus');

  return (
    <>
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
          onAdd={(e) => {
            e.preventDefault();
            onAddVehicle(vehicleType);
          }}
          onRemove={removeVehicle}
          buttonMessage={`Add ${vehicleType}`}
        />
      </FormCol>
    </>
  );
};

export default VehiclePicker;
