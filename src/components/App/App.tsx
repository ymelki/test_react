import { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from 'semantic-ui-react';

import SearchBar from './SearchBar';
import Message from './Message';
import ReposResults from './ReposResults';

// import repos from '../../data/repos';
import logo from '../../assets/images/logo-github.png';

import './App.scss';

function App() {
  // État : est-ce que le formulaire est soumis ?
  // si le formulaire est soumis, je vais donner la valeur de mon
  // champ à ma variable
  // → si j'ai un string c'est que j'ai soumis mon formulaire
  const [doQuery, setDoQuery] = useState<string | null>(null);
  // État : pour stocker les résultats de l'API
  const [total, setTotal] = useState(0);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      try {
        // const response = await axios.get(
        //   'https://api.github.com/search/repositories?q=react'
        // );
        // console.log(response);

        // Axios retourne TOUJOURS le résultat de l'API
        // dans un objet avec la propriété `data`
        // on peut directement décomposer `response`
        // et assigner les résultats dans `data`
        const { data } = await axios.get(
          `https://api.github.com/search/repositories?q=${doQuery}`
        );
        // console.log(data);
        // on stocke les résultats dans nos variable d'état
        setTotal(data.total_count);
        setRepos(data.items);
      } catch (error) {
        console.error(error);
      } finally {
        setDoQuery(null);
      }
    }

    // je n'appelle ma fonction uniquement à la soumission du formulaire
    if (doQuery) {
      getRepos();
    }
  }, [doQuery]);
  // je veux appeler mon effet (`getRepos`, mon appel API) uniquement
  // au montage (1er rendu, premier affichage du composant)
  // pour viser cette phase du cycle de vie, j'indique `[]`

  return (
    <div className="App">
      <header className="header">
        <Image src={logo} alt="Logo GitHub" size="small" centered />
      </header>

      <SearchBar setDoQuery={setDoQuery} />
      <Message total={total} />
      <ReposResults list={repos} />
    </div>
  );
}

export default App;
