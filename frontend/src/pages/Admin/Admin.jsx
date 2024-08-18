import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Admin_allusers, Admin_userdetails, Admin_usersproducts } from '../../components'

const Admin = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const fulluser_profile = localStorage.getItem("user");
    if (fulluser_profile) {
      const userDataFromStorage = JSON.parse(fulluser_profile);

      if (userDataFromStorage.email !== "admin@gmail.com") {
        navigate('/home'); // Redirect to home page if the email is not "admin@gmail.com"
      }
    } else {
      navigate('/home'); // Redirect to home page if no user data is found
    }
  }, [navigate]);



  return (
    <div>

        {/* <Admin_allusers></Admin_allusers> */}
        <Admin_userdetails></Admin_userdetails>
    </div>
  )
}

export default Admin