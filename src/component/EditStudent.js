import * as React from 'react';
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
import {useState,useContext} from 'react';
import {dataContext} from './DataProvider'
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {useHistory,useParams} from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete';
function EditStudent() {
  const history= useHistory()
  const {id}=useParams()
  const {stu,cls}=useContext(dataContext);
  const [studentList,setStudentList]=stu;

const [gr,setGr]=useState(studentList[id].grade)

  const [classes,setClasses]=cls

    const handleSubmit = (event) => {
  
    const data = new FormData(event.currentTarget);
   const editS={
      id:studentList[id].id,
      name:data.get("fullname"),
      adno:data.get("adNo"),
      grade:gr,
      fname:data.get("fName"),
      mname:data.get("mName"),
      contact:data.get("contact"),
      gender:gender,
      address:data.get("address")

    };


  const copyS=studentList;
  copyS[id]=editS

 setStudentList([...copyS]);


 
    history.push('/listS');
    event.preventDefault();
  };
  const [gender, setGender] = useState(studentList[id].gender);
  
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
      Edit Student
    </Typography>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <TextField
            name="fullname"
            defaultValue={studentList[id].name}
            required
            fullWidth
            id="full"
            label="Full Name"
        
    
          />
        </Grid>
        <Grid item sm={6}>
           <TextField
            required
            fullWidth
            defaultValue={studentList[id].adno}
            id="adNo"
            label="Admission Number"
            name="adNo"
          
          />
        </Grid>
        <Grid item sm={6} >
    
          <Autocomplete
      disablePortal
      id="grade"  
      options={classes}
      onChange={(e, gra) => {
        setGr(gra.label);
      }}
      value={gr}
      isOptionEqualToValue={(option, value) => option.label === value}
      renderInput={(params) => <TextField {...params} label="Grade"  />}
     
    />
        </Grid>
        <Grid item sm={6} >
          <TextField
            required
            fullWidth
            defaultValue={studentList[id].fname}
            id="fName"
            label="Father's Name"
            name="fName"
         
          />
        </Grid>
        <Grid item sm={6} >
          <TextField
            required
            fullWidth
            defaultValue={studentList[id].mname}
            id="mName"
            label="Mother's Name"
            name="mName"
            
          />
        </Grid>
   
        <Grid item xs={12}>
        <TextField
          required
          defaultValue={studentList[id].contact}
          label="Contact Number"
          type="tel" id="contact" placeholder='xxxxxxxxxx'
          fullWidth
          name="contact"

        />
         
        </Grid>
        <Grid item xs={12} >
        {/* <FormControl fullWidth> */}
  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
   defaultValue={gender}
    name="controlled-radio-buttons-group"
   onChange={handleChange} 
  >
    <FormControlLabel value="Female" control={<Radio />} label="Female" />
    <FormControlLabel value="Male" control={<Radio />} label="Male" />
  </RadioGroup>
{/* </FormControl> */}
        </Grid>
       

        <Grid item xs={12} >
          <TextField
            required
            fullWidth
            defaultValue={studentList[id].address}
            id="address"
            label="Address"
            name="address"
    
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



export default EditStudent