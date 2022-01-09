import { BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import Pages from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Pages />
    </BrowserRouter>
  );
};

export default App;
