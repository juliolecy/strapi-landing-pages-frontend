import P from 'prop-types';
import * as k from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({
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
            <k.GridElement key={element.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {element.title}
              </Heading>
              <TextComponent>{element.description}</TextComponent>
            </k.GridElement>
          ))}
        </k.Grid>
      </k.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  sectionId: P.string,
};
