import P from 'prop-types'; 
import * as Styled from './styles'; 
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
 
export const GridContent = ({title, html, background = false }) => { 
    return ( 
        <SectionBackground background={background}>
            <Styled.Container>
                <Heading darkColor={!background} as="h2">
                    {title}
                </Heading>
                <Styled.Html>
                    <TextComponent>
                        {html}
                    </TextComponent>
                </Styled.Html>
            </Styled.Container>
        </SectionBackground> 
    ); 
}; 
 
GridContent.propTypes = { 
    title: P.string.isRequired,
    html: P.string.isRequired,
    background: P.bool,  
}; 
