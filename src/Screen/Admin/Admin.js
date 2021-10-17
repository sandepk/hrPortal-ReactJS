import React from 'react';
import './Admin.scss';
import AdminBody from './AdminBody/AdminBody';
import AdminHeader from './AdminHeader/AdminHeader';
const Admin = () => {
    return (
        <div className="admin__container">
            <div className="admin__header"><AdminHeader /></div>
            <div className="admin__Body"><AdminBody /></div>
            
        </div>
    )
}

export default Admin
