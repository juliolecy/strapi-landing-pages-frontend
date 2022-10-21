import P from 'prop-types';
import * as k from './styles';

export const TextComponent = ({ children }) => {
  return <k.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
