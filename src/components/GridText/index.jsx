import P from 'prop-types'; 
import * as Styled from './styles'; 
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({ title, description, grid, background = false }) => { 
    return ( 
        <SectionBackground background={background}>
            <Styled.Container> 
                <Heading size="huge" uppercase darkColor={!background} as="h2">
                    {title}
                </Heading>
                <TextComponent>
                    {description}
                </TextComponent>
                <Styled.Grid>
                    {grid.map((e1) => (
                        <Styled.GridElement key={e1.title}>
                            <Heading size='medium' darkColor={!background} as="h3">
                                {e1.title}
                            </Heading>
                            <TextComponent>{e1.description}</TextComponent>
                        </Styled.GridElement>
                    ))}
                </Styled.Grid>
            </Styled.Container> 
        </SectionBackground>
    ); 
}; 

GridText.propTypes = { 
    background: P.bool,
    title: P.string.isRequired,
    description: P.string.isRequired,
    grid: P.arrayOf(
        P.shape({
            title: P.string.isRequired,
            description: P.string.isRequired,
        }),
    ).isRequired,
}; 
