const db = require('../../data/dbConfig')

async function getProjects() {
    const data = await db('projects')

    const result = data.map(project => {
        return {
            project_id: project.project_id,
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: (project.project_completed === 0 
                ? false 
                : true)
        }
    })
        
    return result
}

async function getProjectById (project_id) {
    return db('projects')
        .where('project_id', project_id)
        .first()
}

async function insertProject(project) {
    const [project_id] = await db('projects')
        .insert(project)

    const newProject = await getProjectById(project_id)

    const result = {
        project_id: newProject.project_id,
        project_name: newProject.project_name,
        project_description: newProject.project_description,
        project_completed: (newProject.project_completed === 0 
            ? false 
            : true)
    }

    return result
}

module.exports = { getProjects, insertProject }