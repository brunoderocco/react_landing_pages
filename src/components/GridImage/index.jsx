import P from 'prop-types'; 
import * as Styled from './styles'; 

export const GridImage = ({ title, description, grid, background = false }) => { 
    return ( 
        <Styled.Container> 
            <h1>GridImage</h1> 
        </Styled.Container> 
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
