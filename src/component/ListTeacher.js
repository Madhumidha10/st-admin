import React,{useContext} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { dataContext } from './DataProvider';
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


function ListTeacher() {
  const history=useHistory();
  const {tea}=useContext(dataContext);
  const [teacherList,setTeacherList]=tea;
const deleteTeacher=(id)=>{
const cpyT=[...teacherList];
cpyT.splice(id,1);
setTeacherList(cpyT);

}
  return (
 
     <TableContainer component={Paper} sx={{m:15}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teacherList.map((teacher,index) => (
            <StyledTableRow key={teacher.id}>
              <StyledTableCell component="th" scope="row">
                {teacher.id}
              </StyledTableCell>
              <StyledTableCell align="center">{teacher.name}</StyledTableCell>
              <StyledTableCell align="center">{teacher.gender}</StyledTableCell>
              <StyledTableCell align="center">{teacher.contact}</StyledTableCell>
              <StyledTableCell align="center">
        <IconButton aria-label="profile-view" color="info" onClick={()=>{history.push(`/tInfo/${index}`)}} >
           <AccountCircleIcon   />
          
          </IconButton>
         <IconButton aria-label="delete" color="error" onClick={(e)=>{deleteTeacher(index)}}
         >
            <DeleteIcon   />
          </IconButton>
          <IconButton aria-label="edit" color="warning" onClick={(e)=>{history.push(`/editT/${index}`)}}
           >
              <EditIcon  />

          </IconButton>
        </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListTeacher