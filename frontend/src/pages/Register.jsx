import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

 const navigate = useNavigate();

 const [formData,setFormData] =
 useState({
  name:"",
  email:"",
  password:"",
  role:"intern"
 });

 const handleChange=(e)=>{
  setFormData({
   ...formData,
   [e.target.name]:e.target.value
  });
 };

 const handleSubmit=async(e)=>{

  e.preventDefault();

  try{

   await API.post(
    "/auth/register",
    formData
   );

   navigate("/");

  }catch(err){

   alert("Registration Failed");

  }
 };

 return(

 <div className="auth-container">

  <form
   className="auth-box glass"
   onSubmit={handleSubmit}
  >

   <h1>REGISTER</h1>

   <input
    name="name"
    placeholder="Full Name"
    onChange={handleChange}
   />

   <input
    name="email"
    placeholder="Email"
    onChange={handleChange}
   />

   <input
    name="password"
    placeholder="Password"
    onChange={handleChange}
   />

   <select
    name="role"
    onChange={handleChange}
   >

    <option value="intern">
     Intern
    </option>

    <option value="admin">
     Admin
    </option>

   </select>

   <button>
    Register
   </button>

  </form>

 </div>

 );
}

export default Register;