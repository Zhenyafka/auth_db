import DataTable from '../components/DataTable';
import '../styles/data-table.css';

function DataTablePage () {
        return (
            <div className='main-container'>
                <div className='title-container'>
                    Data Table
                </div>
                <div>
                    <DataTable/>
                </div>
            </div>
        )
    }

export default DataTablePage;
    
