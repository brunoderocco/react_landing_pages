import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: ${theme.font.sizes.medium};
    font-weight: bolder;

    >img{
      max-height: 3rem;
    }
  `}
`;
