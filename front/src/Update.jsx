import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Update = () => {

  const editData = {
    firstname: "",
    lastname: "",
    email: "",
  }
  const { id } = useParams()
  const [data, setData] = useState(editData)

  const Onchang_Handller = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/api/user/getOne/${id}`)
      .then((result) => {
        setData(result.data.user)
      }).catch((err) => {
        console.log(err)
      });
  }, [id])


  const updateApi = async () => {
    await axios.put(`http://localhost:3000/api/user/update/${id}`, data)
      .then((result) => {
        toast.success(result.data.message, { position: "top-right" })
      }).catch((err) => {
        console.log(err)
      });
  }
  return (

    <>
      <div className='main'>
        <h1>Basic Note App</h1>
        <Link to={"/show"}>User Data Post</Link>
        <h2>Update Data</h2>
        <div className="placeholder">
          <form onChange={updateApi}>
            <div className="place_all">
              <label htmlFor="firstname">First Name</label>
              <input type="text" value={data.firstname} onChange={Onchang_Handller} name='firstname' placeholder='enter first name' />
            </div>
            <div className="place_all">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" value={data.lastname} onChange={Onchang_Handller} name='lastname' placeholder='enter last name' />
            </div>
            <div className="place_all">
              <label htmlFor="email">Email</label>
              <input type="text" value={data.email} onChange={Onchang_Handller} name='email' placeholder='enter email id' />
            </div>

            <div>
              <button type='submit'>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Update
