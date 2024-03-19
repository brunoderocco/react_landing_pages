import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        text-align: center;
        max-width: 58rem;
        amrgin: 0 auto;
    `}
`;

export const Html = styled.div`
    ${({theme}) => css`
        margin: ${theme.spacings.xhuge};
    `}
`;