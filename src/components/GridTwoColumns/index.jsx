import P from 'prop-types';
import * as k from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import Javascript from '../../assets/javascript.svg';

export const GridTwoColumns = ({
  title,
  text,
  background = true,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <k.Container background={background}>
        <k.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </k.TextContainer>
        <k.ImageContainer>
          <k.Image src={Javascript} alt={title} />
        </k.ImageContainer>
      </k.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
