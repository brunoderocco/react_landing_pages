import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';

describe('<SectionBackgroundContainer />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground >
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container).toMatchSnapshot();
  });
});
