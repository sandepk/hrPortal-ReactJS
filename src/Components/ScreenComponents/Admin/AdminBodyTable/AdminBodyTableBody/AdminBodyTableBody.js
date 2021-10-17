import React,{useState,useEffect} from 'react'
import AdminBodyTableBodyItem from './AdminBodyTableBodyItem/AdminBodyTableBodyItem';
import {v4 as uuidv4} from 'uuid';
const AdminBodyTableBody = (props) => {
    const [employeeDetails ,setEmployeeDetails] = useState([]);
    useEffect(()=>{
        setEmployeeDetails(props.details)
    },[props.details])
    let renderedDetails = null;
    renderedDetails = Array.isArray(employeeDetails) &&  employeeDetails.length > 0  && employeeDetails.map((item,index)=>{
        
         return <AdminBodyTableBodyItem {...item} 
         deleteEmployeeFromListOfEmployees={props.deleteEmployeeFromListOfEmployees}
         key={uuidv4()}
         />
     })
    return (
        <div className="adminBodyTableBody__container">
           {renderedDetails}
        </div>
    )
}

export default AdminBodyTableBody
