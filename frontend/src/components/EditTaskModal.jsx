import { useState, useEffect } from "react";
import API from "../services/api";

function EditTaskModal({
  task,
  closeModal,
  refreshTasks,
}) {
  const [interns, setInterns] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    assignedTo: "",
    status: "",
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        dueDate: task.dueDate
          ? task.dueDate.substring(0, 10)
          : "",
        assignedTo: task.assignedTo?._id || "",
        status: task.status,
      });
    }

    fetchInterns();
  }, [task]);

  const fetchInterns = async () => {
    try {
      const res = await API.get("/auth/interns");
      setInterns(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateTask = async (e) => {
    e.preventDefault();

    try {
      await API.put(
        `/tasks/${task._id}`,
        formData
      );

      alert("Task Updated Successfully");

      refreshTasks();

      closeModal();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-overlay">

      <div className="modal-box glass">

        <h2>Edit Task</h2>

        <form onSubmit={updateTask}>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />

          <select
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
          >
            {interns.map((intern) => (
              <option
                key={intern._id}
                value={intern._id}
              >
                {intern.name}
              </option>
            ))}
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <br />

          <button type="submit">
            Update Task
          </button>

          <button
            type="button"
            onClick={closeModal}
          >
            Cancel
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditTaskModal;