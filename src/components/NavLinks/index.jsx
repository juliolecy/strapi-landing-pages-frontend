import P from 'prop-types';
import { MenuLink } from '../MenuLink';
import * as k from './styles';

export const NavLinks = ({ links = [] }) => {
  return (
    <k.Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </k.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.node.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
