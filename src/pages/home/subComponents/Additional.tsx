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

interface Question {
  questionType: string;
  question: string;
  disqualifyCandidate?: boolean;
  options?: string[];
  enableOthers?: boolean;
  maxChoiceAllowed?: number;
  additionalInformation?: string;
  maxDurationOfVideo?: number;
  in?: string;
}

const Additional = () => {

  const [showQuestion, setShowQuestion] = useState(false);
  const [questionType, setQuestionType] = useState(null);
  const [singleQuestion, setSingleQuestion] = useState<Question>({
    questionType: "",
    question: '',
    disqualifyCandidate: false, // Default value for boolean property
    options: [], // Default value for string[] property
    enableOthers: false, // Default value for boolean property
    maxChoiceAllowed: 0, // Default value for number property
    additionalInformation: '', // Default value for string property
    maxDurationOfVideo: 0, // Default value for number property
    in: '', // Default value for string property
  });

  const [questionList, setQuestionList] = useState<Question[]>([]);

  const addQuestion = () => {
    if (singleQuestion.questionType && singleQuestion.question) {
      setQuestionList((prev: any) => ([...prev, singleQuestion]))
      setSingleQuestion(
        {
          questionType: "",
          question: '',
          disqualifyCandidate: false, 
          options: [], 
          enableOthers: false, 
          maxChoiceAllowed: 0, 
          additionalInformation: '', 
          maxDurationOfVideo: 0, 
          in: '', 
        }
      )
    }
  };

  console.log(singleQuestion);


  return (
    <InfoContainer title="Additional questions">
      <AdditionalCon>
        {questionList?.map((val) => (
          <EditRow>
            <p className='first-row'>{val.questionType}</p>
            <div className='second-row'>
              <h2 className='label'>{val.question}</h2>
              <img src={edit} alt="img" />
            </div>
          </EditRow>
        ))}
        {showQuestion && <CreateQuestion setSingleQuestion={setSingleQuestion} setQuestionType={setQuestionType} type={questionType} setShowQuestion={setShowQuestion} addQuestion={addQuestion} />}
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