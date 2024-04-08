import useGetMessage from "../../hooks/useGetMessage"
import Message from "./Message"

const Messages = () => {
    const { loading, messages } = useGetMessage()

    console.log(messages)

    return (
        <div className="flex-1 px-2 overflow-auto">
            <Message placing={"chat-start"} />
            <Message placing={"chat-end"} />
            <Message placing={"chat-start"} />
            <Message placing={"chat-end"} />
            <Message placing={"chat-start"} />
            <Message placing={"chat-end"} />
        </div>
    )
}
export default Messages
