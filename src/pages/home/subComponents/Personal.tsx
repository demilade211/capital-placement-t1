import React, { useState } from 'react'
import styled from 'styled-components';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Switch } from 'antd';
import add from "../images/add.svg"
import InfoContainer from '../../../components/InfoContainer'
import CreateQuestion from './CreateQuestion';
import edit from "../images/edit.svg"
import EditQuestion from './EditQuestion';
import { v4 as uuidv4 } from 'uuid';

interface Question {
  type: string;
  question: string;
  disqualify?: boolean;
  choices?: string[];
  other?: boolean;
  maxChoice?: number;
  additionalInformation?: string;
  maxDuration?: number;
  in?: string;
}

const Personal: React.FC<any> = ({ setState, info, handleRegister }) => {

  const [showQuestion, setShowQuestion] = useState(false);
  const [questionType, setQuestionType] = useState(null);
  const [editIndex, setEditIndex] = useState<number[]>([]);
  const [singleQuestion, setSingleQuestion] = useState<Question>({
    type: "",
    question: '',
    disqualify: false, // Default value for boolean property
    choices: [""], // Default value for string[] property
    other: false, // Default value for boolean property
    maxChoice: 0, // Default value for number property
    additionalInformation: '', // Default value for string property
    maxDuration: 0, // Default value for number property
    in: '', // Default value for string property
  });

  const [questionList, setQuestionList] = useState<Question[]>([]);

  const addQuestion = async () => {
    if (singleQuestion.type && singleQuestion.question) {
      setState((prev: any) => ({
        ...prev,
        personalInformation: {
          ...prev.personalInformation,
          personalQuestions: [...prev.personalInformation.personalQuestions, { id: uuidv4(), ...singleQuestion }]
        }
      }))
      setShowQuestion(false)
      await handleRegister()
      setSingleQuestion(
        {
          type: "",
          question: '',
          disqualify: false,
          choices: [""],
          other: false,
          maxChoice: 0,
          additionalInformation: '',
          maxDuration: 0,
          in: '',
        }
      )
    }
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    const { name, checked } = e.target as { name: string; checked: boolean };
    console.log(name);

    setState((prev: any) => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        [name]: {
          ...prev.personalInformation[name],
          internalUse: checked
        }
      }
    }))
  };

  const switchChange = (checked: boolean, name: string) => {

    setState((prev: any) => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        [name]: {
          ...prev.personalInformation[name],
          show: checked
        }
      }
    }))
  };

  const handleEditClick = (index: number) => {
    editIndex.includes(index) ? setEditIndex(editIndex.filter(val => val !== index)) : setEditIndex(prev => ([...prev, index]))
  };
  console.log(singleQuestion);


  return (
    <InfoContainer title="Personal Information">
      <PersonalCon>
        <Row>
          <h2 className='label'>First Name</h2>
          <Checkbox name='firstName' value={info.firstName.internalUse} onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch checked={info.firstName.show} onChange={(checked) => switchChange(checked, "firstName")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Last Name</h2>
          <Checkbox name='lastName' value={info.lastName.internalUse} onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch checked={info.lastName.show} onChange={(checked) => switchChange(checked, "lastName")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Email</h2>
          <Checkbox name='emailId' value={info.emailId.internalUse} onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch checked={info.emailId.show} onChange={(checked) => switchChange(checked, "emailId")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Phone <span>(without dial code)</span></h2>
          <Checkbox name='phoneNumber' value={info.phoneNumber.internalUse} onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch checked={info.phoneNumber.show} onChange={(checked) => switchChange(checked, "phoneNumber")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Nationality</h2>
          <Checkbox name='nationality' value={info.nationality.internalUse} onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch checked={info.nationality.show} onChange={(checked) => switchChange(checked, "nationality")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Current Residence </h2>
          <Checkbox name='currentResidence' value={info.currentResidence.internalUse} onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch checked={info.currentResidence.show} onChange={(checked) => switchChange(checked, "currentResidence")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>ID Number</h2>
          <Checkbox name='idNumber' value={info.idNumber.internalUse} onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch checked={info.idNumber.show} onChange={(checked) => switchChange(checked, "idNumber")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Date of Birth </h2>
          <Checkbox name='dateOfBirth' value={info.dateOfBirth.internalUse} onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch checked={info.dateOfBirth.show} onChange={(checked) => switchChange(checked, "dateOfBirth")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Gender</h2>
          <Checkbox name='gender' value={info.gender.internalUse} onChange={onChange}><span className='internal'>Internal</span></Checkbox>
          <span className='hide'><Switch checked={info.gender.show} onChange={(checked) => switchChange(checked, "gender")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        {info.personalQuestions.map((val: any, index: number) => (
          <>
            <EditRow>
              <p className='first-row'>{val.type}</p>
              <div className='second-row'>
                <h2 className='label'>{val.question}</h2>
                <img src={edit} alt="img" onClick={() => handleEditClick(index)} />
              </div>
            </EditRow>
            {editIndex.includes(index) &&
              <EditQuestion
                section="personal"
                currentIndex={index}
                data={val}
                setQuestionType={setQuestionType}
                addQuestion={addQuestion}
                choices={singleQuestion.choices}
                setState={setState}
                setEditIndex={setEditIndex}
                editIndex={editIndex}
                handleRegister={handleRegister}
              />
            }
          </>
        ))}
        {showQuestion && <CreateQuestion setSingleQuestion={setSingleQuestion} setQuestionType={setQuestionType} type={questionType} setShowQuestion={setShowQuestion} addQuestion={addQuestion} choices={singleQuestion.choices} />}
        <AddCon onClick={() => setShowQuestion(true)}>
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
  overflow-x:scroll;
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

const EditRow = styled.div`  
  width: 100%;   
  border-bottom: 1px solid #C4C4C4;
  margin:20px 0; 
  padding-bottom:20px; 
  .first-row{
    color: #979797;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 159.5%; /* 22.33px */
    margin-bottom:10px;
  }
  .second-row{
    display: flex; 
    justify-content:space-between;
    align-items: flex-start;
    .label{
      width: 80%;
      color: #000;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 114%; /* 22.8px */ 
    }
  }
`;

export default Personal