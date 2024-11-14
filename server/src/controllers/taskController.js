const { createNewTask, getTaskByProjectId } = require('../handlers/taskHandler')

const taskController = {
    createTask: async (req, res) => {
        try {
            const { projectId } = req.params;
            const userId = req.user.id;
            const task = await createNewTask({ ...req.body, userId, projectId });
            res.status(201).json({ message: 'Task created', task });
        } catch (error) {
            res.status(500).json({ message: 'Failed to create task', error: error.message });
        }
    },
    getTasksByProject: async (req, res) =>{
        try{
            const { projectId } = req.params; //id del proyecto por URL
            const tasks = await getTaskByProjectId(projectId);
            res.status(201).json({message: "Tasks: ", tasks })
        } catch (error) {
            console.error("Error fetching tasks:", error);
            res.status(500).json({ message: "Failed on fetching tasks", error: error.message || error });
        }
    }
}

module.exports = taskController;