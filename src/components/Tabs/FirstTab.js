import React, {useState, useEffect} from 'react';
import '../styles/data-table.css';
import TablePagination from '@mui/material/TablePagination';
import Navbar from '../Navbar';


function FirstTab() {
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
                //
                //
                //             fetch("https://itv.ngo2.ru/wp-json/citv/v1/users?", {
                //                 headers: {
                //                     "token": "ddddd",
                //                     "x-fair-man": "66584717$exam"
                //                 },
                //                 body: {
                //                     "forms_field": `{"code": "no forms_field"}`,
                //                     "user_id": "84555"
                //                 }
                //             })
                //                 .then((response) => response.text())
                //                 .then(data => setData(data))
                //                 .catch((error) => console.error(error));
                //         };
    //             fetchData();
    //         },
    //         }
    // )
    // ;
    // console.log(data)

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
                            <td>
                                {<button className="button">Approve</button>}
                                <br/>
                                {<button className="button">Refuse</button>}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <div className="pagination">
                        <TablePagination sx={{maxWidth: '100%'}}
                                         rowsPerPageOptions={[10, 25, 100]}
                                         component="div"
                                         count={data.length}
                                         rowsPerPage={rowsPerPage}
                                         page={page}
                                         onPageChange={handleChangePage}
                                         onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                    </tfoot>
                </table>

            </div>
        </div>
    )
}

export default FirstTab;