import React, { useState } from 'react'

export const UserContext = React.createContext()

 const UserProvider = (props) => {

  const [navMenu, setNavMenue] = useState('')

  function handleNavMenu(e){
    if (e === '') {
    setNavMenue('toggled')
        } else {
    setNavMenue('')
        }
}

  return (
    <UserContext.Provider
    value={{
        ...navMenu,
        handleNavMenu
      }}>
      { props.children }
    </UserContext.Provider>
  )
}

export default UserProvider