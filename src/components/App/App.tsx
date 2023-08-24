import { Image } from 'semantic-ui-react';

import SearchBar from './SearchBar';
import Message from './Message';
import ReposResults from './ReposResults';

import logo from '../../assets/images/logo-github.png';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Image src={logo} alt="Logo GitHub" size="small" centered />
      </header>

      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

export default App;
