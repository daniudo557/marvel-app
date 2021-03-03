import logo from './logo.svg';
import './App.css';
import paths from './routes/paths';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to={paths.comics}>
          Comics
        </Link>
      </header>
    </div>
  );
}

export default App;
