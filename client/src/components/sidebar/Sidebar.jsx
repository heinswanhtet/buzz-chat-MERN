import LogoutButton from "./LogoutButton"
import SearchInputAndConversations from "./SearchInputAndConversations"

const Sidebar = () => {
    return (
        <div className="border-r border-slate-500 p-4 w-[30%] flex flex-col">
            <SearchInputAndConversations />
            <LogoutButton />
        </div>
    )
}
export default Sidebar
