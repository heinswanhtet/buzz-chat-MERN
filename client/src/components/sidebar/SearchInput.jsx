import { FcSearch } from "react-icons/fc"
import toast from "react-hot-toast"
import { useState } from "react"
import useGetConversation from "../../hooks/useGetConversation"
import useConversation from "../../zustand/useConversation"

const SearchInput = ({ handleScrollTo }) => {
    const [search, setSearch] = useState("")
    const { conversations } = useGetConversation()
    const { setSelectedConversation } = useConversation()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!search) return
        if (search.length < 3) {
            return toast.error("Please type at least 3 characters to search")
        }

        const conversation = conversations.find((c) =>
            c.name.toLowerCase().includes(search.toLowerCase())
        )
        if (conversation) {
            setSelectedConversation(conversation)
            handleScrollTo(conversation._id)
            setSearch("")
        } else {
            toast.error("No such user found!")
        }
    }

    return (
        <form className="flex items-center gap-2 mb-2.5" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search...."
                className="input input-bordered input-sm rounded-full w-full"
                value={search}
                onChange={handleChange}
            />
            <button type="submit">
                <FcSearch className="w-7 h-7 outline-none" />
            </button>
        </form>
    )
}
export default SearchInput
