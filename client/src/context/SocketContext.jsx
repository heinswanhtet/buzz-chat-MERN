import { createContext, useContext, useEffect, useState } from "react"
import io from "socket.io-client"
import { useAuthContext } from "./AuthContext"

const SocketContext = createContext()

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const { user } = useAuthContext()

    useEffect(() => {
        if (user) {
            const socket = io("http://localhost:3000", {
                query: {
                    userId: user.userId,
                },
            })

            setSocket(socket)

            return () => socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, [user])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export { SocketProvider }
