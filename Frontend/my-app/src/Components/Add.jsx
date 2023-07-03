import { Button, TextField } from '@mui/material'
import React ,{ useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const Add = (props) => {
  var navigate=useNavigate();
  
  console.log("props data",props.data);
  console.log("props method",props.method);

  var[inp,setInp]=useState(props.data);
  const inputHandler=(e)=>{
    const {name,value}=e.target;
    setInp((inp)=>({...inp,[name]:value}));
    console.log(inp)

  }
  const readHandler=()=>{
    console.log("clicked");
    if(props.method==='post'){
    axios.post("http://localhost:3008/addrecipe",inp)
    .then((response)=>{
      alert("data added");
      navigate('/');
    })
    .catch((err)=>console.log(err));
   };
   if(props.method==='put'){
    axios.put("http://localhost:3008/edit/"+inp._id,inp)
    .then((response)=>{
      alert('updated');
      window.location.reload(false)
    })
   }
  }
  return (
    <div style={{paddingTop:'20px'}}>
      <TextField name='name' value={inp.name} label="Cuisine name" onChange={inputHandler}/>&nbsp;
      <TextField name='duration' value={inp.duration}  label="cooking duration" onChange={inputHandler}/><br></br><br></br>
      
      <TextField name='number' value={inp.number} label="No: of serves" onChange={inputHandler}/>&nbsp;
   
      <TextField name='image' value={inp.image} label="image" onChange={inputHandler}/><br></br><br></br>
      <Button color='secondary' variant='contained' onClick={readHandler}>SUBMIT</Button>
    </div>
  )
}

export default Add