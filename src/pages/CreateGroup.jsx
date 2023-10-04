import React, { useState, useEffect,useRef } from 'react'
import '../group.css'
import axios from 'axios'
import Louser from '../ui/Louder'

export default function CreatGroups() {
  const [students,setStudent]  =useState([])
  const [data, setData] = useState([])
  const [fan, setFan] = useState([])
  const [teacher, setTeacher] = useState([])
  const [active, setActive] = useState(false)
  const [dataFilter, setDataFilter] = useState([])

  const name  = useRef()
  const sciencesName  = useRef()
  const teach  = useRef()
  const date  = useRef()


  useEffect(() => {
    localStorage.removeItem("reciption")
    axios.get("https://6507df0356db83a34d9b6474.mockapi.io/acceptance", {
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

  useEffect(() => {
    axios.get("https://6507df0356db83a34d9b6474.mockapi.io/teachers", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => setTeacher(res.data))
      .catch(error => console.log(error))


    axios.get("https://6507df0356db83a34d9b6474.mockapi.io/sciences", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => setFan(res.data))
      .catch(error => console.log(error))

  }, [])



    const onChecked=(group)=>{
         group.status = !group.status;
       
         axios.put(`https://6507df0356db83a34d9b6474.mockapi.io/acceptance/${group.id}`,group,{
          headers: {
            "Content-Type": "application/json"
          }
         }).then(res=>{
               if(res.status==200 && res.data.status){
                setActive(!active)
                setStudent([...students,res.data])
               }
               
         })
         .catch(error=>console.log(error))
    }


     const creatGroup=(e)=>{
      e.preventDefault()
        let d  = {
          name: name.current.value,
          date: date.current.value,
          students: students,
          teacherId: JSON.parse(teach.current.value).id,
          teacherName: JSON.parse(teach.current.value).name + " "  + JSON.parse(teach.current.value).surname,
          sciencesName: sciencesName.current.value,
        }
        
        axios.post("https://6507df0356db83a34d9b6474.mockapi.io/groups",d,{
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res=>{addGroup(res.data)
        })
     }

     const addGroup=(j)=>{
        let d  = JSON.parse(teach.current.value);
        d.groups = [...d.groups,j]
        debugger
        axios.put(`https://6507df0356db83a34d9b6474.mockapi.io/teachers/${d.id}`,d,{
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res=>{
          console.log(res);
          console.log("qoshildi");
        })
     }


  return (
    <div className='group-container'>
      <div className='group-table'>

        <table>
          <thead>
            <tr>
              <th>F.I.SH</th>
              <th>Telefon</th>
              <th>Yo'nalish</th>
              <th>Status</th>
              <th>Tanlash</th>
            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 ?
                data.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name} {item.surname}</td>
                      <td>{item.phone}</td>
                      <td>{item.sciences.name}</td>
                      <td><button className={item.status ? "status-success" : "status-danger"}>Status</button></td>
                      <td> <input onChange={()=>onChecked(item)} className='form-check' type="checkbox" required /> </td>
                    </tr>
                  )
                }) :
                <tr>
                  <td className='louder-td' colSpan="7">
                    <Louser />
                  </td>
                </tr>
            }
          </tbody>
        </table>
      </div>


      <div className='group-form'>
        <form style={{ width: "100%" }} onSubmit={creatGroup}>
          <div className='form-group'>
            <label>Yo'nalish</label>
            <select  ref={sciencesName} required className='form-control'>
              {
                fan.map(d => {
                  return (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  )
                })
              }
            </select>
          </div>
          <div className='form-group'>
            <label>Guruh nomi</label>
            <input ref={name} required type="text" className='form-control' placeholder='Nomi' />
          </div>
          <div className='form-group'>
            <label>O'qituvchi</label>
            <select ref={teach} required className='form-control'>
              {
                teacher.map(d => {
                  return (
                    <option key={d.id} value={JSON.stringify(d)}>{d.name}</option>
                  )
                })
              }
            </select>
          </div>


          <div className='form-group'>
            <label>Ochilishi</label>
            <input ref={date} required type="date" className='form-control' />
          </div>

          <button type='submit' className='create-btn' >Yaratish</button>
        </form>
      </div>

    </div>
  )
}
