import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Show = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getUser()
  }, [])
  const getUser = async () => {
    await axios.get("http://localhost:3000/api/user/get")
      .then((result) => {
        setData(result.data.data)
      }).catch((err) => {
        console.log(err);
      });
  }

  console.log(data);

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3000/api/user/delete/${userId}`)
      .then((result) => {
        setData((prevUser) => prevUser.filter((user) => user._id == !userId))
        toast.success(result.data.message, { position: "top-right" })
      }).catch((err) => {
        console.log(err);
      });
  }


  return (
    <div>
      <Link to={"/"}>Enter Data</Link>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((ele, inx) => {
              return (
                <tr key={data._id}>
                  <td>{inx + 1}</td>
                  <td>{ele.firstname}</td>
                  <td>{ele.lastname}</td>
                  <td>{ele.email}</td>
                  <td>
                    <button onClick={() => deleteUser(ele._id)}>Delete</button>
                  </td>
                  <td>
                    <Link to={`/update/` + ele._id}>Update</Link>
                  </td>
                </tr>
              )
            })

          }

        </tbody>
      </table>
    </div>
  )
}

export default Show
