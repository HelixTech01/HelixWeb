import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Protecte = (props) => {
    const {Component} = props
    const navigate = useNavigate()
     // check user logged in or not
     useEffect(() => {
        let login = Cookies.get('admin')
        if(!login){
            navigate('/helix')
        }
     }, [Component]);
  return (
    <div><Component/></div>
  )
}

export default Protecte