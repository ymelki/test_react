import { Form, Input, Segment } from 'semantic-ui-react';

function SearchBar() {
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
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

export default SearchBar;
