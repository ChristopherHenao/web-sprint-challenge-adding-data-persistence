const projects = [
    { project_name: '2-Story Family House' },
    { project_name: 'Industrial Warehouse' },
    { project_name: 'Apartment Building' }
]

const resources = [
    { resource_name: '4X8 wood planks', unit: 'stack' },
    { resource_name: 'concrete', unit: 'tons' },
    { resource_name: 'windows', unit: 'panel' },
    { resource_name: 'steel beams', unit: 'stack' },
    { resource_name: 'carpet', unit: 'sq feet' },
    { resource_name: 'wood flooring', unit: 'sq feet' },
    { resource_name: 'marble countertop', unit: 'feet' },
]

const tasks = [
    { task_description: 'clear land plot', task_completed: true, project_id: 1 },
    { task_description: 'build house frame', project_id: 1 },
    { task_description: 'finish exterior before starting interior', project_id: 1 },
    { task_description: 'destroy current building on land', project_id: 2 },
    { task_description: 'remove all debris', project_id: 2 },
    { task_description: 'even out land where warehouse will be', project_id: 2 },
    { task_description: 'get permits from city', task_completed: true, project_id: 3 },
    { task_description: 'find demolition crew', project_id: 3 },
    { task_description: 'build apartment building', project_id: 3 },
]

const project_resources = [
    { task_id: 2, resource_id: 1, quantity: 4 },
    { task_id: 3, resource_id: 1, quantity: 6 },
    { task_id: 3, resource_id: 3, quantity: 8 },
    { task_id: 9, resource_id: 4, quantity: 25 },
    { task_id: 9, resource_id: 5, quantity: 60000 },
    { task_id: 9, resource_id: 2, quantity: 30 },
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}
