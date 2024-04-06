import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[550px] flex flex-col">
      <div className="bg-[#2b3440] px-4 py-2 mb-2">
        <span className="label-text text-white">To:</span>{" "}
        <span className="text-white font-bold">Phone Htet Myint</span>
      </div>

      <Messages />
      <MessageInput />
    </div>
  );
};
export default MessageContainer;
