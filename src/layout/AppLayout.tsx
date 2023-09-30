import React from 'react'
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import tri from "./images/try.svg";

const AppLayout: React.FC<any> = ({ children }) => {
    return (
        <Con>
            <SideBar />
            <div className='right-con'>
                <nav>

                </nav>
                <div className='tab-con'>
                    <Tab active={false}>
                        <div className='left'>
                            <p>Program Details</p>
                        </div>

                    </Tab>
                    <Tab active={true}>
                        <div className='left'>
                            <p>Application Form</p>
                        </div>
                        <div className='right'>
                            <img src={tri} alt="img" />
                        </div>
                    </Tab>
                    <Tab active={false}>
                        <div className='left'>
                            <p>Workflow</p>
                        </div>
                    </Tab>
                    <Tab active={false}>
                        <div className='left'>
                            <p>Preview</p>
                        </div>
                    </Tab>
                </div>
                <div className='main-con'>
                    {children}
                </div>
            </div>
        </Con>
    )
}

const Con = styled.div`  
    width: 100%;
    height: 100vh;   
    .right-con{   
        margin-left:80px; 
        nav{ 
            height: 80px;
        }
        .tab-con{
            width: 100%; 
            border-radius: 9px;
            background: #FFF;
            box-shadow: 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
            display: grid;
            grid-template-columns:1fr 1fr 1fr 1fr;
            @media (max-width: 1200px) {  
                grid-template-columns:1fr 1fr;
            }
            @media (max-width: 600px) {  
                grid-template-columns:1fr;
            }
        }
    }
    .main-con{
        width: 100%;
        padding: 70px;
        @media (max-width: 600px) {  
            width: 100%;
            padding:30px;
            display: flex;
            justify-content: center;
        }
    }
`;

const Tab = styled.div<{ active: boolean }>`  
    width: 100%; 
    height: 90px;
    display: flex;
    .left{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background:${({ active }) => active ? "#00635B" : "none"};
        cursor: pointer;
        p{
            color:${({ active }) => active ? "#FFF" : "#000"};
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-align: center;
        }
    }
    .right{
        display: flex;
        width: 0%;
        height: 100%;
        align-items: center;
        margin-left:-1px;
        img{
            width: 90%;
            height: 90%;
        }
    }
`;



export default AppLayout