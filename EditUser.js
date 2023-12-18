import { FormControl, FormGroup, InputLabel, Input, Typography,styled, Button} from '@mui/material';
import {edituser, getUsersingle } from '../Services/Api';
import React from 'react'
import { useState,useEffect } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';




   const Container=styled(FormGroup)`
   width: 50%;
   margin: 5% auto;
  & >div {
    margin-top: 5px
  }  `
 
const defaultvalue={
    
    name: "",
    username: "",
    email: "",
    phone: "",
}



const EditUser = () => {
    const  [user, setUser] = useState(defaultvalue)
    const [details, setDetails] = useState({ 
        name: "",
        username: "",
        email: "",
        phone: "",
})
    const {id} = useParams()
    console.log(id)
    const navigate= useNavigate()

     const  onValuechange=(e)=>{
        setDetails({...details, [e.target.name]:e.target.value})
        console.log(user)

      }

      const edituserdetails= async()=>{
         await edituser(details,id)
         navigate('/all')



      }

   const loaduserdetails=async function(){
        let response =await getUsersingle(id);
        console.log("api",response.data)
        let responseData = response.data
        setDetails({
                _id:id,             
                name: responseData[0].name,
                username: responseData[0].username,
                email: responseData[0].email ,                
                phone: responseData[0].phone,
                
            })
       
        console.log(details)

      }

      useEffect(() => {
          loaduserdetails()
      }, [])
      
      
      
    return (
        <Container>
            {/* {JSON.stringify(user)} */}
            <Typography varient= "h1">Edit user</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input  onChange={(e)=>onValuechange(e)} name='name' value={details.name} />

            </FormControl>


            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input  onChange={(e)=>onValuechange(e)} name='username' value={details.username}/>
            </FormControl>


            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input  onChange={(e)=>onValuechange(e)} name='email' value={details.email}/>
            </FormControl>



            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input  onChange={(e)=>onValuechange(e)} name='phone' value={details.phone}/>
            </FormControl>


            <FormControl>
            <Button variant="contained" onClick={()=>edituserdetails()}>Edit user</Button>
            </FormControl >

        
        </Container>
    )
}

export default EditUser
