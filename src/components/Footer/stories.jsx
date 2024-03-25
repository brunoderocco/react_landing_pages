import { Footer } from '.'; 

export default { 
    title: 'Footer', 
    component: Footer, 
    args: { 
        html: `<p><a href="https://www.linkedin.com/in/bruno-rocco-5b5234143/">Feito com ❤ por Bruno De Rocco</a></p>`, 
    }, 
}; 

export const Template = (args) => { 
    return ( 
        <div> 
            <Footer {...args} /> 
        </div> 
    ); 
}; 
