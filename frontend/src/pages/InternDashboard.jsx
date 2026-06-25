import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InternTaskTable from "../components/InternTaskTable";

import API from "../services/api";

import "../styles/dashboard.css";

function InternDashboard() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    try {

      const res = await API.get(
        "/tasks/mytasks"
      );

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const submitReview = async (id) => {

    try {

      await API.put(
        `/tasks/${id}`,
        {
          status: "InProgress",
        }
      );

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Navbar />

        <h1>Intern Dashboard</h1>

        <br />

        <div className="cards">

          <div className="card glass">

            <h3>
              My Assigned Tasks
            </h3>

            <h1>
              {tasks.length}
            </h1>

          </div>

          <div className="card glass">

            <h3>
              Completed Tasks
            </h3>

            <h1>
              {
                tasks.filter(
                  task =>
                    task.status ===
                    "Completed"
                ).length
              }
            </h1>

          </div>

        </div>

        <br />

        <div className="table-box glass">

          <h2>
            My Tasks
          </h2>

          <br />

          <InternTaskTable
            tasks={tasks}
            submitReview={
              submitReview
            }
          />

        </div>

      </div>

    </div>

  );

}

export default InternDashboard;