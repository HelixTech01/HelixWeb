import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedJob = (props) => {
  const navigate = useNavigate()
    const {Component} = props
    // check jobseeker loged  in or not
    useEffect(()=>{
        let login = Cookies.get('admin')
        if(!login){
            navigate('/helix')
        }
    },[Component])
  return (
    <div><Component/></div>
  )
}

export default ProtectedJob