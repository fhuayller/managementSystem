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

module.exports = { createNewTask, getTaskByProjectId };
