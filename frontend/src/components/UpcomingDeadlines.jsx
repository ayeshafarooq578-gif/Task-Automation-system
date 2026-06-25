function UpcomingDeadlines({
tasks
}){

const upcoming=[...tasks]

.sort(

(a,b)=>

new Date(a.dueDate)

-

new Date(b.dueDate)

)

.slice(0,5);

return(

<div className="glass">

<h2>

Upcoming Deadlines

</h2>

<br/>

<table>

<thead>

<tr>

<th>Task</th>

<th>Due</th>

</tr>

</thead>

<tbody>

{

upcoming.map(task=>(

<tr key={task._id}>

<td>

{task.title}

</td>

<td>

{

new Date(task.dueDate)

.toLocaleDateString()

}

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}

export default UpcomingDeadlines;