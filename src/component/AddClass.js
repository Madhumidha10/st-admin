import React,{useContext,useState} from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { dataContext } from './DataProvider';



function AddClass() {
  const history= useHistory()
  const grade=["1","2","3","4","5","6","7","8","9","10","11","12"]
  const sec=["A","B","C","D","E"]
  const {tea}=useContext(dataContext);
  const [teacherList,setTeacherList]=tea;
  const tL=[];
  {teacherList.map((t)=>tL.push(t.name))}
  const {cls}=useContext(dataContext);
  const [classes,setClasses]=cls
  const [gr,setGr]=useState('');
  const [se,setSe]=useState('');
  const [ct,setCT]=useState('');
  const handleSubmit = (event) => {
  
  const newClass={
    label:`Grade${gr}-${se}`,
    id:parseInt(Math.floor(Math.random() * 20)),
    ct:ct,
  }

  setClasses([...classes,newClass]);
  history.push('./listC')
  event.preventDefault();
    };
  

  return  <Container component="main" maxWidth="xs">
  <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mt:20
    }}
  >
<Typography component="h1" variant="h5">
           Add New Class
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
  <Autocomplete
      disablePortal   
      id="grade"
      onChange={(e, gr) => {
        setGr(gr);
      }}
      options={grade}
      sx={{ width: 300 ,mt:2}}
      renderInput={(params) => <TextField {...params} label="Grade"  />}
    
    />
    <Autocomplete
      disablePortal
      id="sec"
      onChange={(e, se) => {
        setSe(se);
      }}
      options={sec}

      sx={{ width: 300,mt:2 }}
      renderInput={(params) => <TextField {...params} label="Section" />}
     
    />
      <Autocomplete
      disablePortal
      id="ct"
      options={tL}
      sx={{ width: 300,mt:2 }}
      renderInput={(params) => <TextField {...params} label="Class Teacher" />}
      onChange={(e,newValue) => {
        setCT(newValue);
      }}
    />
     <Button
              type="submit"
          
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
  </Box>

  
  </Box>
</Container>
}

export default AddClass