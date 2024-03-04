// Write your code here

import {useState} from 'react'

import {
  MainUnlockContainer,
  LockImage,
  LockedText,
  UnlockButton,
} from './styledComponents'

const Unlock = () => {
  const [current, setLock] = useState(true)

  const onChangeLock = () => {
    setLock(prevState => !prevState)
    console.log(current)
  }

  return (
    <MainUnlockContainer>
      {current ? (
        <>
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <LockedText> Your Device is Locked </LockedText>
          <UnlockButton onClick={onChangeLock} type="button">
            {' '}
            Unlock{' '}
          </UnlockButton>
        </>
      ) : (
        <>
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <LockedText>Your Device is Unlocked </LockedText>
          <UnlockButton type="button" onClick={onChangeLock}>
            Lock{' '}
          </UnlockButton>
        </>
      )}
    </MainUnlockContainer>
  )
}

export default Unlock
