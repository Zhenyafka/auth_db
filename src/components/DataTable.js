import React, {useState, useEffect} from 'react';
import './styles/data-table.css';
import TablePagination from '@mui/material/TablePagination';
import Navbar from './Navbar';


function DataTable () {
    return (
        <div className='main-container'>
            <Navbar/>
            <div className="table-body">
                <table className="empty-table">
                    <thead className="table-head">
                    <tr>
                        <th width="200px">User ID</th>
                        <th>User Data</th>
                        <th>Approval</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Empty</td>
                        <td>Empty</td>
                        <td>Empty</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DataTable;