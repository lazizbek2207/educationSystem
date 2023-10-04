import React, { useState, useEffect } from 'react'
import '../group.css'
import axios from 'axios'
import Louser from '../ui/Louder'
import { Link } from 'react-router-dom'

export default function Groups() {
  const [data, setData] = useState([])
  const [active, setActive] = useState(false)
  const [dataFilter, setDataFilter] = useState([])

  useEffect(() => {
    axios.get("https://6507df0356db83a34d9b6474.mockapi.io/groups", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(error => console.log(error))
  }, [active])


  return (
    <div className='table-box'>
      <div className='header'>
        <div className='filter'>
          <input type="text" placeholder='Guruhni qidirish' />
          <i className="bi bi-search"></i>
        </div>
        <div className='add'>

          <Link to={"/groups/create"}>
            <button className='add-btn' >
              <i className="bi bi-person-plus-fill"></i>
            </button>
          </Link>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nomi</th>
            <th>Ochilgan</th>
            <th>O'qituvchi</th>
            <th>Yo'nalish</th>
            <th>Hodisalar</th>


          </tr>
        </thead>

        <tbody>
          {
            data.length > 0 ?

              data.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.teacherName}</td>
                    <td><div className='science'>Frontend</div></td>
                    <td>
                      <div className='events'>
                        <span ><i className="bi bi-trash3 remove"></i></span>
                        <span><i className="bi bi-pen"></i></span>
                      </div>
                    </td>
                  </tr>
                )
              })
              :
              <tr>
                  <td className='louder-td' colSpan="7">
                    <Louser />
                  </td>
                </tr>

          }

        </tbody>
      </table>
    </div>
  )
}
