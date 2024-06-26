import P from 'prop-types'; 
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ links =[], logoData, footerHtml, children }) => { 
    return ( 
        <>
        <Menu links={links} logoData={logoData}/>
        <Styled.Container> 
            <h1>{children}</h1> 
            <Footer html={footerHtml}/>
        </Styled.Container> 
        <GoTop />
        </>
    ); 
}; 

Base.propTypes = { 
    children: P.node.isRequired, 
}; 
