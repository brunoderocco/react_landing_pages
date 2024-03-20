import P from 'prop-types'; 
import * as Styled from './styles'; 
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({ title, description, grid, background = false }) => { 
    return ( 
        <SectionBackground background={background}>
            <Styled.Container> 
                <Heading size="huge" uppercase darkColor={!background}>
                    {title}
                </Heading>
                <TextComponent>
                    {description}
                </TextComponent>
            </Styled.Container> 
        </SectionBackground>
    ); 
}; 

GridText.propTypes = { 
    title: P.string.isRequired,
    description: P.string.isRequired,
}; 
