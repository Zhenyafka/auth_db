import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TablePagination from '@mui/material/TablePagination';


const DataTable = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

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

    const first = data.filter(index => index.status === '0');
    const second = data.filter(index => index.status === '1');

    return (
        <Tabs>
            <TabList>
                <Tab>first</Tab>
                <Tab>second</Tab>
            </TabList>

            <TabPanel>
                <table>
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Data</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {first
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((rows, index) => (
                        <tr key={index}>
                            <td>{index.userId}</td>
                            <td>{dataParse(data)}</td>
                            <td><button onClick={() => alert(`Name: ${index.name}, Age: ${index.age}`)}>Action</button></td>
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
            </TabPanel>

            <TabPanel>
                <table>
                    <thead>
                    <tr>
                            <th>User ID</th>
                            <th>User Data</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    {second
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((rows, index) => (
                        <tr key={index}>
                            <td>{index.userId}</td>
                            <td>{dataParse(data)}</td>
                            <td><button onClick={() => alert(`Name: ${index.name}, Age: ${index.age}`)}>Action</button></td>
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
            </TabPanel>
        </Tabs>
    );
};

export default DataTable;