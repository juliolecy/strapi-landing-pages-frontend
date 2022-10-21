import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as k from './styles';

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}) => {
  return (
    <k.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </k.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string,
};
