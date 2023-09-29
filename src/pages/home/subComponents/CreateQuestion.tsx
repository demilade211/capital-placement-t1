import React from 'react'
import cancel from "../images/cancel.svg"
import ChoiceInput from '../../../components/ChoiceInput';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import SelectInput from '../../../components/SelectInput';
import Input from '../../../components/Input';
import styled from 'styled-components';
import { qTypes, tTypes } from "../../../utils/data"

const CreateQuestion: React.FC<any> = ({ type, setShowQuestion, setQuestionType,setSingleQuestion,addQuestion }) => {

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = name:${e.target.name} ${e.target.checked}`);
    const { name, checked } = e.target as { name: string; checked: boolean };// takes the name and vale of event currently changing
    setSingleQuestion((prev:any )=> ({ ...prev, [name]: checked }))
  };

  const onSelectChange = (option: any) => {
    setQuestionType(Number(option.value))
    setSingleQuestion((prev:any )=> ({ ...prev, questionType: option.label }))

  };
  const handleChange = (e:any) => {
    const { name, value } = e.target// takes the name and vale of event currently changing
    setSingleQuestion((prev:any )=> ({ ...prev, [name]: value }))
  }
  const onTimeChange = (option: any) => {
    //setQuestionType(Number(option.value))

  };

  return (
    <CreateCon>
      <SelectInput label="Type" options={qTypes} setQuestionType={setQuestionType} onChange={onSelectChange} />
      <Input label="Question" type="text" place="Type here" name="question" onChange={handleChange}/>
      {type === 9 &&
        <>
          <Input place="Additional Information" type="text"  name="additionalInformation"/>
          <div className='grid-con'>
            <Input place="Max duration of video" type="number"  name="maxDurationOfVideo"/>
            <SelectInput place="in (sec/min)" options={tTypes} setQuestionType={setQuestionType} onChange={onTimeChange} />
          </div>
        </>
      }
      {type === 3 && <Checkbox name='disqualifyCandidate' style={{ marginBottom: "40px" }} onChange={onChange}><span className='other'>Disqualify candidate if the answer is no</span></Checkbox>}
      {((type === 4) || (type === 5)) &&
        <>
          <ul className='choice-con'>
            <label className='label'></label>
            <li>
              <ChoiceInput place="Type here" type="text"/>
            </li>
          </ul>
          <Checkbox name='enableOthers' style={{ marginBottom: "40px" }} onChange={onChange}><span className='other'>Enable “Other” option </span></Checkbox>
        </>
      }
      {type === 5 && <Input place="Enter number of choice allowed here" label="Max choice allowed" type="number"  name="maxChoiceAllowed"/>}
      <div className='cancel-save'>
        <span onClick={() => {
          setShowQuestion(false)
          setQuestionType(null)
        }}
        >
          <img src={cancel} alt="img" />Delete question
        </span>
        <button onClick={()=>{
          addQuestion()
          setShowQuestion(false)
        }}>Save</button>
      </div>
    </CreateCon>
  )
}

const CreateCon = styled.div`  
  width: 100%;
  .grid-con{
    display: grid;
    grid-template-columns:2fr 1fr;
    column-gap:10px;
  }
  .choice-con{
    list-style-type:none;
    .label{
      color: #000;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 114%; /* 22.8px */
      margin-bottom:10px;
    }
  } 
  .other{
    color: #000;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    letter-spacing: -0.09px;
  }
  .cancel-save{
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin-top:10px;
    cursor: pointer;
    span{
      display:flex; 
      align-items:center;
      color: #A80000;
      font-family: Poppins;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 160% */
      letter-spacing: -0.09px;
      img{
        margin-right:10px;
      }
    }
    button{
      width: 59px;
      height: 35px;
      border-radius: 5px;
      background: #087B2F;
      color: #F4FBF7;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      border:none;
    }
  }
`;

export default CreateQuestion