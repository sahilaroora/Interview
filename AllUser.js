import { Button, Table,TableBody, TableCell, TableHead, TableRow,styled} from '@mui/material';
import React from 'react';
import { useEffect } from 'react'
import { getUser } from '../Services/Api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { deletUserdetails } from '../Services/Api';




const AllUser = () => {
  const [user, setUser] =  useState([])
  // console.log(user)
  
  
  
 
  
  
  const getAllUser= async ()=>{
    const response=await getUser()
    // console.log(response.dser()
    // console.log(response.data)
    setUser(response.data)
  }
  const deletuser = async(id)=>{
      //  console.log(id);
        deletUserdetails(id);
       getAllUser()
  
     }
   useEffect(() => {
    getAllUser(); 
  }, [])
  const StyledTable = styled(Table)`
     width:90%;
     margin: 50px auto 0 auto;
     `
  
     const Thead = styled(TableRow)`
     background: black;
     &>th{
      color: white;
      font-size: 20px;
      ;}
     `


     const TBody = styled(TableRow)`

     &>td{
      font-size: 15px;


     }
     `
  
     
  
  
  return (
    <StyledTable>
      <TableHead>
       <Thead>
        <TableCell>id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Buttons E</TableCell>
       </Thead>
      </TableHead>
      <TableBody>
        {
        user.map((user)=>(
          <TBody key={user.id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant='contained' component={Link}  to={`/edit/${user._id}`}>Edit</Button>
             <Button variant='contained' color='secondary' onClick={()=>deletuser(user._id)}>Delet</Button>
             </TableCell>
          </TBody>
        ))
        }

      </TableBody>
    </StyledTable>
  )
}

export default AllUser
