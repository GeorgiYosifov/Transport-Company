import { Routes, Route } from 'react-router-dom';
import Companies from './companies';
import CreateCompany from './create-company';
import Company from './company';
import Home from './home';

const Pages = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="companies">
        <Route index element={<Companies />} />
        <Route path="create" element={<CreateCompany />} />
        <Route path=":id" element={<Company />} />
      </Route>
    </Routes>
  );
};

export default Pages;
