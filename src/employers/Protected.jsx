import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Protected = (props) => {
    const {Component} = props
    const navigate = useNavigate()
     // check user logged in or not
     useEffect(() => {
        let login = Cookies.get('email')
        if(!login){
            navigate('/helix/Employerss',{ replace: true })
        }
     }, [Component]);
  return (
    <div><Component/></div>
  )
}

export default Protected