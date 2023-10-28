import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
};
