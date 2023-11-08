import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';

import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render link style', () => {
    renderTheme(<NavLinks links={mock} />);
    screen.debug(screen.getByText(/Link 10/i).parentElement);
    expect(screen.getByText(/Link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'row wrap',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });

});
