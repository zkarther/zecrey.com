import React from 'react'
import styled from 'styled-components'
const logo1 = require('@/public/logo1.svg')
import cute from '@/public/section1/cute.svg'

const InputEmail = styled.input`
  display: block;
  width: 455px;
  height: 52px;
  background: #222222 0% 0% no-repeat padding-box;
  border: 2px solid #2ad4d9;
  border-radius: 5px;
  padding: 10px 20px;
  text-align: left;
  font: normal normal normal 24px/32px IBM Plex Sans;
  letter-spacing: 0px;
  color: #e4e4e4;
  &:focus {
    outline: none;
  }
`

const Style = styled.div`
  width: 100vw;
  min-height: calc(100vh - 110px);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  div.bee {
    margin-top: 128px;
    padding: 12px 69px 6px 51px;
    background: #2ad4d9 0% 0% no-repeat padding-box;
    border-radius: 5px;
    text-align: left;
    font: normal normal bold 32px/38px Lexend;
    letter-spacing: 0px;
    color: #222222;
  }
  div.banner {
    margin-top: 25px;
    text-align: center;
    font: normal normal bold 100px/120px Lexend;
    letter-spacing: 0px;
    color: #e4e4e4;
    text-shadow: 0px 3px 12px #00000040;
    text-transform: uppercase;
  }
  div.email {
    margin-top: 69px;
    position: relative;
    display: flex;
    align-items: center;
    input {
      transition: transform 0.2s ease-out;
    }
    img {
      position: absolute;
      bottom: 0;
      right: 5px;
      height: 26px;
      z-index: -1;
      transition: transform 0.2s;
    }
    &:hover {
      input {
        transform: translateX(-20px);
        cursor: pointer;
      }
      img {
        transform: translateX(19px);
      }
    }
    &.active {
      img {
        display: none;
      }
      input {
        transform: translateX(-20px);
      }
    }
  }
  > img {
    height: 52px;
    margin-top: 141px;
  }
`

// @TODO: 邮箱地址发送到服务器
export const Section1 = () => {
  const [email, setEmail] = React.useState('Send us your email address')
  const [inputFocus, setInputFocus] = React.useState(false)
  return (
    <Style>
      <div className='bee'>New Bee Product</div>
      <div className='banner'>
        Brings privacy
        <br />
        value for assets.
      </div>
      <div className={`email ${inputFocus ? 'active' : ''}`}>
        <InputEmail
          type='email'
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
          onFocus={() => {
            setInputFocus(true)
          }}
          onBlur={() => {
            setInputFocus(false)
          }}
        />
        <img src={cute} />
      </div>
      <img src={logo1} alt='logo' />
    </Style>
  )
}
