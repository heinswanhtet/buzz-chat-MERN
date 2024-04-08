import useGetMessage from "../../hooks/useGetMessage"
import MessageSkeleton from "../../skeletons/MessageSkeleton"

const Messages = () => {
    const { loading, messages } = useGetMessage()

    return (
        <div className="flex-1 px-2 overflow-auto">
            {loading &&
                [...Array(3)].map((_, index) => (
                    <MessageSkeleton key={index} />
                ))}
        </div>
    )
}
export default Messages
