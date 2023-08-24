import { Image } from 'semantic-ui-react';
import logo from '../../assets/images/logo-github.png';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Image src={logo} alt="Logo GitHub" size="small" centered />
      </header>
    </div>
  );
}

export default App;
