import { useState } from "react"
import axios from "axios"
import useConversation from "../zustand/useConversation"

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const { selectedConversation, messages, setMessages } = useConversation()

    const sendMessage = async ({ message }) => {
        setLoading(true)
        try {
            const { data } = await axios.post(
                `/api/v1/messages/send/${selectedConversation._id}`,
                { message }
            )
            setMessages([...messages, data.message])
        } catch (error) {
            toast.error(error.response.data.msg)
        } finally {
            setLoading(false)
        }
    }

    return { loading, sendMessage }
}

export default useSendMessage
