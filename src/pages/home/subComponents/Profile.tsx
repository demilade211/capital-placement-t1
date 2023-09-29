import React from 'react'
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Switch } from 'antd';
import InfoContainer from '../../../components/InfoContainer'
import styled from 'styled-components';
import add from "../images/add.svg"

const Profile = () => {

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <InfoContainer title="Profile">
      <ProCon>
        <Row>
          <h2 className='label'>Education</h2>
          <Checkbox onChange={onChange}><span className='internal'>Mandatory</span></Checkbox>
          <span className='hide'><Switch size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Experience </h2>
          <Checkbox onChange={onChange}><span className='internal'>Mandatory</span></Checkbox>
          <span className='hide'><Switch size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Resume</h2>
          <Checkbox onChange={onChange}><span className='internal'>Mandatory</span></Checkbox>
          <span className='hide'><Switch size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <AddCon>
          <img src={add} alt="img" />
          <p className='add-text'>Add a question</p>
        </AddCon>
      </ProCon>
    </InfoContainer>
  )
}

const ProCon = styled.div`  
  width: 100%;  
  padding: 30px; 
`;

const Row = styled.div`  
  width: 100%;  
  padding-bottom: 5px;
  border-bottom: 1px solid #C4C4C4;
  margin:20px 0;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items:center;
  padding-bottom:20px;
  .internal{
    color: #000;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    letter-spacing: -0.09px;
  }
  .hide{
    color: #666;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    display: flex;
    align-items: center;
  }
  .label{
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 114%; /* 22.8px */ 
    span{
      color: #000;
      font-family: Poppins;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 114%;
    }
  }
`;

const AddCon = styled.div`  
  display: flex;
  align-items: center;
  margin-top:50px;
  img{
    width: 20px;
    height: 20px;
    margin-right:10px;
  }
  .add-text{
    white-space:nowrap;
    color: #000;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 160% */
    letter-spacing: -0.09px;
  } 
`;

export default Profile