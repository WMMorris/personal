import React, { useState } from 'react'

export const UserContext = React.createContext()

 const UserProvider = (props) => {
     const initial = {navMenu : ''}

  const [state, setState] = useState(initial)

  function handleNavMenu(e){
    if (e === '') {
        setState({navMenu : 'toggled'})
        } else {
        setState({navMenu : ''})
        }
}

  return (
    <UserContext.Provider
    value={{
        ...state,
        handleNavMenu
      }}>
      { props.children }
    </UserContext.Provider>
  )
}

export default UserProvider