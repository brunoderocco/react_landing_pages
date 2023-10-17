import * as Styled from './styles';
import P from 'prop-types';

export const Heading = ({
  children,
  darkColor = false,
  as = 'h1',
  size = 'huge',
  uppercase = false }) => {
  return (<Styled.Title darkColor={darkColor} as={as} size={size} uppercase={uppercase}>
    {children}
  </Styled.Title>);
}

Heading.propTypes = {
  children: P.node.isRequired,
  darkColor: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
}
