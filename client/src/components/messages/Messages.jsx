import { useEffect, useRef } from "react"
import useGetMessage from "../../hooks/useGetMessage"
import MessageSkeleton from "../../skeletons/MessageSkeleton"
import Message from "./Message"

const Messages = () => {
    const { loading, messages } = useGetMessage()
    const lastMessageRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)
    }, [messages])

    return (
        <div className="flex-1 px-2 overflow-auto">
            {loading &&
                [...Array(3)].map((_, index) => (
                    <MessageSkeleton key={index} />
                ))}
            {!loading && messages.length === 0 && (
                <p className="text-center">
                    Send a message to start the conversation
                </p>
            )}
            {!loading &&
                messages.map((message) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Message key={message._id} message={message} />
                    </div>
                ))}
        </div>
    )
}
export default Messages
