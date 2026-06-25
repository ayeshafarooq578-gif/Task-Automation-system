function InternTaskTable({
  tasks,
  submitReview,
}) {

  return (

    <table>

      <thead>

        <tr>

          <th>Title</th>

          <th>Description</th>

          <th>Status</th>

          <th>Action</th>

        </tr>

      </thead>

      <tbody>

        {tasks.length > 0 ? (

          tasks.map((task) => (

            <tr key={task._id}>

              <td>
                {task.title}
              </td>

              <td>
                {task.description}
              </td>

              <td>
                {task.status}
              </td>

              <td>

                <button
                  className="update-btn"
                  onClick={() =>
                    submitReview(
                      task._id
                    )
                  }
                >
                  Submit Review
                </button>

              </td>

            </tr>

          ))

        ) : (

          <tr>

            <td
              colSpan="4"
              style={{
                textAlign:
                  "center",
              }}
            >
              No Tasks Assigned
            </td>

          </tr>

        )}

      </tbody>

    </table>

  );

}

export default InternTaskTable;