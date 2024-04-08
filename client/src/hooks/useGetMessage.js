import { useEffect, useState } from "react"
import axios from "axios"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"

const useGetMessage = () => {
    const [loading, setLoading] = useState(false)
    const { selectedConversation, messages, setMessages } = useConversation()

    const fetchMessages = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(
                `/api/v1/messages/${selectedConversation._id}`
            )
            // console.log(data)
            setMessages(data)
        } catch (error) {
            toast.error(error.response.data.msg)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (selectedConversation?._id) {
            fetchMessages()
        }
    }, [selectedConversation?._id, setMessages])

    return { loading, messages }
}

export default useGetMessage
