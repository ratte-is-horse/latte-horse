import React from 'react'
import '../View.css'
import styled from 'styled-components'

export const LeftWrap = () => {
  return (
    <div className="wrapper__left">
      <div className="wrapper__left__header">
        <div className="today">
          TODAY <span className="zero">0</span> | TOTAL <span className="count">12345</span>
        </div>
      </div>
      <div className="wrapper__left__body">
        <div className="header">
          <img alt='img' src='images/profile.PNG' className='headerGrey'>
          </img>
          <div className="line"></div>
          <div className="profileWrapper">
            <div className="profile">
              <i className="fas fa-user"></i> ┌─────＊♡　
            </div>
            <div className="profile">
              <i className="fas fa-phone-alt"></i> │ 　ME·
            </div>
            <div className="profile">
              <i className="fas fa-envelope"></i>│ 　LOVE·　
            </div>
            <div className="profile">
              <i className="fas fa-star"></i> │ 　FRIEND·
            </div>
            <div className="profile">
              <i className="fas fa-star"></i> └─────＊♡
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="feelWrapper">
            <div className="feel">오늘의 기분</div>
            <select className="feelSelect">
              <option>기쁨 😀</option>
              <option>슬픔 😭</option>
              <option>분노 😡</option>
              <option>행복 😊</option>
              <option>귀찮 😒</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export const RightBar = () => {
  return (
    <div className="wrapper_bar">
      <Box>ALL</Box>
      <Box>00's</Box>
      <Box>90's</Box>
      <Box>80's</Box>
      <Box>70's</Box>
    </div>
  )
}

const Box = styled.div`
  border: 1px solid #5098b3;
  width: 75px;
  height: 43px;
  margin-bottom:5px ;
  padding-left: 18px;
  display: flex;
  text-align: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #5098b3;
  font-size: 19px ;
  
`