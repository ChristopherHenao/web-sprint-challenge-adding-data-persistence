const db = require('../../data/dbConfig')

async function getProjects() {
    const data = await db('projects')

    // const result = 
    //     {
    //         project_id: data.map(p => {
    //             return p.project_id
    //         }),
    //         // project_name: project.project_name,
    //         // project_description: project.project_description,
    //         // project_completed: (project.project_completed === 0 
    //         //     ? false 
    //         //     : true)
    //     }

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

module.exports = { getProjects }