// Message est déjà pris par mon composant,
// je renomme mon import grâce à `as`
import { Message as MessageSemanticUI } from 'semantic-ui-react';

function Message() {
  return (
    <MessageSemanticUI>
      La recherche a retourné XXXXX résultats
    </MessageSemanticUI>
  );
}

export default Message;
