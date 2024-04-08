import { useState } from "react"
import axios from "axios"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"

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
            // console.log(data)
            setMessages([...messages, data])
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.msg)
        } finally {
            setLoading(false)
        }
    }

    return { loading, sendMessage }
}

export default useSendMessage
