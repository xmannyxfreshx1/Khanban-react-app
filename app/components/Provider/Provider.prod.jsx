import React from 'react';
import AltContainer from 'alt-container';
import alt from '../../libs/alt';
import setup from './setup';

setup(alt);

function provider(props){
    const children = props.children;
    
    return(
        
        <AltContainer flux={alt}>
            {children}
        </AltContainer>
        
        );
}

export default ({children}) =>

<AltContainer flux={alt}>
{children}
</AltContainer>