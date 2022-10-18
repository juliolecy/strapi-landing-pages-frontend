import * as k from './styles';
import P from 'prop-types';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <k.Title olorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </k.Title>
  );
};

Heading.propTypes = {
  children: P.node,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
    'huge',
    'xhuge',
  ]),
  uppercase: P.bool,
};
