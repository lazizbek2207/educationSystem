import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'

export default function CreateReaciption() {
    const reciption = JSON.parse(localStorage.getItem("reciption"))
    const [fan, setFan] = useState([])
    const name = useRef()
    const surname = useRef()
    const date = useRef()
    const phone = useRef()
    const sciences = useRef()
    const address = useRef()

    const navigate = useNavigate();

    useEffect(() => {
        if (reciption) {
            name.current.value = reciption.name;
            surname.current.value = reciption.surname;
            date.current.value = reciption.date;
            phone.current.value = reciption.phone;
            sciences.current.value = reciption.sciences;
            sciences.current.text = reciption.sciences.name
            address.current.value = reciption.address
        }
    }, [])


    useEffect(() => {
        axios.get("https://6507df0356db83a34d9b6474.mockapi.io/sciences", {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => setFan(res.data))
            .catch(error => console.log(error))
    }, [])

    const postData = (e) => {
        e.preventDefault()
        let d = {
            name: name.current.value,
            surname: surname.current.value,
            date: date.current.value,
            address: address.current.value,
            phone: phone.current.value,
            sciences: JSON.parse(sciences?.current?.value),
            status: false,
            language: {},
            url: "",
            teacher: {}
        }


        if (!reciption) {
            axios.post("https://6507df0356db83a34d9b6474.mockapi.io/acceptance", JSON.stringify(d), {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                localStorage.setItem("reciption",null)
                navigate("/reciption")
            })
                .catch(error => console.log(error))
        }
        else{
            axios.put(`https://6507df0356db83a34d9b6474.mockapi.io/acceptance/${reciption.id}`, JSON.stringify(d), {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                localStorage.setItem("reciption",null)
                navigate("/reciption")
            })
                .catch(error => console.log(error))  
        }

    }


    return (
        <form onSubmit={(e) => postData(e)} className='table-box'>
            <div className='row'>

                <div className='col'>
                    <div className='form-group'>
                        <label >Ism</label>
                        <input required ref={name} type="text" placeholder='Ism' className='form-control' />
                    </div>
                </div>
                <div className='col'>
                    <div className='form-group'>
                        <label >Familiya</label>
                        <input required ref={surname} type="text" placeholder='Familiya' className='form-control' />
                    </div>
                </div>
                <div className='col'>
                    <div className='form-group'>
                        <label >Manzil</label>
                        <input required ref={address} type="text" placeholder='Manzil' className='form-control' />
                    </div>
                </div>
                <div className='col'>
                    <div className='form-group'>
                        <label >Tug'ilgan sana</label>
                        <input required ref={date} type="date" placeholder='Ism' className='form-control' />
                    </div>
                </div>
                <div className='col'>
                    <div className='form-group'>
                        <label >Telefon</label>
                        <input required ref={phone} type="number" placeholder='Telefon' className='form-control' />
                    </div>
                </div>
                <div className='col'>
                    <div className='form-group'>
                        <label >Yo'nalish</label>
                        <select  required ref={sciences} className='form-control' >
                            
                            {
                                fan.map(item => <option key={item.id} value={JSON.stringify(item)} >{item.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className='col'></div>
                <div className='col btn-col'>
                    {
                        !reciption ? <button type='submit' className='create-btn' >Yaratish</button>
                            :
                            <button type='submit' className='create-btn' >Saqlash</button>
                    }


                </div>

            </div >
        </form>
    )
}
