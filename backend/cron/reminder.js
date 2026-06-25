const cron = require("node-cron");
const Task = require("../models/Task");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

// Runs every day at 9:00 AM
cron.schedule("0 9 * * *", async () => {

  console.log("Checking tasks for reminders...");

  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  try {

    const tasks = await Task.find({

      dueDate: {

        $lte: tomorrow,

      },

      status: {

        $ne: "Completed",

      },

    }).populate("assignedTo");

    for (const task of tasks) {

      if (!task.assignedTo) continue;

      await sendEmail(

        task.assignedTo.email,

        "Task Reminder",

`Hello ${task.assignedTo.name},

This is a reminder from Task Automation System.

Task: ${task.title}

Description:
${task.description}

Due Date:
${new Date(task.dueDate).toLocaleDateString()}

Please complete your task before the deadline.

Regards,

Task Automation System`

      );

      console.log(
        `Reminder email sent to ${task.assignedTo.email}`
      );

    }

  } catch (error) {

    console.log(error);

  }

});