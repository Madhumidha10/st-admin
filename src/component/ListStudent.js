import React,{useContext,} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { dataContext } from './DataProvider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useHistory} from 'react-router-dom'
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


function ListStudent() {
  const history=useHistory()
  const {stu}=useContext(dataContext);
  const [studentList,setStudentList]=stu;
  const deleteStudent=(id)=>{
     const cpySL=[...studentList];
    cpySL.splice(id,1);
    setStudentList(cpySL);
 
  }
  return (
 
     <TableContainer component={Paper} sx={{m:15}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Admission No</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Grade</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {student.id}
              </StyledTableCell>
              <StyledTableCell align="center">{student.adno}</StyledTableCell>
              <StyledTableCell align="center">{student.name}</StyledTableCell>
              <StyledTableCell align="center">{student.grade}</StyledTableCell>
              
              <StyledTableCell align="center">
        <IconButton aria-label="profile-view" color="info"  onClick={()=>{history.push(`/sInfo/${index}`)}} >
           <AccountCircleIcon />
       
          </IconButton>
         <IconButton aria-label="delete" color="error" onClick={(e)=>{deleteStudent(index)}}
         >
            <DeleteIcon  />
         
          </IconButton>
          <IconButton aria-label="edit" color="warning" onClick={(e)=>{history.push(`/editS/${index}`)}}
           >
              <EditIcon    />

          </IconButton>
        </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListStudent