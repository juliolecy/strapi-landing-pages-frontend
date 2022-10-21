import mock from '../../components/NavLinks/mock';
import gridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export const mockBasic = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: mock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p> Teste </>',
};
