import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const MyButton = () => {
  let navigate = useNavigate();
  function myClick(){
    navigate("/userform")

}

  return(
    <>
   
   
    <Button type="dashed" onClick ={myClick} style={{position:'absolute',left:800,top:600}}>add newUser</Button>
   
  </>
  )
};

export default MyButton;