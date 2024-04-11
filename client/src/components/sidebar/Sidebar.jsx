import { useShowSideBarAndMessageContainerContext } from "../../pages/Home"
import LogoutButton from "./LogoutButton"
import SearchInputAndConversations from "./SearchInputAndConversations"

const Sidebar = () => {
    const { showSideBar } = useShowSideBarAndMessageContainerContext()
    return (
        <div
            className={`${
                showSideBar ? "block" : "hidden"
            }  flex flex-col h-[72vh] md:h-auto md:border-r md:border-slate-500 p-4 w-full md:w-[30%] md:flex md:flex-col`}
        >
            <SearchInputAndConversations />
            <LogoutButton />
        </div>
    )
}
export default Sidebar
