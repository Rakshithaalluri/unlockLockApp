// Style your elements here
import styled from 'styled-components'

export const MainUnlockContainer = styled.div`
  background-image: linear-gradient(#0b0c1e, #3c2940);
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LockImage = styled.img`
  height: 120px;
  width: 110px;
`

export const LockedText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 23px;
  margin-bottom: 80px;
`

export const UnlockButton = styled.button`
  background-color: #06b6d4;
  height: 40px;
  width: 80px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
`
