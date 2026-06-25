import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskTable from "../components/TaskTable";
import CreateTaskModal from "../components/CreateTaskModal";
import ProductivityChart from "../components/ProductivityChart";
import NotificationsPanel from "../components/NotificationsPanel";
import EditTaskModal from "../components/EditTaskModal";
import TaskToolbar
from "../components/TaskToolbar";
import DashboardStats
from "../components/DashboardStats";
import UpcomingDeadlines
from "../components/UpcomingDeadlines";


import API from "../services/api";

import "../styles/global.css";
import "../styles/dashboard.css";

function AdminDashboard() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [search,setSearch]=useState("");

const [status,setStatus]=useState("All");

const [sort,setSort]=useState("newest");
  
  
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTaskStatus = async (id) => {
    try {
      await API.put(`/tasks/${id}`, {
        status: "Completed",
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = (task) => {

  setSelectedTask(task);

  setShowEditModal(true);

};

const filteredTasks=tasks

.filter(task=>{

const matchTitle=

task.title

.toLowerCase()

.includes(

search.toLowerCase()

);

const matchStatus=

status==="All"

||

task.status===status;

return(

matchTitle

&&

matchStatus

);

})

.sort((a,b)=>{

if(sort==="oldest"){

return new Date(a.createdAt)

-

new Date(b.createdAt);

}

if(sort==="duedate"){

return new Date(a.dueDate)

-

new Date(b.dueDate);

}

return new Date(b.createdAt)

-

new Date(a.createdAt);

});

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar />

        <h1>Admin Overview</h1>

        <br />

        

<DashboardStats
tasks={tasks}
/>

<br />

        <div className="cards">

          <div className="card glass">
            <h3>Total Active Tasks</h3>
            <h1>{tasks.length}</h1>
          </div>

          <div className="card glass">
            <h3>Intern Productivity</h3>

            <ProductivityChart
              tasks={tasks}
            />
          </div>

        </div>

        <br />

        

            <UpcomingDeadlines
              tasks={tasks}
/>

        <NotificationsPanel />

        <br />

        <div className="table-box glass">
          <h2>Task Management</h2>

          <br />

          <TaskToolbar

search={search}

setSearch={setSearch}

status={status}

setStatus={setStatus}

sort={sort}

setSort={setSort}

/>

          <TaskTable
            tasks={filteredTasks}
            deleteTask={deleteTask}
            updateTaskStatus={updateTaskStatus}
            editTask={editTask}
          />

          <br />

          <button
            className="create-btn"
            onClick={() => setShowModal(true)}
          >
            Create New Task
          </button>
        </div>

        {showModal && (
          <CreateTaskModal
            closeModal={() => setShowModal(false)}
            refreshTasks={fetchTasks}
          />
        )}

        {showEditModal && (
  <EditTaskModal
    task={selectedTask}
    closeModal={() => setShowEditModal(false)}
    refreshTasks={fetchTasks}
  />
)}
      </div>
    </div>
  );
}

export default AdminDashboard;