import React from 'react'
import styled from "styled-components";

const Input: React.FC<any> = ({ label, place, withIcon, image, type, onChange, name, value }) => {
    return (
        <InputLabelCon>
            <Label>{label}</Label>
            <InputCon> 
                <input type={type} placeholder={place} onChange={onChange} name={name} value={value} />
            </InputCon>
        </InputLabelCon>
    )
}
const InputLabelCon = styled.div`
    margin-bottom:20px;
`;

const Label = styled.div`
    color: #000;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 114%; /* 22.8px */
    margin-bottom:10px
`;

const InputCon = styled.div`
    width: 100%;
    height: 56px;
    display:flex;  
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #000;
    padding:10px;
    margin-bottom: 20px;
    img{
        margin-right:10px;
    }
    input{
        width:100%;
        background:none;
        border:none;
        outline:none;
        color: #979797;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 159.5%; /* 22.33px */
    }
`;

export default Input