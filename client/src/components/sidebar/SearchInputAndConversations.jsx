import Conversations from "./Conversations"
import SearchInput from "./SearchInput"

const SearchInputAndConversations = () => {
    const handleScrollTo = (user) => {
        document
            .getElementById(user)
            .scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <>
            <SearchInput handleScrollTo={handleScrollTo} />
            <Conversations />
        </>
    )
}
export default SearchInputAndConversations
