import React,{useContext,useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {useHistory,useParams} from 'react-router-dom'
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { dataContext } from './DataProvider';

function EditTeacher() {
  const history=useHistory();
  const {id}=useParams();
  const {tea}=useContext(dataContext);
  const [teacherList,setTeacherList]=tea;
  const teacher=teacherList[id];
  console.log(teacher);
  const handleSubmit = (event) => {

    const data = new FormData(event.currentTarget);
    const editT={ id:teacher.id,
      name:data.get('fullname').toString(),
      doj:dt.toString(),
      gender:gender,
      contact:data.get('contact').toString(),
      address:data.get('address').toString(),
    };
      const copyT=teacherList;
      copyT[id]=editT;
    
     setTeacherList([...copyT]);
    history.push('/listT');
    event.preventDefault();
  };
  const [gender, setGender] = useState(teacher.gender);
  const [dt, setDt] =useState(new Date(teacher.doj));
  const handleChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
    <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <PersonAddIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Edit Teacher
    </Typography>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <TextField
            name="fullname"
            required
            fullWidth
            id="full"
            label="Full Name"
            defaultValue={teacher.name}
          />
        </Grid>
     
        <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>

        <DatePicker
         
          disableFuture
          label="DOJ"
          openTo="year"
         
          views={['year', 'month', 'day']}
          value={dt}
          onChange={(newValue) => {
            setDt(newValue);
          }}
          renderInput={(params) => <TextField {...params} fullWidth label="DOJ" />}
          
        />
        </LocalizationProvider>
        </Grid>
        
        <Grid item xs={12} >

        {/* <FormControl fullWidth> */}
  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    defaultValue={gender}
    onChange={handleChange} 
  >
    <FormControlLabel value="Female" control={<Radio />} label="Female" />
    <FormControlLabel value="Male" control={<Radio />} label="Male" />
  </RadioGroup>
{/* </FormControl> */}
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          label="Contact Number"
          defaultValue={teacher.contact}
          type="tel" id="contact" placeholder='xxxxxxxxxx'
          fullWidth
          name="contact"
          
        />
         
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            defaultValue={teacher.address}
          />
        </Grid>
        
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Update
      </Button>
    
    </Box>
  </Box>
    </Container>

  )
}

export default EditTeacher