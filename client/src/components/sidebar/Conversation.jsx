import { useSocketContext } from "../../context/SocketContext"
import useConversation from "../../zustand/useConversation"

const Conversation = ({ user, lastIndex }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    const { onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(user._id)

    return (
        <div id={user._id}>
            <div
                className={`flex gap-4 items-center justify-between transition-all hover:bg-slate-400 hover:text-white rounded px-1.5 py-2.5 cursor-pointer ${
                    selectedConversation?._id === user._id &&
                    "bg-slate-400 text-white"
                }`}
                onClick={() => setSelectedConversation(user)}
            >
                <div className={`avatar ${isOnline && "online"} placeholder`}>
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                        <span className="text-xl">
                            {user.name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex gap-24 justify-between">
                        <p className="text-xl">{user.name}</p>
                        {/* <span>😽</span> */}
                    </div>
                </div>
            </div>

            {!lastIndex && <div className="divider my-0 py-0 h-3" />}
        </div>
    )
}
export default Conversation
