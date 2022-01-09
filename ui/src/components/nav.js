import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex items-center justify-center flex-wrap p-6 shadow-lg">
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="companies">
            Companies
          </Link>
        </li>
        <li className="mr-6">
          <Link
            className="text-blue-500 hover:text-blue-800"
            to="companies/create"
          >
            Create
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
