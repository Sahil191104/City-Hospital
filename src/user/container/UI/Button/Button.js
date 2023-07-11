import React from 'react';
import { BaseButton, OutlinedButton, PrimaryButton, SecondryButton } from './button.style';

function Button({ children, type, Btndisalbeld }) {

    const BasebuttonCuttoms = () => {
        switch (type) {
            case 'primary':
                return PrimaryButton;
            case 'secondry':
                return SecondryButton;
            case 'outlined':
                return OutlinedButton;
            default:
                return PrimaryButton
        }
    }

    const CustomsButton = BasebuttonCuttoms();

    return (
        <CustomsButton disabled={Btndisalbeld}>
            {children}
        </CustomsButton>
    );
}

export default Button;