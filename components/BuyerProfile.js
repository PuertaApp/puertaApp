import React from "react";
import styled from "styled-components";
import EditIcon from "./../components/icons/EditIcon";
import HeartIconFilled from "./../components/icons/HeartIconFilled";
import MapMarkerIcon from './../components/icons/MapMarkerIcon';
import EyeIcon from "./../components/icons/EyeIcon"

function BuyerProfile() {
  return (
    <BuyerProfileStyles>
      <div className="container">
        <div className="profile-header">
          <div className="profile-image">
            <img src="https://via.placeholder.com/90" alt="Profile Picture" />
          </div>
          <div className="profile-edit">
            <EditIcon />
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-name">
              <h4> Isla McNiel</h4>
              <p>(256) 568-5524</p>
          </div>
          <div className="location">
              <div className='user-location-svg'>
                  <MapMarkerIcon 
                    width={41}
                    height={33}
                  />
              </div>
              <p className='user-location-address'>Olmsted Falls, OH 44039</p>
          </div>
          <div className="favorite">
              <div className='user-favorite-svg'>
                  <HeartIconFilled
                    width={41}
                    height={33}
                  />
              </div>
              <p className='user-favorite-text'> 7 Favorite Properties</p>
          </div>
          <div className="dislike">
              <div className='user-dislike-svg'>
                  <EyeIcon 
                    width={41}
                    height={33}
                  />
              </div>
              <p className='user-dislike-address'> 12 Dislikes Properties</p>
          </div>

        </div>
      </div>
    </BuyerProfileStyles>
  );
}

export default BuyerProfile;

const BuyerProfileStyles = styled.div`
  .container {
      background: red;
    max-width: 532px;
    height: 750px;
    margin: 28px auto;
    border-radius: 41px;
    background: linear-gradient(165.12deg, #fafafa 0%, #f5f5f5 100.03%);
    box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
      -12px -12px 24px #ffffff;
    .profile-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 22px;
      .profile-image {
        width: 90.68px;
        height: 98.18px;
        background: linear-gradient(154.29deg, #fafafa 0%, #f5f5f5 100.03%);
        box-sizing: border-box;
        /* outter shadow */
        box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
          -6px -6px 12px rgba(255, 255, 255, 0.8);
        border-radius: 15px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border-radius: 15px;
        }
      }
      .profile-edit {
        width: 90.68px;
        height: 98.18px;
        background: linear-gradient(154.29deg, #fafafa 0%, #f5f5f5 100.03%);
        border: 1px solid rgba(255, 255, 255, 0.6);
        box-sizing: border-box;
        /* outter shadow */
        box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
          -6px -6px 12px rgba(255, 255, 255, 0.8);
        border-radius: 15px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        justify-content: center;
      }
    }
    .profile-info{
        padding: 0px 22px;
        .profile-name{
            h4{
                font-family: Fira Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 30px;
                line-height: 36px;
                display: flex;
                align-items: flex-end;
                font-feature-settings: 'zero' on;
                color: #141940;
                margin: 10px 2px;
            }
            p{
                font-family: Fira Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 26px;
                color: rgba(20, 25, 64, 0.71);
                margin: 10px 2px;
            }
        }

        .location, .favorite ,.dislike{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 20px 0px;
            p{
                font-family: Fira Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 22px;
                line-height: 26px;
                color: #141940;

            }
        }
        .user-location-svg, .user-favorite-svg, .user-dislike-svg{
            display: flex;
        justify-content: flex-start;
        align-items: center;
            margin-right: 15px;
            background: linear-gradient(130.38deg, #FAFAFA 0%, #F5F5F5 100.03%);
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-sizing: border-box;
            border-radius: 10px;
            box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.8);
            height:50px;
            width: 50px;
        }
    }
  }
`;
