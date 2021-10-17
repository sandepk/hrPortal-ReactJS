import React from 'react';
import './AdminBodyTableBodyItem.scss';
import {IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminBodyTableBodyItem = (props) => {
    return (
        <div className="adminBodyTableBodyItem__container">
            <div className="adminBodyTableBodyItem__employeeId">{props.id}</div>
            <div className="adminBodyTableBodyItem__department">{props.department}</div>
            <div className="adminBodyTableBodyItem__name">{props.name}</div>
            <div className="adminBodyTableBodyItem__gender">{props.gender}</div>
            <div className="adminBodyTableBodyItem__email">{props.email}</div>
            <div className="adminBodyTableBodyItem__delete">
                <IconButton
                onClick={()=>props.deleteEmployeeFromListOfEmployees(props.id)}
                >
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            </div>
        </div>
    )
}

export default AdminBodyTableBodyItem;
