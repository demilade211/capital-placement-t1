import React,{useState} from 'react'
import styled from 'styled-components';
import down from "./images/down.svg"
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import Select, { type DropdownIndicatorProps, components } from 'react-select'
import {selectStyle} from "../utils/customStyles"

const SelectInput: React.FC<any> = ({ label, options,onChange,value,setQuestionType,place }) => {  

    return (
        // <Dropdown menu={{ items, onClick }} trigger={['click']} placement='bottom'>
            <InputLabelCon>
                <Label>{label}</Label>

                {/* <Select>
                    <span>{name}</span>
                    <img src={down} alt="img" />
                </Select> */}
                <Select options={options} components={{ DropdownIndicator }} styles={selectStyle} value={value} onChange={onChange} placeholder={place||"Select an option"}/>

            </InputLabelCon>
        // </Dropdown>
    )
}

const CaretDownIcon = () => {
    return <img src={down} alt="img" />;
  };
  
  // added type if using typescript
  const DropdownIndicator: React.FC<DropdownIndicatorProps> = props => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };

const InputLabelCon = styled.div`
    width: 100%;
    margin-bottom:20px;
`;

// const Select = styled.div`
//     width:100%;  
//     height: 56px;
//     border-radius: 5px;
//     border: 1px solid #000;
//     display: flex;
//     justify-content: space-between;
//     align-items:center;
//     padding: 20px;
//     cursor: pointer;
//     span{
//         color: #979797;
//         font-family: Poppins;
//         font-size: 14px;
//         font-style: normal;
//         font-weight: 500;
//         line-height: 159.5%; /* 22.33px */
//     }
// `;

const Label = styled.div`
    color: #000;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 114%; /* 22.8px */
    margin-bottom:10px
`;
const List = styled.p`
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 39px;
    letter-spacing: -0.096px;
`;

export default SelectInput