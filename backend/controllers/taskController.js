const Task = require("../models/Task");
const Notification = require("../models/Notification");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

// Create Task
exports.createTask = async (req, res) => {
  try {

    const task = await Task.create(req.body);

    const intern = await User.findById(
  task.assignedTo
);

await sendEmail(

  intern.email,

  "New Task Assigned",

  `Hello ${intern.name},

A new task has been assigned to you.

Title: ${task.title}

Description: ${task.description}

Due Date: ${new Date(task.dueDate).toLocaleDateString()}

Regards,

Task Automation System`

);

    await Notification.create({
      message: `New Task Assigned: ${task.title}`,
      type: "task",
    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get All Tasks
exports.getTasks = async (req, res) => {
  try {

    const tasks = await Task.find()
      .populate("assignedTo", "name email");

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get Logged-in Intern's Tasks
exports.getMyTasks = async (req, res) => {
  try {

    const tasks = await Task.find({
      assignedTo: req.user.id,
    }).populate("assignedTo", "name email");

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    // Create notification when task is completed
    if (task.status === "Completed") {

      await Notification.create({

        message: `${task.title} completed`,

        type: "completed",

      });

    }

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};