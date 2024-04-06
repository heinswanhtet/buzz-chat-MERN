import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[550px] flex flex-col">
      <div className="">
        <span>To:</span> <span>Phone Htet Myint</span>
      </div>

      <Messages />
      <MessageInput />
    </div>
  );
};
export default MessageContainer;
