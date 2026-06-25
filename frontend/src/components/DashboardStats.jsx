function DashboardStats({ tasks }) {

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    task => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    task => task.status === "Pending"
  ).length;

  const today = new Date();

  const overdueTasks = tasks.filter(task => {

    return (
      new Date(task.dueDate) < today &&
      task.status !== "Completed"
    );

  }).length;

  const dueToday = tasks.filter(task => {

    const due = new Date(task.dueDate);

    return (
      due.toDateString() ===
      today.toDateString()
    );

  }).length;

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  return (

    <div className="stats-grid">

      <div className="stat-card glass">

        <h3>Total Tasks</h3>

        <h1>{totalTasks}</h1>

      </div>

      <div className="stat-card glass">

        <h3>Completed</h3>

        <h1>{completedTasks}</h1>

      </div>

      <div className="stat-card glass">

        <h3>Pending</h3>

        <h1>{pendingTasks}</h1>

      </div>

      <div className="stat-card glass">

        <h3>Overdue</h3>

        <h1>{overdueTasks}</h1>

      </div>

      <div className="stat-card glass">

        <h3>Due Today</h3>

        <h1>{dueToday}</h1>

      </div>

      <div className="stat-card glass">

        <h3>Completion</h3>

        <h1>{completionRate}%</h1>

      </div>

    </div>

  );

}

export default DashboardStats;