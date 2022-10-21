import P from 'prop-types';
import * as k from './styles';

export const SectionContainer = ({ children }) => {
  return <k.Container>{children}</k.Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
