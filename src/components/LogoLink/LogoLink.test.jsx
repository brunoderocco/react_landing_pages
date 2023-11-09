import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink>Children</LogoLink>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink>Children</LogoLink>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    renderTheme(<LogoLink>Children</LogoLink>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
