import { useEffect, useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const VerifyEmail = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const { isLoading } = useAuthContext()
    const query = useQuery()
    const navigate = useNavigate()

    const verifyToken = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post("/api/v1/auth/verify-email", {
                verificationToken: query.get("token"),
                email: query.get("email"),
            })
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (!isLoading) verifyToken()
    }, [])

    useEffect(() => {
        if (!loading && !error) {
            setTimeout(() => navigate("/"), 2000)
        }
    }, [])

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (error) {
        return (
            <h1 className="text-3xl font-bold">
                There was an error, please double check your verification link
            </h1>
        )
    }

    return (
        <>
            <h2 className="text-3xl font-bold">Account Confirmed</h2>
        </>
    )
}
export default VerifyEmail
