import StyledLink from './styled-link';

const Nav = () => {
  return (
    <nav className="flex items-center justify-center flex-wrap p-6 shadow-lg">
      <ul className="flex">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="companies">Companies</StyledLink>
        <StyledLink to="companies/create">Create Company</StyledLink>
      </ul>
    </nav>
  );
};

export default Nav;
