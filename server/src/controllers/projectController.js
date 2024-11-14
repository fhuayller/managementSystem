const { createProject, updateProjectById } = require("../handlers/projectHandler");

const projectController = {
    newProject: async (req, res) => {
        try {
            const userId = req.user.id;
            const project = await createProject({ ...req.body, userId });
            res.status(201).json({ message: 'Project created', project });
        } catch (error) {
            res.status(500).json({ message: 'Failed to create project', error: error.message });
        }
    },

    updateProject: async (req, res) => {
        try {
          const { id } = req.params; // obtener el ID del proyecto desde los parámetros de la URL
          const updatedData = req.body; // datos para actualizar desde el cuerpo de la solicitud
          const updatedProject = await updateProjectById(id, updatedData);
          res.status(200).json({ message: 'Project updated', updatedProject });
        } catch (error) {
          res.status(500).json({ message: 'Failed to update project', error: error.message });
        }
      },
};

module.exports = projectController;