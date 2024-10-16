import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetConversations = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/users`);
        const data = await res.json();
        setConversations(data)

      } catch (error) {
          toast.error(error.message)
      }
    }

    getConversation()
  }, [])

  return { loading, conversations }
}

export default useGetConversations