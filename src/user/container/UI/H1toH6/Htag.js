import React from 'react';
import { H2tag, H2tag1 } from './htag.style';

function Htag({children, name}) {

    const HeadTag = () => {
        switch (name) {
            case 'h2tag':
                return H2tag;
            case 'h2tag1':
                return H2tag1;
            default:
                return H2tag;
        }
    }

    const CustomsHeader = HeadTag();

    return (
        <CustomsHeader>
            {children}
        </CustomsHeader>
    );
}

export default Htag;