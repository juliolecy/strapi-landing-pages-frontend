import P from 'prop-types';
import * as k from './styles';
import { SectionContainer } from '../SectionContainer';
import { Logo } from '../Logo';
import { NavLinks } from '../NavLinks';
import { MenuOpen as MenuIcon } from '@styled-icons/material-outlined/MenuOpen';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <k.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </k.Button>

      <k.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <k.MenuContainer>
            <Logo {...logoData} />
            <NavLinks links={links} />
          </k.MenuContainer>
        </SectionContainer>
      </k.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(Logo.propTypes).isRequired,
};
