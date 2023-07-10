import React from 'react';
import { CustomTitel } from './titel.styled';

function Titel({...rest}) {
    return (
        <CustomTitel {...rest}></CustomTitel>
    );
}

export default Titel;