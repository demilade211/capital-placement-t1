import React from 'react'
import styled from 'styled-components';

const InfoContainer: React.FC<any> = ({title,children}) => {
  return (
    <Con>
        <div className='head'>
            <h1>{title}</h1> 
        </div>
        {children}
    </Con>
  )
}

const Con = styled.div`  
    width: 450px;
    min-height: 405.502px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 3px 3px 14px 0px rgba(190, 190, 190, 0.30);
    margin-bottom:50px;
    .head{
        width: 100%;
        height: 65px;
        background: #D0F7FA;
        padding: 20px 30px;
        display: flex;
        align-items: center;
        border-radius: 20px 20px 0px 0px; 
        h1{
            color: #000;
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 114%; /* 28.5px */
        }
    }
`;

export default InfoContainer