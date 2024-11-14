const { Project } = require("../database/db")

const createProject = async({projectName, description, startDate, endDate, userId}) =>{
    const newProject = await Project.create({projectName, description, startDate, endDate, userId})
    
    return newProject;
};

const updateProjectById = async (id, updatedData) => {
    const project = await Project.findByPk(id);
    if (!project) throw new Error('Project not found');
  
    await project.update(updatedData);
  
    return project;
  };

module.exports = { createProject, updateProjectById };