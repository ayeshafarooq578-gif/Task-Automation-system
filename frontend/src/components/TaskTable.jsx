function TaskTable({
  tasks,
  deleteTask,
  updateTaskStatus,
}) {
  return (
    <table>

      <thead>

        <tr>

          <th>ID</th>

          <th>Title</th>

          <th>Assigned To</th>

          <th>Description</th>

          <th>Due Date</th>

          <th>Status</th>

          <th>Actions</th>

        </tr>

      </thead>

      <tbody>

        {tasks.length > 0 ? (

          tasks.map((task) => (

            <tr key={task._id}>

              <td>
                {task._id.slice(-4)}
              </td>

              <td>
                {task.title}
              </td>

              <td>
                {task.assignedTo?.name || "Not Assigned"}
              </td>

              <td>
                {task.description}
              </td>

              <td>
                {new Date(task.dueDate)
                  .toLocaleDateString()}
              </td>

              <td>

                <span
                  className={`status ${task.status.replace(/\s/g, "")}`}
                >
                  {task.status}
                </span>

              </td>

              <td>

                <button
                  className="update-btn"
                  onClick={() =>
                    updateTaskStatus(task._id)
                  }
                >
                  Complete
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTask(task._id)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))

        ) : (

          <tr>

            <td
              colSpan="7"
              style={{
                textAlign: "center",
                padding: "20px",
              }}
            >
              No Tasks Found
            </td>

          </tr>

        )}

      </tbody>

    </table>
  );
}

export default TaskTable;