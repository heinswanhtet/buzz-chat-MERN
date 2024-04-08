const Conversation = ({ user, lastIndex }) => {
    return (
        <>
            <div className="flex gap-4 items-center justify-between transition-all hover:bg-slate-400 hover:text-white rounded px-1.5 py-2.5 cursor-pointer">
                <div className="avatar online placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                        <span className="text-xl">
                            {user.name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex gap-24 justify-between">
                        <p className="text-xl">{user.name}</p>
                        {/* <span>😽</span> */}
                    </div>
                </div>
            </div>

            {!lastIndex && <div className="divider my-0 py-0 h-3" />}
        </>
    )
}
export default Conversation
