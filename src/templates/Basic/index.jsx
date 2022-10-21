import P from 'prop-types';
import * as k from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import links from '../../components/NavLinks/mock';

export const Basic = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <k.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </k.Container>
      <GoTop />
    </>
  );
};

Basic.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
