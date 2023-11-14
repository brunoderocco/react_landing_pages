import P from 'prop-types';
import * as Styled from './styles';

export const SectionBackground = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{SectionBackground}</h1>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
};
