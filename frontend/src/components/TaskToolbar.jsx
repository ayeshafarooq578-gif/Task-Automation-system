function TaskToolbar({

search,

setSearch,

status,

setStatus,

sort,

setSort,

}){

return(

<div className="toolbar glass">

<input

type="text"

placeholder="Search Task..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

<select

value={status}

onChange={(e)=>setStatus(e.target.value)}

>

<option value="All">

All Status

</option>

<option value="Pending">

Pending

</option>

<option value="In Progress">

In Progress

</option>

<option value="Completed">

Completed

</option>

</select>

<select

value={sort}

onChange={(e)=>setSort(e.target.value)}

>

<option value="newest">

Newest

</option>

<option value="oldest">

Oldest

</option>

<option value="duedate">

Due Date

</option>

</select>

</div>

);

}

export default TaskToolbar;