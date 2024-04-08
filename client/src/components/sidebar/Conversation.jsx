const Conversation = () => {
    return (
        <>
            <div className="flex gap-3 items-center justify-between transition-all hover:bg-slate-400 hover:text-white rounded px-2 py-1.5 cursor-pointer">
                <div className="avatar online placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                        <span className="text-xl">H</span>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex gap-24 justify-between">
                        <p className="text-lg">Hein Swan Htet</p>
                        {/* <span>😽</span> */}
                    </div>
                </div>
            </div>

            <div className="divider my-0 py-0 h-3" />
        </>
    )
}
export default Conversation
