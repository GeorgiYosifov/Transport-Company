import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import Pages from './pages';
import Layout from './components/layout';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Layout>
        <Pages />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
