import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import axios from "axios"

const useForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const forgotPassword = async (email) => {
        const valuesExist = checkInputValues(email)
        if (!valuesExist) return

        setIsLoading(true)
        try {
            const { data } = await axios.post("/api/v1/auth/forgot-password", {
                email,
            })
            toast.success(`${data.msg}`)
            setIsLoading(false)
            setTimeout(() => navigate("/"), 3000)
        } catch (error) {
            //   toast.error(error);
            toast.error(error.response.data.msg)
            setIsLoading(false)
        }
    }

    return { isLoading, forgotPassword }
}

function checkInputValues(email) {
    if (!email) {
        toast.error("Please provide your email to reset your password")
        return false
    }
    return true
}

export default useForgotPassword
