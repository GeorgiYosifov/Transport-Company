import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="companies">Companies</Link>
      <Link to="companies/create">Create</Link>
    </nav>
  );
};

export default Nav;
