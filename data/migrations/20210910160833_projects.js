
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 200)
            .notNullable()
        table.string('project_description', 200)
        table.boolean('project_completed')
            .defaultTo(false)
    })

    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name', 200)
            .notNullable()
            .unique()
        table.string('unit')
    })

    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description', 300)
            .notNullable()
        table.boolean('task_completed')
            .defaultTo(false)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })

    .createTable('project_resources', table => {
        table.increments('project_resource_id')
        table.integer('task_id')
            .unsigned()
            .notNullable()
            .references('task_id')
            .inTable('tasks')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.integer('quantity')
            .notNullable()
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
