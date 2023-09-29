import React, { useState } from 'react'
import cancel from "../images/cancel.svg"
import ChoiceInput from '../../../components/ChoiceInput';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import SelectInput from '../../../components/SelectInput';
import Input from '../../../components/Input';
import styled from 'styled-components';
import { qTypes, tTypes } from "../../../utils/data"

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

const EditQuestion: React.FC<any> = ({ data, setQuestionType, addQuestion, choices }) => {

    const [option, setOption] = useState("");
    const [singleEdit, setSingleEdit] = useState<Question>({
        type: data.type,
        question: data.question,
        disqualify: data.disqualify, // Default value for boolean property
        choices: data.choices, // Default value for string[] property
        other: data.other, // Default value for boolean property
        maxChoice: data.maxChoice, // Default value for number property
        additionalInformation: '', // Default value for string property
        maxDuration: 0, // Default value for number property
        in: '', // Default value for string property
    });

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = name:${e.target.name} ${e.target.checked}`);
        const { name, checked } = e.target as { name: string; checked: boolean };// takes the name and vale of event currently changing
        setSingleEdit((prev: any) => ({ ...prev, [name]: checked }))
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target// takes the name and vale of event currently changing
        setSingleEdit((prev: any) => ({ ...prev, [name]: value }))
    }

    const onTimeChange = (option: any) => {
        //setQuestionType(Number(option.value))

    };

    const updateChoice = (id: number, updatedChoice: string) => {
        const updatedChoices = singleEdit.choices?.map((choice: any, index: number) =>
            index === id ? updatedChoice : choice
        );
        setSingleEdit((prev: any) => ({ ...prev, choices: updatedChoices }));

        if (id === 0) {
            setOption(updatedChoice)
        }
    };

    const addChoice = () => {
        if (option) {
            setSingleEdit((prev: any) => ({ ...prev, choices: [...prev.choices, ""] }))
            //setOption("")
        }

    };

    console.log(singleEdit.type);


    return (
        <EditCon>
            <Input label="Question" type="text" place="Type here" name="question" onChange={handleChange} value={singleEdit.question} />
            {data.type === "VideoQuestion" &&
                <>
                    <Input place="Additional Information" type="text" name="additionalInformation" />
                    <div className='grid-con'>
                        <Input place="Max duration of video" type="number" name="maxDuration" />
                        <SelectInput place="in (sec/min)" options={tTypes} setQuestionType={setQuestionType} onChange={onTimeChange} />
                    </div>
                </>
            }
            {data.type === "YesorNo" && <Checkbox name='disqualify' style={{ marginBottom: "40px" }} onChange={onChange}><span className='other'>Disqualify candidate if the answer is no</span></Checkbox>}
            {((data.type === "Dropdown") || (data.type === "MultipleChoice")) &&
                <>
                    <ul className='choice-con'>
                        <label className='label'></label>
                        {singleEdit.choices?.map((val: string, index: number) => <li key={index}>
                            <ChoiceInput place="Type here" type="text" adder={choices.length - 1 === index} value={val} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateChoice(index, e.target.value)} addChoices={addChoice} />
                        </li>
                        )}
                    </ul>
                    <Checkbox name='other' checked={singleEdit.other} style={{ marginBottom: "40px" }} onChange={onChange}><span className='other'>Enable “Other” option </span></Checkbox>
                </>
            }
            {data.type === "MultipleChoice" && <Input place="Enter number of choice allowed here" value={singleEdit.maxChoice} label="Max choice allowed" type="number" name="maxChoiceAllowed" />}
            <div className='cancel-save'>
                <span >
                    <img src={cancel} alt="img" />Delete question
                </span>
                <button onClick={addQuestion}>Save</button>
            </div>
        </EditCon>
    )
}

const EditCon = styled.div`  
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

export default EditQuestion