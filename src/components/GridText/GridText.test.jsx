import { screen } from '@testing-library/react'; 
import { renderTheme } from '../../styles/render-theme'; 
import { GridText } from '.'; 

describe('<GridTest />', () => { 
    it('should render', () => { 
        renderTheme(<GridText>Children</GridText>); 
        expect(screen.getByRole('heading')).toBeInTheDocument(); 
    }); 
}); 
