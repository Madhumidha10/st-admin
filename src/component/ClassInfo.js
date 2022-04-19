import React,{useContext} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useParams,useHistory} from 'react-router-dom'
import {dataContext} from './DataProvider'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#A7A7A7',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function ClassInfo() {
  const {id}=useParams();
  const history=useHistory();
  const {stu,tea,cls}=useContext(dataContext)
  const [studentList,setStudentList]=stu;
  const [teacherList,setTeachersList]=tea;
  const [classes,setClasses]=cls;
  const grade=classes[id].label;
  const ct=classes[id].ct;
  const students=studentList.filter((el)=>el.grade===grade);
  
  return (   
    <Container component="main" maxWidth="xs">
    <Box
    sx={{
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  > 
          <Typography gutterBottom variant="h5" component="div">
         {grade}

          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Class Teacher: {ct}
            </Typography>
          <TableContainer component={Paper} sx={{m:5}}>
          <Typography gutterBottom variant="h5" component="div">
        No of Students :{students.length}
          </Typography>
      <Table sx={{ minWidth:100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell align="center">Admission No</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
  
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student,index) => (
            <StyledTableRow key={index}>
            
              <StyledTableCell align="center">{student.adno}</StyledTableCell>
              <StyledTableCell align="center">{student.name}</StyledTableCell>
  
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Box>
</Container>
  

  )
}

export default ClassInfo