import P from 'prop-types';
import * as Styled from './styles';
import { NavLinks } from '../NavLinks';
import { LogoLink } from '../LogoLink';

export const Menu = ({ links = [], logoData }) => {
  return (
    <Styled.Container>
      <h1>Menu</h1>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
