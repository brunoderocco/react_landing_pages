import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
    ${({ theme }) => css`
        ${TextComponent} {
            margin-bottom: ${theme.spacings.xhuge};
        }
    `}
`;