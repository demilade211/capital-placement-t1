import React from 'react'
import styled from 'styled-components';
import SideBar from '../components/SideBar';


const AppLayout: React.FC<any> = ({ children }) => {
    return (
        <Con>
            <SideBar />
            <div className='right-con'>
                <nav>

                </nav>
                <div className='tab-con'>
                    <Tab active={false}>
                        <p>Program Details</p>
                    </Tab>
                    <Tab active={true}>
                        <p>Application Form</p>
                    </Tab>
                    <Tab active={false}>
                        <p>Workflow</p>
                    </Tab>
                    <Tab active={false}>
                        <p>Preview</p>
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
            height: 90px;
            border-radius: 9px;
            background: #FFF;
            box-shadow: 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
            display: grid;
            grid-template-columns:1fr 1fr 1fr 1fr;
        }
    }
    .main-con{
        padding: 70px;
    }
`;

const Tab = styled.div<{ active: boolean }>`  
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
    }
`;



export default AppLayout