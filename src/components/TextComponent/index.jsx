import P from 'prop-types';
import * as k from './styles';

export const TextComponent = ({ children }) => {
  return <k.Container>{children}</k.Container>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
