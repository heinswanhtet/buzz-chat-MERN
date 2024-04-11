import { createContext, useContext, useState } from "react"
import MessageContainer from "../components/messages/MessageContainer"
import Sidebar from "../components/sidebar/Sidebar"

const showSideBarAndMessageContainerContext = createContext()

const Home = () => {
    const [showSideBar, setShowSideBar] = useState(true)
    const [showMessageContainer, setShowMessageContainer] = useState(false)

    return (
        <showSideBarAndMessageContainerContext.Provider
            value={{
                showSideBar,
                setShowSideBar,
                showMessageContainer,
                setShowMessageContainer,
            }}
        >
            <div className="w-[85%] p-4 flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
                <Sidebar setShowSideBar={setShowSideBar} />
                <MessageContainer
                    setShowMessageContainer={setShowMessageContainer}
                />
            </div>
        </showSideBarAndMessageContainerContext.Provider>
    )
}

export const useShowSideBarAndMessageContainerContext = () =>
    useContext(showSideBarAndMessageContainerContext)

export default Home
