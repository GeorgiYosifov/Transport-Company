import StyledLink from './styled-link';

const Nav = () => {
  return (
    <nav className="flex items-center justify-center flex-wrap p-6 shadow-lg">
      <ul className="flex">
        <li className="mr-6">
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li className="mr-6">
          <StyledLink to="companies">Companies</StyledLink>
        </li>
        <li className="mr-6">
          <StyledLink to="companies/create">Create Company</StyledLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
