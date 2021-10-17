import React from 'react';
import './AdminBodyTable.scss';
import AdminBodyTableBody from './AdminBodyTableBody/AdminBodyTableBody';
import AdminBodyTableHeader from './AdminBodyTableHeader/AdminBodyTableHeader'
const AdminBodyTable = (props) => {
    return (
        <div className="adminBodyTable__container">
            <div className="adminBodyTable__header"><AdminBodyTableHeader/></div>
            <div className="adminBodyTable__body">
                <AdminBodyTableBody {...props} />
            </div>
            
        </div>
    )
}

export default AdminBodyTable;
