// Message est déjà pris par mon composant,
// je renomme mon import grâce à `as`
import { Message as MessageSemanticUI } from 'semantic-ui-react';

interface MessageProps {
  total: number;
}

function Message({ total }: MessageProps) {
  return (
    <MessageSemanticUI>
      La recherche a retourné {total} résultats
    </MessageSemanticUI>
  );
}

export default Message;
