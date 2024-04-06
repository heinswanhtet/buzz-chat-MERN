import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white outline-none"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 pe-4 flex items-center"
        >
          <IoIosSend className="text-white w-6 h-6" />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
