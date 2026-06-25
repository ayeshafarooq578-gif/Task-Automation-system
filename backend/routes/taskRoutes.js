const express = require("express");

const router = express.Router();

const auth = require(
  "../middleware/authMiddleware"
);

const {
  createTask,
  getTasks,
  getMyTasks,
  updateTask,
  deleteTask,
} = require(
  "../controllers/taskController"
);

router.post("/", auth, createTask);

router.get("/", auth, getTasks);

router.get("/mytasks", auth, getMyTasks);

router.put("/:id", auth, updateTask);

router.delete("/:id", auth, deleteTask);

module.exports = router;