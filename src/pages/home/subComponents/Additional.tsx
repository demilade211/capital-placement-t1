import React, { useState } from 'react'
import styled from 'styled-components';
import edit from "../images/edit.svg"
import InfoContainer from '../../../components/InfoContainer'
import SelectInput from '../../../components/SelectInput';
import Input from '../../../components/Input';
import add from "../images/add.svg"
import cancel from "../images/cancel.svg"
import ChoiceInput from '../../../components/ChoiceInput';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import CreateQuestion from './CreateQuestion';
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

const Additional: React.FC<any> = ({ setState, info, handleRegister }) => {

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


  const addQuestion = async () => {
    if (singleQuestion.type && singleQuestion.question) {
      setState((prev: any) => ({ ...prev, customisedQuestions: [...prev.customisedQuestions, { id: uuidv4(), ...singleQuestion }] }))
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
      setQuestionType(null)
    }
  };

  const handleEditClick = (index: number) => {
    editIndex.includes(index) ? setEditIndex(editIndex.filter(val => val !== index)) : setEditIndex(prev => ([...prev, index]))
  };

  console.log(info);


  return (
    <InfoContainer title="Additional questions">
      <AdditionalCon>
        {info?.map((val: any, index: number) => (
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
                section="additional"
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
      </AdditionalCon>
    </InfoContainer>
  )
}

const AdditionalCon = styled.div`  
  width: 100%;  
  padding: 30px; 
  overflow-x:scroll;
`;

const AddCon = styled.div`  
  display: flex;
  align-items: center;
  cursor: pointer;
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



export default Additional