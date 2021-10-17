import React from 'react';
import './AdminBodyTableHeader.scss';
const AdminBodyTableHeader = (props) => {

    return (
        <div className="adminBodyTableHeader__container">
            <div className="adminBodyTableHeader__employeeId">Employee ID</div>
            <div className="adminBodyTableHeader__department">Department</div>
            <div className="adminBodyTableHeader__name">Name</div>
            <div className="adminBodyTableHeader__gender">Gender</div>
            <div className="adminBodyTableHeader__email">Email</div>
            <div className="adminBodyTableHeader__delete">Delete</div>
        </div>
    )
}

export default AdminBodyTableHeader
