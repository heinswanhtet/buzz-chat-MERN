import Message from "./Message";

const Messages = () => {
  return (
    <div className="flex-1 px-2 overflow-auto">
      <Message placing={"chat-start"} />
      <Message placing={"chat-end"} />
      <Message placing={"chat-start"} />
      <Message placing={"chat-end"} />
      <Message placing={"chat-start"} />
      <Message placing={"chat-end"} />
    </div>
  );
};
export default Messages;
