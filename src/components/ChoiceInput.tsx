import React from 'react'
import styled from "styled-components";
import move from "./images/move.svg"
import addChoice from "./images/addChoice.svg"

const ChoiceInput: React.FC<any> = ({  place, type, onChange, name, value }) => {
    return (
        <InputLabelCon> 
            <img src={move} alt="img" />
            <InputCon>
                <input type={type} placeholder={place} onChange={onChange} name={name} value={value} />
            </InputCon>
            <img src={addChoice} alt="img" />
        </InputLabelCon>
    )
}

const InputLabelCon = styled.div`
    margin-bottom:20px;
    display: flex;
    align-items: center;
    img{
        cursor: pointer;
    }
`; 

const InputCon = styled.div`
    width: 100%;
    height: 56px;
    display:flex;  
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #A0A0A0;
    padding:10px;
    margin: 0 10px;
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

export default ChoiceInput