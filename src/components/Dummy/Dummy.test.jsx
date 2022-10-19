import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<Dummy/>', () => {
  it('should render', () => {
    renderTheme(<Dummy>Children</Dummy>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
