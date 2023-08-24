import { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from 'semantic-ui-react';

import SearchBar from './SearchBar';
import Message from './Message';
import ReposResults from './ReposResults';

import repos from '../../data/repos';
import logo from '../../assets/images/logo-github.png';

import './App.scss';

function App() {
  // État : est-ce que le formulaire est soumis ?
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log('USEEFFECT');
    async function getRepos() {
      console.log('APPEL API');
      try {
        const response = await axios.get(
          'https://api.github.com/search/repositories?q=react'
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmit(false);
      }
    }

    // je n'appelle ma fonction uniquement à la soumission du formulaire
    if (isSubmit) {
      getRepos();
    }
  }, [isSubmit]);
  // je veux appeler mon effet (`getRepos`, mon appel API) uniquement
  // au montage (1er rendu, premier affichage du composant)
  // pour viser cette phase du cycle de vie, j'indique `[]`

  return (
    <div className="App">
      <header className="header">
        <Image src={logo} alt="Logo GitHub" size="small" centered />
      </header>

      <SearchBar setIsSubmit={setIsSubmit} />
      <Message total={repos.total_count} />
      <ReposResults list={repos.items} />
    </div>
  );
}

export default App;
