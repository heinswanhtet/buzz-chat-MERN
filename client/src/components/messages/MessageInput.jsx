import { IoIosSend } from "react-icons/io"
import useSendMessage from "../../hooks/useSendMessage"
import { useState } from "react"

const MessageInput = () => {
    const [values, setValues] = useState({
        message: "",
    })
    const { loading, sendMessage } = useSendMessage()

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!values.message) return
        await sendMessage({ ...values })
        setValues({ message: "" })
    }

    return (
        <form autocomplete="off" className="px-4 my-3" onSubmit={onSubmit}>
            <div className="w-full relative">
                <input
                    type="text"
                    autocomplete="false"
                    placeholder="Send a message"
                    className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white outline-none"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 end-0 pe-4 flex items-center"
                >
                    {loading ? (
                        <span className="loading loading-ring loading-md text-white"></span>
                    ) : (
                        <IoIosSend className="text-white w-6 h-6" />
                    )}
                </button>
            </div>
        </form>
    )
}
export default MessageInput
