import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"
import notificationSound from "../assets/sounds/notification.mp3"

const useListenMessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation()

    useEffect(() => {
        // console.log("outside", messages)

        socket?.on("newMessage", (newMessage) => {
            // console.log("inner", messages)
            newMessage.shake = true
            const sound = new Audio(notificationSound)
            sound.play()
            setMessages([...messages, newMessage])
        })

        return () => socket?.off("newMessage")
    }, [socket, messages, setMessages])
}
export default useListenMessages
