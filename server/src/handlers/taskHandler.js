const { Task } = require("../database/db");

const createNewTask = async ({ taskName, description, startDate, endDate, userId, projectId }) => {
    const newTask = await Task.create({
        taskName,
        description,
        userId,
        projectId,
        startDate,
        endDate
    });
    return newTask;
};

const getTaskByProjectId = async ( projectId ) =>{
    const tasks = await Task.findAll({
        where: { projectId }
    });
    return tasks
}

const updateTaskById = async ( taskId, updatedData ) =>{
    const task = await Task.findByPk(taskId);
    if(!task) throw new Error('task not found');

    const updatedTask = await task.update(updatedData)

    return updatedTask;
}

module.exports = { createNewTask, getTaskByProjectId, updateTaskById };
