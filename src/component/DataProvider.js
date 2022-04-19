
import React, { useState,createContext } from 'react'
export const dataContext = createContext();

function DataProvider(props) {
    const [teacherList, setTeacherList] = useState([
        {
            id:1,
            name:"Sumathi.M",
            doj:"Sat Apr 09 2022 17:58:46 GMT+0530 (India Standard Time)",
            gender:"Female",
            contact:"9876541230",
            address:"24,ffcfdfd,fdhgfdh-12"
        },
        {
            id:2,
            name:"Gowthami.J",
            doj:"Sat Apr 10 2022 17:58:46 GMT+0530 (India Standard Time)",
            gender:"Female",
            contact:"9732541230",
            address:"24,ffcfdfd,fdhgfdh-12"
        },
        {
            id:3,
            name:"Sangeetha.M",
            doj:"Sat Apr 09 2022 17:58:46 GMT+0530 (India Standard Time)",
            gender:"Female",
            contact:"9800541230",
            address:"24,ffcfdfd,fdhgfdh-12"
        },
        {
          id:4,
          name:"Aarthi.M",
          doj:"Sat Apr 19 2022 17:58:46 GMT+0530 (India Standard Time)",
          gender:"Female",
          contact:"9807411230",
          address:"24,ffcfdfd,fdhgfdh-1"
      }
    ])
    const [studentList, setStudentList] = useState([
        {
          id:"1",
          name:"Madhumidha.A",
          adno:"sda_001",
          grade:"Grade1-A",
          fname:"Anbazhagan.P",
          mname:"Valarmathi.A",
          contact:"7894561230",
          gender:"Female",
          address:"12,ffcfdfd,fdhgfdh-12"
  
        },
        {
          id:"2",
          name:"Boopalan.M",
          adno:"sda_002",
          grade:"Grade1-A",
          fname:"Murugesan.M",
          mname:"Malliga.M",
          contact:"7894412230",
          gender:"Female",
          address:"24,ffcfdfd,fdhgfdh-12"
  
        },
        {
          id:"3",
          name:"Praneeta.K",
          adno:"sda_003",
          grade:"Grade1-B",
          fname:"Karthick.P",
          mname:"Magi.K",
          contact:"7894561230",
          gender:"Female",
          address:"12,ffcfdfd,fdhgfdh-12"
  
        },
        {
          id:"4",
          name:"Mugundan.H",
          adno:"sda_004",
          grade:"Grade1-B",
          fname:"Harish.K",
          mname:"Nandhini.H",
          contact:"7894561230",
          gender:"Male",
          address:"12,ffcfdfd,fdhgfdh-12"
  
        },
        {
          id:"5",
          name:"Parishith.S",
          adno:"sda_005",
          grade:"Grade1-C",
          fname:"Seenu.R",
          mname:"Bala.S",
          contact:"7856236580",
          gender:"Male",
          address:"12,ffcfdfd,fdhgfdh-12"
  
        }
  
      ])
      const [classes, setClasses]=useState([
        {label:"Grade1-A",id:1,ct:"Gowthami.J"},
        {label:"Grade1-B",id:2,ct:"Sumathi.M"},
        {label:"Grade1-C",id:3,ct:"Aarthi.M"},
    ])
    
  return (
<dataContext.Provider value={{ stu: [studentList, setStudentList], tea: [teacherList, setTeacherList],cls:[classes,setClasses]}} >
    {props.children}
</dataContext.Provider>
  )
}

export default DataProvider