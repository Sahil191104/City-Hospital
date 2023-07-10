import { styled } from "styled-components";

const BaseButton = styled.button`
    margin-left: 25px;
    border-radius: 50px;
    padding: 8px 25px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
    border:none;
`;

export const PrimaryButton = styled(BaseButton)`
    background: ${props => props.disabled ? 'gray' : "#FF6337"};
    color: #fff;
    
    &:hover {
        background: ${props => props.disabled ? 'gray' : "#166ab5"};
        color: #fff;
    }
`;

export const SecondryButton = styled(BaseButton)`
    background: #f0f0f0;
    color: gray;

    &:hover {
        background: #FF6337;
        color: #fff;
    }
`;

export const OutlinedButton = styled(BaseButton)`
    background: #fff;
    color: gray;
    border: 2px solid #FF6337;

    &:hover {
        background: #FF6337;
        color: #fff;
    }
`;