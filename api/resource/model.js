const db = require('../../data/dbConfig')

async function getResources () {
    const data = await db('resources')

    return data
}

async function insertResources () {

}

module.exports = { getResources, insertResources }
