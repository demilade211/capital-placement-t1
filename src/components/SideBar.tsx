import React from 'react'
import styled from 'styled-components';
import ham from "./images/ham.svg";
import toDo from "./images/do.svg";
import home from "./images/home.svg";

const SideBar = () => {
    return (
        <Con>
            <div className='top'>
                <img src={ham} alt="img" />
            </div>
            <div className='bottom'>
                <img src={home} alt="img" />
                <img src={toDo} alt="img" />
            </div>
        </Con>
    )
}

const Con = styled.div`  
    width: 80px;
    height: 100vh;
    background: #FFF;
    box-shadow: 0px 4px 23px 0px rgba(0, 0, 0, 0.05);
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    position: fixed;
    .top{
        margin-bottom:50px;
    }
    .bottom{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            margin-bottom:30px;
        }
    }
`;

export default SideBar