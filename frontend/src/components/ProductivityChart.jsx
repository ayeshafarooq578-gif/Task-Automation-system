import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
);

function ProductivityChart({ tasks }) {

 const completed =
 tasks.filter(
  task => task.status === "Completed"
 ).length;

 const pending =
 tasks.filter(
  task => task.status === "Pending"
 ).length;

 const inProgress =
 tasks.filter(
  task => task.status === "InProgress"
 ).length;

 const data = {
  labels:[
   "Pending",
   "In Progress",
   "Completed"
  ],

  datasets:[
   {
    label:"Tasks",

    data:[
     pending,
     inProgress,
     completed
    ],

    backgroundColor:[

"#f39c12",

"#3498db",

"#2ecc71"

],
   },
  ],
 };

 return (
  <Bar data={data}/>
 );
}

export default ProductivityChart;