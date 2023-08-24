import { useState } from 'react';
import { Form, Input, Segment } from 'semantic-ui-react';

function SearchBar() {
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
  */
  const [search, setSearch] = useState('');

  return (
    <Segment>
      <Form role="search">
        <Form.Field>
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Rechercher un dépôt…"
            aria-label="Rechercher un dépôt"
            role="searchbox"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

export default SearchBar;
