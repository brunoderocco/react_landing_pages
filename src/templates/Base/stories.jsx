import { Base } from '.'; 

//import links

export default { 
    title: 'Base', 
    component: Base, 
    args: { 
        children: 'Base', 
    }, 
    argTypes: { 
        children: { type: 'string' }, 
    }, 
}; 

export const Template = (args) => { 
    return ( 
        <div> 
            <Base {...args} /> 
        </div> 
    ); 
}; 
