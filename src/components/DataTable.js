import React, {useState, useEffect} from 'react';
import '../styles/data-table.css';

function DataTable () {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="table-body">
            <table>
                <thead className="table-head">
                <tr>
                    <th>User Id</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Nickname</th>
                    <th>Recommendation</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.nickname}</td>
                            <td>{item.recommendation}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;