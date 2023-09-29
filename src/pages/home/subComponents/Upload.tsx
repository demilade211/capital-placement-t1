import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import upIcon from "../images/upload.svg"
import InfoContainer from '../../../components/InfoContainer'
import cancel from "../images/cancel.svg"

const Upload: React.FC<any> = ({setState,info} ) => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (name === "media" && files && files.length > 0) {
      const selectedFile = files[0];
      setAvatar(selectedFile);
      setAvatarPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <InfoContainer title="Upload cover image">
      <UpCon>
        {avatarPreview === null &&
          <div className='dashed' onClick={() => inputRef?.current?.click()}>
            <input id='imageInput' name='media' type="file" accept="image/*" hidden ref={inputRef} onChange={handleChange} />
            <img src={upIcon} alt="img" />
            <p className='first'>Upload cover image</p>
            <p className='second'>16:9 ratio is recommended. Max image size 1mb</p>
          </div>
        }
        {avatarPreview !== null &&
          <div className='img-con'>
            <div className='img'><img src={avatarPreview} alt="img" /></div>
            <div className='del-con'>
              <span onClick={() => {
                setAvatar(null)
                setAvatarPreview(null)
              }}>
                <img src={cancel} alt="img" />Delete & re-upload
              </span>
            </div>
          </div>
        }
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
    .img-con{
      width: 100%; 
      border-radius: 20px;
      background: #FFF;
      box-shadow: 3px 3px 14px 0px rgba(190, 190, 190, 0.30);
      .img{
        width: 100%;
        height: 80%;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .del-con{
        width: 100%;
        height: 20%;
        padding:20px;
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
      }
    }
`;

export default Upload