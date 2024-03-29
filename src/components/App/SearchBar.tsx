import { useState } from 'react';
import { Form, Input, Segment } from 'semantic-ui-react';

interface SearchBarProps {
  setDoQuery: React.Dispatch<React.SetStateAction<string | null>>;
}

function SearchBar({ setDoQuery }: SearchBarProps) {
  /*
    Le plus important dans une application React, c'est son ÉTAT :
    l'affichage va être modifié en fonction de celui-ci
    on va avoir des comportements différents, des données différents.

    Donc une donnée de formulaire, DOIT appartenir à cet état.

    Ici, on veut permettre à notre utilisateur
    de gérer cette variable.

    Un outil pratique pour en même temps :
    - afficher la valeur actuelle de la variable
    - permettre sa modification

    est le champ de formulaire.

    On n'oublie donc pas de contrôler ses champs de formulaire

    1. on crée une variable d'état → useState
    2. on va afficher la valeur de l'état dans le input
    pour avertir notre utilisateur → `value`
    3. on va surveiller la saisie utilisateur pour modifier
    la valeur de l'état → `onChange`

    Je le fais ici car :
    - l'information « l'utilisateur modifie le champ » n'est pas utile ailleurs
    - ça évite le re-rendu de `<App />` (et de tous ses enfants) à chaque saisie

    > en règle générale, on gère son formulaire LOCALEMENT
  */
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault(); // Semantic UI le fait directement avec `<Form />`

    // j'affiche mon intention
    console.log(
      'je veux faire un appel API pour rechercher la saisie utilisateur'
    );
    // ma saisie utilisateur est stockée dans mon état `search`
    console.log(search);

    // je dis que je suis en train de soumettre le formulaire
    // je lui envoie la saisie : search
    // on supprime les espaces non-nécessaires de la saisie (trim)
    setDoQuery(search.trim());
  };

  return (
    <Segment>
      <Form role="search" onSubmit={handleSubmit}>
        <Form.Field>
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Rechercher un dépôt…"
            aria-label="Rechercher un dépôt"
            role="searchbox"
            value={search}
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

export default SearchBar;
