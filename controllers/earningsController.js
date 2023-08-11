const createEarning = async (req, res) => {
    res.send('create earning')
}

const getAllEarnings = async (req, res) => {
    res.send('get all earnings')
}

const updateEarning = async (req, res) => {
    res.send('update earning')
}

const deleteEarning = async (req, res) => {
    res.send('delete earning')
}

const showStats = async (req, res) => {
    res.send('show stats')
}

export {createEarning, deleteEarning, getAllEarnings, updateEarning, showStats}