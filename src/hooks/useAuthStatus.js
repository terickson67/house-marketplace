import { useEffect, useState, useRef } from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingState] = useState(true)
    const isMounted = useRef(true)

    useEffect (() => {
        if(isMounted){
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
            if(user) {
                setLoggedIn(true)
            }
            setCheckingState(false)
            })
        }

        return () => {
            isMounted.current = false
        }
    }, [isMounted])


  return {loggedIn, checkingStatus}
}

export default useAuthStatus
