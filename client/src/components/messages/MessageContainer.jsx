import { useEffect } from "react"
import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { BsChatQuote } from "react-icons/bs"
import { useShowSideBarAndMessageContainerContext } from "../../pages/Home"
import { IoIosArrowBack } from "react-icons/io"

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    const {
        showSideBar,
        showMessageContainer,
        setShowSideBar,
        setShowMessageContainer,
    } = useShowSideBarAndMessageContainerContext()

    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div
            className={`${
                showMessageContainer ? "block" : "hidden"
            }  h-[72vh] md:h-auto md:flex md:min-w-[550px] flex-1 flex flex-col`}
        >
            {!selectedConversation ? (
                <ChatNotSelected />
            ) : (
                <>
                    <div className="bg-[#2b3440] px-4 py-2 mb-2 flex items-center justify-between">
                        <div className="block md:hidden">
                            <button
                                type="button"
                                className="flex items-center justify-center"
                                onClick={() => {
                                    setShowSideBar(!showSideBar)
                                    setShowMessageContainer(
                                        !showMessageContainer
                                    )
                                }}
                            >
                                <IoIosArrowBack className="text-white" />
                            </button>
                        </div>
                        <div className="label-text text-white">
                            To:{" "}
                            <span className="text-white font-bold">
                                {selectedConversation.name}
                            </span>
                        </div>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

const ChatNotSelected = () => {
    const { user } = useAuthContext()

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:tex-lg md:text-2xl text-gray-700 font-semibold flex flex-col items-center gap-2">
                <p>Sup!!!🔥🔥🔥</p>
                <p>Welcome {user.name.toUpperCase()} 🤗</p>
                <p>Select a chat to start messaging 💬</p>
                <BsChatQuote className="text-2xl md:text-4xl text-center" />
            </div>
        </div>
    )
}
export default MessageContainer
