import { render, screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../../styles/render-theme';

describe('<Home/>', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
