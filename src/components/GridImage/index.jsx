import P from 'prop-types'; 
import * as Styled from './styles'; 
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({ title, description, grid, background = false }) => { 
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
                        <Styled.GridElement key={`${e1.srcImg}${e1.altText}`}>
                            <Styled.Image src={e1.srcImg} alt={e1.altText}/>
                        </Styled.GridElement>
                    ))}
                </Styled.Grid>
            </Styled.Container>
        </SectionBackground>
    ); 
}; 

GridImage.propTypes = { 
    background: P.bool,
    title: P.string.isRequired,
    description: P.string.isRequired,
    grid: P.arrayOf(
        P.shape({
            altText: P.string.isRequired,
            srcImg: P.string.isRequired,
        }),
    ).isRequired,
}; 
