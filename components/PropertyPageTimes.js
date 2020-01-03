import React from 'react'
import CalendarIcon from './icons/CalendarIcon'
import styled from 'styled-components';

export default function PropertyPageTimes() {
    return (

        <PropertyPageTimesStyles>
            <div className="times">
                <div className="icon">
                    <CalendarIcon className="icon"/>
                </div>
                <p>3:00</p>
            </div>

            <div className="times">
                <div className="icon">
                    <CalendarIcon className="icon"/>
                </div>
                <p>3:00</p>
            </div>

            <div className="times">
                <div className="icon">
                    <CalendarIcon className="icon"/>
                </div>
                <p>3:00</p>
            </div>
                
        </PropertyPageTimesStyles>
    )
}

const PropertyPageTimesStyles = styled.div`

        width: 542px;
        margin: 0 auto;
        border: 1px solid lightgrey;
        height: 100%;
        background: linear-gradient(165.12deg, #fafafa 0%, #f5f5f5 100.03%);
        border-radius: 41px;
        box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
           -12px -12px 24px #ffffff;
        margin-top: 3rem;   
        .times{
            margin: 1rem;  
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            .icon{
                padding: .50rem;
                background: linear-gradient(129.61deg, #FAFAFA 0%, #F5F5F5 100.03%);
                border: 1px solid rgba(255, 255, 255, 0.6);
                box-sizing: border-box;
                /* outter shadow */

                box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.8);
                border-radius: 23px;
            }
            p{
                font-family: Fira Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 28px;
                line-height: 16px;
                color: rgba(20, 25, 64, 0.7);
                opacity: 0.7;
                margin: 0;
                margin-right: 1rem;
            }
        }
`;
