import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { NavLinks } from '../NavLinks';
import { LogoLink } from '../LogoLink';

export const Menu = ({ links = [], logoData }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink text='Menu' link='#target' />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
