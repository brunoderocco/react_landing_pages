import { screen } from '@testing-library/react'; 
import { renderTheme } from '../../styles/render-theme'; 
import { GridText } from '.'; 
import mock from './mock';

describe('<GridTest />', () => { 
    it('should render', () => { 
        const { container } = renderTheme(<GridText {...mock}/>); 
        expect(container).toMatchSnapshot();
    }); 
}); 
