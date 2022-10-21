import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as k from './styles';

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <k.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <k.Grid>
          {grid.map((element) => (
            <k.GridElement key={`${element.srcImg}${element.altText}`}>
              <k.Image src={element.srcImg} alt={element.altText} />
            </k.GridElement>
          ))}
        </k.Grid>
      </k.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  sectionId: P.string,
};
