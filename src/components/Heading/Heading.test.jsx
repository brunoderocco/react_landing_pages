import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('color', theme.colors.primaryColor);
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xhuge);
    expect(heading).toHaveStyleRule('text-transform', 'none');
  });

  it('should render with white color', () => {
    renderTheme(<Heading darkColor={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('color', theme.colors.white);
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);
    let heading = screen.getByRole('heading', { name: 'texto' });


    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.medium);

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>,
    );

    heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge);

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>,
    );

    heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.large);

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>,
    );

    heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xhuge);

  });

  it('should render correct font-size when using mobile', () => {
    const { rerender } = renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xhuge,
      /*{
        media: theme.media.lteMedium,
      },*/
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('text-transform', 'uppercase');
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

});
