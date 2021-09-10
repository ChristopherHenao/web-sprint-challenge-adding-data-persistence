const db = require('../../data/dbConfig')

async function getResources () {
    const data = await db('resources')

    return data
}

async function getResourceById (resource_id) {
    return db('resources')
    .where('resource_id', resource_id)
    .first()
}

async function insertResource (resource) {
    const [resource_id] = await db('resources')
        .insert(resource)

    const newResource = await getResourceById (resource_id)

    const result = {
        resource_id: newResource.resource_id,
        resource_name: newResource.resource_name,
        resource_description: newResource.resource_description,
        unit: newResource.unit,
    }

    return result
}

module.exports = { getResources, insertResource }
