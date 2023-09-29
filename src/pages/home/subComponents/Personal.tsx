import React from 'react'
import styled from 'styled-components';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Switch } from 'antd';
import add from "../images/add.svg"
import InfoContainer from '../../../components/InfoContainer'

const Personal = () => {

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <InfoContainer title="Personal Information">
      <PersonalCon>
        <Row>
          <h2 className='label'>First Name</h2>
        </Row>
        <Row>
          <h2 className='label'>Last Name</h2>
        </Row>
        <Row>
          <h2 className='label'>Email</h2>
        </Row>
        <Row>
          <h2 className='label'>Phone <span>(without dial code)</span></h2>
          <Checkbox onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Nationality</h2>
          <Checkbox onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Current Residence </h2>
          <Checkbox onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>ID Number</h2>
          <Checkbox onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Date of Birth </h2>
          <Checkbox onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Gender</h2>
          <Checkbox onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <AddCon>
          <img src={add} alt="img" />
          <p className='add-text'>Add a question</p>
        </AddCon>
      </PersonalCon>
    </InfoContainer>
  )
}

const PersonalCon = styled.div`  
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

export default Personal