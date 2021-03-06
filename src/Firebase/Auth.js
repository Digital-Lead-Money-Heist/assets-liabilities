import React,{useEffect, useState} from 'react'
import { auth } from './firebaseFunctions'
import { CircularProgress } from '@material-ui/core'

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [pending,setPending] = useState(true)

    useEffect(()=>{
        auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setPending(!pending)
        })
    },[])

    if(pending){
        return <div id='loader'><CircularProgress/></div>
    }
  return (
    <AuthContext.Provider
        value={{currentUser}}
    >
        {children}
    </AuthContext.Provider>
  )
}
