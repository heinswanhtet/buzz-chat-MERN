import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime"
import useConversation from "../../zustand/useConversation"

const Message = ({ message }) => {
    const { user } = useAuthContext()
    const { selectedConversation } = useConversation()
    const isFromMe = message.sender === user.userId
    const chatClassName = isFromMe ? "chat-end" : "chat-start"
    // const profileIcon = isFromMe
    //     ? user.name.charAt(0).toUpperCase()
    //     : selectedConversation.name.charAt(0).toUpperCase()
    const chatHeader = isFromMe ? user.name : selectedConversation.name
    const bubbleBgColor = !isFromMe ? "bg-white text-black" : ""
    // const formattedTime = message.createdAt
    const formattedTime = extractTime(message.createdAt)
    const addShake = message.shake ? "shake" : ""

    return (
        <div>
            <div className={`chat ${chatClassName} ${addShake}`}>
                <div className="chat-header px-2">{chatHeader}</div>
                <div className={`chat-bubble ${bubbleBgColor}`}>
                    {message.message}
                </div>
                <div className="chat-footer opacity-50">
                    <time className="text-xs opacity-50">{formattedTime}</time>
                </div>
            </div>
        </div>
    )
}
export default Message
