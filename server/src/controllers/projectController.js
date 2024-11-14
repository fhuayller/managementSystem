const { createProject } = require("../handlers/projectHandler");

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
};

module.exports = projectController;