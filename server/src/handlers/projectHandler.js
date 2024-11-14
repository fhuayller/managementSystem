const { Project } = require("../database/db")

const createProject = async({projectName, description, startDate, endDate, userId}) =>{
    const newProject = await Project.create({projectName, description, startDate, endDate, userId})
    
    return newProject;
};

module.exports = { createProject }