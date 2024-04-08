import useGetConversation from "../../hooks/useGetConversation"
import Conversation from "./Conversation"

const Conversations = () => {
    const { loading, conversations: users } = useGetConversation()
    return (
        <div className="py-2 flex flex-col overflow-auto mb-8 pr-2">
            {loading && (
                <div className="p-4 h-screen flex justify-center items-center">
                    <span className="loading loading-spinner text-secondary"></span>
                </div>
            )}
            {users.map((user, index) => (
                <Conversation
                    key={user._id}
                    user={user}
                    lastIndex={index === users.length - 1}
                />
            ))}
        </div>
    )
}
export default Conversations
