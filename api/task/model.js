const db = require('../../data/dbConfig')

async function getProject (project_id) {
    return db('projects')
        .where('project_id', project_id)
}

async function getTasks () {
    const data = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
    
    const result = data.map(task => {
        return {
            task_id: task.task_id,
            task_description: task.task_description,
            task_notes: task.task_notes,
            task_completed: (task.task_completed === 1 
                ? true 
                : false),
            project_name: task.project_name,
            project_description: task.project_description,
        }
    })    

    return result
}

async function getTaskById (task_id) {
    return db('tasks').where('task_id', task_id).first()
}

async function insertTask (task) {
    const [task_id] = await db('tasks').insert(task)

    const newTask = await getTaskById(task_id)

    const result = {
        task_id: newTask.task_id,
        task_description: newTask.task_description,
        task_notes: newTask.task_notes,
        task_completed: (newTask.task_completed === 1 
            ? true 
            : false),
        project_id: newTask.project_id,
    }

    return result
}

module.exports = { getTasks, insertTask }
