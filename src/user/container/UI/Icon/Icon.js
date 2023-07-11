import React from 'react';
import { CustomIcon } from './icon.style';

function Icon({...rest}) {
    return (
        <CustomIcon {...rest}/>
    );
}

export default Icon;