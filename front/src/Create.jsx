import React, { useEffect, useState } from 'react';
import exios from 'axios';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Show from './Show';
import { Link } from 'react-router-dom';


const Create = () => {

  const objData = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }

  const [data, setData] = useState(objData);

  const onChangHandller = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData({ ...data, [name]: value })
  }

  const postData = (event) => {
    event.preventDefault()
    axios.post("http://localhost:3000/api/user/post", data)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        <link rel="stylesheet" href={<Show />} />
      }).catch((err) => {
        console.log(err);
      });

  }

  return (
    <>
      <div>
        <Link to={"/show"}>table</Link>
        <form onSubmit={postData}>
          <label htmlFor="firstname">first name</label><br />
          <input onChange={onChangHandller} value={data.firstname} type="text" name='firstname' placeholder='enter first name' required /><br />

          <label htmlFor="lastname">last name</label><br />
          <input onChange={onChangHandller} type="text" value={data.lastname} name='lastname' placeholder='enter last name' required /><br />

          <label htmlFor="email">enter email</label><br />
          <input onChange={onChangHandller} type="email" name='email' placeholder='enter email' value={data.email} required /><br />

          <label htmlFor="password">enter password</label><br />
          <input onChange={onChangHandller} type="text" name='password' value={data.password} placeholder='enter password' required /><br />

          <button type='submit'>submit</button>
        </form>
      </div>
    </>
  )
}

export default Create
