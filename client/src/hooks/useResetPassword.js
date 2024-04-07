import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import axios from "axios"

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const useResetPassword = () => {
    const [isLoading, setIsLoading] = useState(false)
    const query = useQuery()
    const navigate = useNavigate()

    const resetPassword = async ({ password, confirmPassword }) => {
        const valuesExistAndCheckPassword = checkInputValues({
            password,
            confirmPassword,
        })
        if (!valuesExistAndCheckPassword) return

        const setNewPassword = {
            token: query.get("token"),
            email: query.get("email"),
            password,
        }
        setIsLoading(true)
        try {
            const { data } = await axios.post(
                "/api/v1/auth/reset-password",
                setNewPassword
            )
            toast.success(`${data.msg}`)
            setIsLoading(false)
            setTimeout(() => navigate("/login"), 3000)
        } catch (error) {
            //   toast.error(error);
            toast.error(error.response.data.msg)
            setIsLoading(false)
        }
    }

    return { isLoading, resetPassword }
}

function checkInputValues({ password, confirmPassword }) {
    if (!password || !confirmPassword) {
        toast.error("Please provide values for all required fields")
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match!")
        return false
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters")
        return false
    }

    return true
}

export default useResetPassword
