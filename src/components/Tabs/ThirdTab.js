import React, {useState, useEffect} from 'react';
import '../styles/data-table.css';
import TablePagination from '@mui/material/TablePagination';
import Navbar from '../Navbar';


function ThirdTab() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            fetch('/data.json')
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error('Error fetching data:', error));
        };
        fetchData();
    },);

    const dataParse = () => {
        let dataToString = JSON.stringify(data, null, 1)
        dataToString = dataToString.replace(/[\[\]{}]/g, '').replace(/\n\s*\n/g, '\n').trim();
        ;
        return (
            dataToString
        )
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div className='main-container'>
            <Navbar/>
            <div className="table-body">
                <table>
                    <thead className="table-head">
                    <tr>
                        <th>User ID</th>
                        <th>User Data</th>
                        <th>Approval</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <tr key={index}>
                            <td>{index.userId}</td>
                            <td className="json">{dataParse(data)}</td>
                            <td>{<button className="button">Block</button>}</td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <TablePagination sx={{maxWidth: '100%'}}
                                     rowsPerPageOptions={[10, 25, 100]}
                                     component="div"
                                     count={data.length}
                                     rowsPerPage={rowsPerPage}
                                     page={page}
                                     onPageChange={handleChangePage}
                                     onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    </tfoot>
                </table>

            </div>
        </div>
    )
}

export default ThirdTab;