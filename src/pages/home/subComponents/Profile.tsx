import React, { useState } from 'react'
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Switch } from 'antd';
import InfoContainer from '../../../components/InfoContainer'
import styled from 'styled-components';
import add from "../images/add.svg"
import edit from "../images/edit.svg"
import CreateQuestion from './CreateQuestion';

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

const Profile: React.FC<any> = ({ setState, info, handleRegister }) => {

  const [showQuestion, setShowQuestion] = useState(false);
  const [questionType, setQuestionType] = useState(null);
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
        profile: {
          ...prev.profile,
          profileQuestions: [...prev.profile.profileQuestions, singleQuestion]
        }
      }))
      setShowQuestion(false)
      await handleRegister()
      setSingleQuestion(
        {
          type: "",
          question: '',
          disqualify: false,
          choices: [],
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
      profile: {
        ...prev.profile,
        [name]: {
          ...prev.profile[name],
          mandatory: checked
        }
      }
    }))
  };

  const switchChange = (checked: boolean, name: string) => {

    setState((prev: any) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [name]: {
          ...prev.profile[name],
          show: checked
        }
      }
    }))
  };
 
  

  return (
    <InfoContainer title="Profile">
      <ProCon>
        <Row>
          <h2 className='label'>Education</h2>
          <Checkbox name='education' value={info.education.mandatory} onChange={onChange}><span className='internal'>Mandatory</span></Checkbox>
          <span className='hide'><Switch checked={info.education.show} onChange={(checked) => switchChange(checked, "education")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Experience </h2>
          <Checkbox name='experience' value={info.experience.mandatory} onChange={onChange}><span className='internal'>Mandatory</span></Checkbox>
          <span className='hide'><Switch checked={info.experience.show} onChange={(checked) => switchChange(checked, "experience")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        <Row>
          <h2 className='label'>Resume</h2>
          <Checkbox name='resume' value={info.resume.mandatory} onChange={onChange}><span className='internal'>Mandatory</span></Checkbox>
          <span className='hide'><Switch checked={info.resume.show} onChange={(checked) => switchChange(checked, "resume")} size="small" style={{ marginRight: "10px" }} />Hide</span>
        </Row>
        {info.profileQuestions.map((val: any) => (
          <EditRow>
            <p className='first-row'>{val.type}</p>
            <div className='second-row'>
              <h2 className='label'>{val.question}</h2>
              <img src={edit} alt="img" />
            </div>
          </EditRow>
        ))}
        {showQuestion && <CreateQuestion setSingleQuestion={setSingleQuestion} setQuestionType={setQuestionType} type={questionType} setShowQuestion={setShowQuestion} addQuestion={addQuestion} choices={singleQuestion.choices} />}
        <AddCon onClick={() => setShowQuestion(true)}>
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

export default Profile