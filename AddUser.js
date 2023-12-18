import { FormControl, FormGroup, InputLabel, Input, Typography,styled, Button} from '@mui/material';
import { Adduser } from '../Services/Api';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



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



const AddUser = () => {
    const navigate= useNavigate()
    const  [user, setUser] = useState(defaultvalue)

     const  onValuechange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value})
        console.log(user)

      }
      

      const adduserdetails= async()=>{
         await Adduser(user)
         navigate('/all')


      }
    return (
        <Container>
            <Typography varient= "h1">Add user</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input  onChange={(e)=>onValuechange(e)} name='name'/>

            </FormControl>


            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input  onChange={(e)=>onValuechange(e)} name='username'/>
            </FormControl>


            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input  onChange={(e)=>onValuechange(e)} name='email'/>
            </FormControl>



            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input  onChange={(e)=>onValuechange(e)} name='phone'/>
            </FormControl>


            <FormControl>
            <Button variant="contained" onClick={()=>adduserdetails()}>Add user</Button>
            </FormControl >

        
        </Container>
    )
}

export default AddUser
