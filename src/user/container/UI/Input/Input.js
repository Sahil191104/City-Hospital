import React from 'react';
import { InputBox, InputError } from './input.style';

function Input({ errorText, ...rest }) {
    return (
        <>
            <InputBox className="form-control" errorText={errorText} {...rest} />
            <InputError errorText={errorText}>{errorText}</InputError>
        </>
    );
}

export default Input;