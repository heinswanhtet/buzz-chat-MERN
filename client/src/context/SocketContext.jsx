import { createContext, useContext, useEffect, useState } from "react"
import io from "socket.io-client"
import { useAuthContext } from "./AuthContext"

const SocketContext = createContext()

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const { user } = useAuthContext()
    const [onlineUsers, setOnlineUsers] = useState([])

    useEffect(() => {
        if (user) {
            const socket = io("http://localhost:3000", {
                query: {
                    userId: user.userId,
                },
            })

            setSocket(socket)

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, [user])

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export { SocketProvider }
