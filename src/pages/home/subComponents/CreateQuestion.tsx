import React, { useState } from 'react'
import cancel from "../images/cancel.svg"
import ChoiceInput from '../../../components/ChoiceInput';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import SelectInput from '../../../components/SelectInput';
import Input from '../../../components/Input';
import styled from 'styled-components';
import { qTypes, tTypes } from "../../../utils/data"

interface Choice {
  id: string;
  choice: string;
}

let id = 0;

const CreateQuestion: React.FC<any> = ({ type, setShowQuestion, setQuestionType, setSingleQuestion, addQuestion,choices }) => {
  const [option, setOption] = useState("");

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = name:${e.target.name} ${e.target.checked}`);
    const { name, checked } = e.target as { name: string; checked: boolean };// takes the name and vale of event currently changing
    setSingleQuestion((prev: any) => ({ ...prev, [name]: checked }))
  };

  const onSelectChange = (option: any) => {
    setQuestionType(Number(option.value))
    setSingleQuestion((prev: any) => ({ ...prev, type: option.label.replace(/\s/g, '') }))

  };
  const handleChange = (e: any) => {
    const { name, value } = e.target// takes the name and vale of event currently changing
    setSingleQuestion((prev: any) => ({ ...prev, [name]: value }))
  }
  
  const onTimeChange = (option: any) => {
    //setQuestionType(Number(option.value))

  };

  const optionChange = (e: any) => {
    const { name, value } = e.target// takes the name and vale of event currently changing
    setOption(value)
  };

  const updateChoice = (id: number, updatedChoice: string) => {
    const updatedChoices = choices.map((choice:any,index:number) =>
      index === id ? updatedChoice : choice
    );
    setSingleQuestion((prev: any) => ({...prev, choices:updatedChoices}));

    if(id === 0){
      setOption(updatedChoice)
    }
  };

  const addChoice = () => {
    if (option) {
      setSingleQuestion((prev: any) => ({...prev, choices:[...prev.choices,""]}))
      //setOption("")
    }

  };

  console.log(choices);


  return (
    <CreateCon>
      <SelectInput label="Type" options={qTypes} setQuestionType={setQuestionType} onChange={onSelectChange} />
      <Input label="Question" type="text" place="Type here" name="question" onChange={handleChange} />
      {type === 9 &&
        <>
          <Input place="Additional Information" type="text" name="additionalInformation" />
          <div className='grid-con'>
            <Input place="Max duration of video" type="number" name="maxDuration" />
            <SelectInput place="in (sec/min)" options={tTypes} setQuestionType={setQuestionType} onChange={onTimeChange} />
          </div>
        </>
      }
      {type === 3 && <Checkbox name='disqualify' style={{ marginBottom: "40px" }} onChange={onChange}><span className='other'>Disqualify candidate if the answer is no</span></Checkbox>}
      {((type === 4) || (type === 5)) &&
        <>
          <ul className='choice-con'>
            <label className='label'></label>
            {choices.map((val:string,index:number) => <li key={index}>
              <ChoiceInput place="Type here" type="text"  adder={choices.length-1===index} value={val} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateChoice(index, e.target.value)} addChoices={addChoice}/>
            </li>
            )}
            {/* <li>
              <ChoiceInput place="Type here" value={option} type="text" adder={true} onChange={optionChange} addChoices={addChoice} />
            </li> */}
          </ul>
          <Checkbox name='other' style={{ marginBottom: "40px" }} onChange={onChange}><span className='other'>Enable “Other” option </span></Checkbox>
        </>
      }
      {type === 5 && <Input place="Enter number of choice allowed here" label="Max choice allowed" type="number" name="maxChoice" onChange={handleChange}/>}
      <div className='cancel-save'>
        <span onClick={() => {
          setShowQuestion(false)
          setQuestionType(null)
        }}
        >
          <img src={cancel} alt="img" />Delete question
        </span>
        <button onClick={addQuestion}>Save</button>
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