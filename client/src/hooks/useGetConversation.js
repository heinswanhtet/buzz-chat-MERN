import { useEffect, useState } from "react"
import axios from "axios"

const useGetConversation = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    const fetchConversations = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(
                "/api/v1/users/all-users-excluding-me"
            )
            setConversations(data.users)
        } catch (error) {
            toast.error(error.response.data.msg)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchConversations()
    }, [])

    return { loading, conversations }
}

export default useGetConversation
