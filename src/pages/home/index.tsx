import React, { useState, useEffect } from 'react'
import AppLayout from '../../layout/AppLayout'
import styled from 'styled-components';
import Upload from './subComponents/Upload';
import Profile from './subComponents/Profile';
import Additional from './subComponents/Additional';
import Personal from './subComponents/Personal';
import { getDetail } from "../../services/getForm"
import { InitialState } from "../../utils/types"
import { submitForm } from "../../services/updateForm"

const Index = () => {

  const initialState: InitialState = {
    coverImage: 'http://example.com',
    personalInformation: {
      firstName: {
        internalUse: false,
        show: false,
      },
      lastName: {
        internalUse: false,
        show: false,
      },
      emailId: {
        internalUse: false,
        show: false,
      },
      phoneNumber: {
        internalUse: false,
        show: false,
      },
      nationality: {
        internalUse: false,
        show: false,
      },
      currentResidence: {
        internalUse: false,
        show: false,
      },
      idNumber: {
        internalUse: false,
        show: false,
      },
      dateOfBirth: {
        internalUse: false,
        show: false,
      },
      gender: {
        internalUse: false,
        show: false,
      },
      personalQuestions: [],
    },
    profile: {
      education: {
        mandatory: false,
        show: false,
      },
      experience: {
        mandatory: false,
        show: false,
      },
      resume: {
        mandatory: false,
        show: false,
      },
      profileQuestions: [],
    },
    customisedQuestions: [],
  };

  const [state, setState] = useState<InitialState>(initialState); 
  const [loading, setLoading] = React.useState(false)

  const handleRegister = async () => {
    try {
        setLoading(true)
        const response = await submitForm({data:{
          id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          type: "applicationForm",
          attributes:state,
        }});
        console.log(response);
        setLoading(false) 
    } catch (error:any) {
        setLoading(false)
        alert(error.message);
    }
};

  useEffect(() => {
    handleCategory()
  }, []);

  const handleCategory = async () => {
    try {
      const response = await getDetail();
      setState(prev => ({...response.data.attributes})) 
    } catch (error: any) {
      alert(error.message);
    }
  };

  console.log(state);


  return (
    <AppLayout>
      <Con>
        <Upload setState={setState} info={state.coverImage} handleRegister={handleRegister}/>
        <Personal setState={setState} info={state.personalInformation} handleRegister={handleRegister}/>
        <Profile setState={setState} info={state.profile} handleRegister={handleRegister}/>
        <Additional setState={setState} info={state.customisedQuestions} handleRegister={handleRegister}/>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
    width: 100%; 
`;


export default Index