import React from 'react';
import styled from 'styled-components';
import EyeIcon from './icons/EyeIcon'
import HeartIconFilled from './icons/HeartIconFilled'

function PropertyCard() {
    return (
        <PropertyCardStyles>
            <div className='container'>
                <div className='property-card-image'>
                    <img src='https://via.placeholder.com/532/' alt='Property Image'/>
                </div>
                <div className='property-card-text'>
                    <div className='card-text-top'>
                        <h3>$ 374900</h3>
                        <div className='house-info'>
                            <p className='bds'> 4 bds <span>{" | "}</span> </p> 
                            <p className='brs'> <span>{" | "} </span> 3 brs <span>{" | "}</span> </p> 
                            <p className='sqft'><span>{" | "}</span> 2839 sqft</p>
                        </div>
                    </div>
                    <div className='card-text-middle'>
                        <h4>1234 Millers Rd, Cleveland, OH 44066</h4>
                        <div className='house-availability'>
                            <div className='status'></div>
                            <p>House available for showings now</p>
                        </div>
                    </div>
                    <div className='card-text-bottom'>
                        <div className='unlike'> 
                            <EyeIcon 
                                height = {30}
                                width={30}/> 
                                </div>
                        <div className='view'> view</div>
                        <div className='favorite'>
                            <HeartIconFilled 
                                height = {30}
                                width={30}/> 
                        </div>
                    </div>
                </div>
            </div>
        </PropertyCardStyles>
    )
}

export default PropertyCard

const PropertyCardStyles = styled.div`
    max-width: 532px;
    height: 671px;
    margin: 0 auto;
   .container{ 
        width: 100%;
        height: 100%;
        border-radius: 41px;
        background: linear-gradient(165.12deg, #fafafa 0%, #f5f5f5 100.03%);
		box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
			-12px -12px 24px #ffffff;
        .property-card-image{
            height: 400px;
            img{
                border-top-left-radius: 41px;
                border-top-right-radius: 41px;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                }
            }
        .property-card-text{
            display: flex;
            justify-content: center;
            flex-direction: column;
            .card-text-top{
                display: flex;
                justify-content: space-between;
                align-content: center;
                flex-wrap: wrap;
                h3{
                    margin: 20px 0 0 20px;
                    font-family: Fira Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 42px;

                }
                .house-info{
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    margin-right: 20px;
                    font-size: .8rem;
                    p{
                        font-family: Fira Sans;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 22px;
                        /* identical to box height */
                        color: #141940;
                        opacity: 0.7;
                    }
                }
            }
            .card-text-middle{
                width: 100%;
                font-family: Fira Sans;
                font-style: normal;
                font-weight: normal;
                line-height: 31px;
                
                h4{
                    font-size: 26px;
                    color: rgba(20, 25, 64, 0.71);
                    margin: 15px 0 0 20px;
                    cursor: pointer;
                }
                .house-availability{
                    position: relative;
                    display: flex;
                    align-content: center;
                    justify-content: flex-start;
                    align-self: baseline;
                    margin-left: 20px;
                    bottom: 0;
                    margin-top: 48px;
                    .status{
                        height: 15px;
                        width: 15px;
                        background-color: #78E08F;
                        border-radius: 50%;
                    }
                    p{
                        font-family: Fira Sans;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 19px;
                        color: #141940;
                        opacity: 0.5;
                        margin: 0px 5px
                        }
                    }
                }
            .card-text-bottom{
                width: 470.11px;
                height: 50px;
                display: flex;
                justify-content: space-between;
                margin-top: 21px;
                align-self: center;
                .view{
                    width: 128px;
                    height: 54px;
                    padding: 8px 0px 7px 0px;
                    font-family: Fira Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 30px;
                    line-height: 36px;
                    text-align: center;
                    color: #6B7AFF;
                    background: linear-gradient(154.29deg, #FAFAFA 0%, #F5F5F5 100.03%);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    box-sizing: border-box;
                    /* outter shadow */
                    box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.8);
                    border-radius: 15px;
                    cursor: pointer;
                }
                .favorite, .unlike{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    justify-content: center;
                    width: 51px;
                    height: 50px;
                    background: linear-gradient(130.38deg, #FAFAFA 0%, #F5F5F5 100.03%);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    border-radius: 15px;
                    box-sizing: border-box;
                    box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.8);
                    cursor: pointer;
                    }
          
                }
            }
        }

`;