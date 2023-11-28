import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    top:0;
    left: 0;
    right: 0;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};
  `}
`;
