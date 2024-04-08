export function extractTime(dateString) {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = padZero(date.getMonth() + 1) // Adding 1 because getMonth() returns zero-based index
    const day = padZero(date.getDate())
    const hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())
    return `${year}-${month}-${day} ${hours}:${minutes}`
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0")
}
