import { Link } from 'react-router-dom';

const StyledLink = ({ to, children }) => {
  return (
    <li className="mr-6">
      <Link className="text-blue-500 hover:text-blue-800" to={to}>
        {children}
      </Link>
    </li>
  );
};

export default StyledLink;
