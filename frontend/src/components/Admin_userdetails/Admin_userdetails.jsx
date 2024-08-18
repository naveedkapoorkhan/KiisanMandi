import React , {useState} from 'react'
import { Admin_usersproducts, Admin_userdata } from '../../components'

const Admin_userdetails = () => {
  return (
    <div>
        <Admin_userdata  ></Admin_userdata>
        <Admin_usersproducts></Admin_usersproducts>
    </div>
  )
}

export default Admin_userdetails