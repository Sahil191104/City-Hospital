import { styled } from "styled-components";

export const InputBox = styled.input`
    border: ${props => props.errorText ? '1px solid red': '1px solid #ced4da'};
`;

export const InputError = styled.span`
    color: red;
    display: ${props => props.errorText ? 'inline-block' : 'none'};
`;