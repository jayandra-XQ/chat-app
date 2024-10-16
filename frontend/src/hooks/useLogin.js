import { useState } from "react"

import { useAuthContext } from '../context/AuthContext'
import toast from "react-hot-toast"


const useLogin = () => {
  const [loading, setLoading] = useState(false)

  const { setAuthUser} = useAuthContext()
  
  const login = async (username, password) => {

    const success = handleInputErrors(username , password)
    if (!success) return;

    setLoading(true)

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()
      console.log(data)

      //localStorage
      localStorage.setItem("chat-user", JSON.stringify(data))

      //context
      setAuthUser(data)
      
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { login, loading }
}

export default useLogin

function handleInputErrors(  username, password ) {
  // Implement your input validation logic here
  if ( !username || !password ) {
    toast.error("Please fill in all fields")
    return false;
  }
  return true; // Return true if all inputs are valid, false otherwise
}