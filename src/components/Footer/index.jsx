import P from 'prop-types';
import * as k from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ footerHtml }) => {
  return (
    <k.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </k.Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
