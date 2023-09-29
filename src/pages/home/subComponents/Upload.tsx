import React from 'react'
import styled from 'styled-components';
import upIcon from "../images/upload.svg"
import InfoContainer from '../../../components/InfoContainer'

const Upload = () => {
  return (
    <InfoContainer title="Upload cover image">
      <UpCon>
        <div className='dashed'>
          <img src={upIcon} alt="img" />
          <p className='first'>Upload cover image</p>
          <p className='second'>16:9 ratio is recommended. Max image size 1mb</p>
        </div>
      </UpCon>
    </InfoContainer>
  )
}

const UpCon = styled.div`  
    width: 100%; 
    padding: 30px;
    cursor: pointer;
    .dashed{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 210px;
      border-radius: 5px;
      border: 1px dashed #000; 
      box-shadow: 3px 3px 9px 0px rgba(190, 190, 190, 0.13);
      img{
        margin-bottom:10px;
      }
      .first{
        color: #000;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.5%; /* 22.33px */
      }
      .second{
        color: #979797;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 159.5%; /* 22.33px */
        margin-left:10px;
      }
    }
`;

export default Upload