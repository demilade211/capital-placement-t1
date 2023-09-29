import React from 'react'
import AppLayout from '../../layout/AppLayout' 
import styled from 'styled-components';  
import Upload from './subComponents/Upload';
import Profile from './subComponents/Profile';
import Additional from './subComponents/Additional';
import Personal from './subComponents/Personal';

const index = () => { 
  return (
    <AppLayout>
      <Con> 
        <Upload/>
        <Personal/>
        <Profile/>
        <Additional/>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
    width: 100%; 
`;
 

export default index