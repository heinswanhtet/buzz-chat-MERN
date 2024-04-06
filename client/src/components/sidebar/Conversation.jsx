const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center justify-between hover:bg-sky-300 rounded px-2 py-1.5 cursor-pointer">
        <div className="avatar online placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-10">
            <span className="text-xl">H</span>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex gap-3 justify-between">
            <p>Hein Swan Htet</p>
            <span>😽</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-3" />
    </>
  );
};
export default Conversation;
