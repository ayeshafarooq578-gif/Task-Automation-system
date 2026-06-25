import { useState, useEffect } from "react";
import API from "../services/api";

function CreateTaskModal({
  closeModal,
  refreshTasks,
}) {

  const [interns, setInterns] = useState([]);

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
    assignedTo: "",
  });

  useEffect(() => {
    fetchInterns();
  }, []);

  const fetchInterns = async () => {
    try {

      const res = await API.get(
        "/auth/interns"
      );

      setInterns(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/tasks",
        task
      );

      alert(
        "Task Created Successfully"
      );

      refreshTasks();

      closeModal();

    } catch (error) {

      console.log(error);

      alert(
        "Error Creating Task"
      );

    }
  };

  return (

    <div className="modal-overlay">

      <div className="modal-box glass">

        <h2>
          Create New Task
        </h2>

        <form
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="title"
            placeholder="Task Title"
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Task Description"
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="dueDate"
            onChange={handleChange}
            required
          />

          <select
            name="assignedTo"
            onChange={handleChange}
            required
          >

            <option value="">
              Select Intern
            </option>

            {interns.map(
              (intern) => (

                <option
                  key={intern._id}
                  value={intern._id}
                >
                  {intern.name}
                </option>

              )
            )}

          </select>

          <button
            type="submit"
          >
            Create Task
          </button>

        </form>

      </div>

    </div>

  );

}

export default CreateTaskModal;