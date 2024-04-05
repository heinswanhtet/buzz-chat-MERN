const sendMessage = async (req, res) => {
    res.send('send message')
}

const getMessage = async (req, res) => {
    res.send('get message')
}

module.exports = {
    sendMessage,
    getMessage
}