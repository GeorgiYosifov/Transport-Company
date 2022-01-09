import { Link } from 'react-router-dom';

const StyledLink = ({ to, children }) => {
  return (
    <Link className="text-blue-400 hover:text-blue-800 text-lg" to={to}>
      {children}
    </Link>
  );
};

export default StyledLink;
