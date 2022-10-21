import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Basic } from '.';
import { mockBasic } from './mock';

describe('<Basic/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<Basic {...mockBasic} />);
    expect(container).toMatchSnapshot();
  });
});
