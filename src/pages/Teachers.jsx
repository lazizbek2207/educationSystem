import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Louser from '../ui/Louder'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
export default function Teachers() {

  const [time, setTime] = useState(true)
  const [data, setData] = useState([])
  const [dataFilter, setDataFilter] = useState([])
  const [active, setActive] = useState(false)
  const navigate = useNavigate()

  const notify = () => toast.success("O'chirildi", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });


  useEffect(() => {
    localStorage.removeItem("teachers")
    axios.get("https://6507df0356db83a34d9b6474.mockapi.io/teachers", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      setTimeout(() => {
        setData(res.data)
        setDataFilter(res.data)
      }, 1000)
    })
      .catch(error => console.log(error))
  }, [active])


  const removeTeacher = (id) => {
    axios.delete(`https://6507df0356db83a34d9b6474.mockapi.io/teachers/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      notify()
      setActive(!active);
      setData([])
    })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if (data.length == 0) {
      setTimeout(() => {
        setTime(false)
      }, 3000);
    }

  }, [data])

  const editData = (item) => {
    localStorage.setItem("teachers", JSON.stringify(item))
    navigate(`/teachers/${item.id}`)
  }

  const onFiltered = (text) => {
    let res = dataFilter.filter(item => item.name.toUpperCase().includes(text.toUpperCase()) || item.surname.toUpperCase().includes(text.toUpperCase()));
    setData(res)
  }

  return (
    <>
      <ToastContainer />
    

      <div className='table-box'>
      <div className='header'>
        <div className='filter'>
          <input onChange={(e) => onFiltered(e.target.value)} type="text" placeholder="O'qituvchini qidirish" />
          <i className="bi bi-search"></i>
        </div>
        <div className='add'>

          <Link to={"/teachers/create"}>
            <button className='add-btn' >
              <i className="bi bi-person-plus-fill"></i>
            </button>
          </Link>


        </div>
      </div>
        <table>
          <thead>
            <tr>
              <th>F.I.SH</th>
              <th>Tug'ilgan</th>
              <th>Telefon</th>
              <th>Yo'nalish</th>
              <th><i className="bi bi-trash3"></i></th>
            </tr>
          </thead>
          <tbody>


            {

              data.length > 0 ?
                data.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name} {item.surname}</td>
                      <td>{item.date}</td>
                      <td>{item.phone}</td>
                      <td>{item?.sciences?.name}</td>
                      <td>
                        <div className='events'>
                          <span onClick={() => removeTeacher(item.id)} ><i className="bi bi-trash3 remove"></i></span>
                          <span onClick={() => editData(item)} ><i className="bi bi-pen"></i></span>
                        </div>
                      </td>
                    </tr>
                  )
                })
                :
                time ?
                  <tr>
                    <td className='louder-td' colSpan="7">
                      <Louser />
                    </td>
                  </tr>
                  :
                  <tr><td className='louder-td' colSpan={"7"}  >O'qituvchi yo'q</td></tr>
            }
          </tbody>
        </table>
      </div>

    </>

  )
}
