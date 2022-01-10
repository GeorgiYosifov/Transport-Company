import { Routes, Route } from 'react-router-dom';
import Companies from './companies';
import CreateCompany from './create-company';
import Company from './company';
import Home from './home';
import CreateCargo from './create-cargo';

const Pages = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="companies">
        <Route index element={<Companies />} />
        <Route path="create" element={<CreateCompany />} />
        <Route path=":id" element={<Company />} />
        <Route path=":id/create-cargo" element={<CreateCargo />} />
      </Route>
    </Routes>
  );
};

export default Pages;
