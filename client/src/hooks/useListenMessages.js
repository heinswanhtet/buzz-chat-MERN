import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"

const useListenMessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation()

    useEffect(() => {
        // console.log("outside", messages)

        socket?.on("newMessage", (newMessage) => {
            // console.log("inner", messages)
            newMessage.shake = true
            setMessages([...messages, newMessage])
        })

        return () => socket?.off("newMessage")
    }, [socket, messages, setMessages])
}
export default useListenMessages
