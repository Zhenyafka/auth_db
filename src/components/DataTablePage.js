import DataTable from '../components/DataTable';
import Navbar from './Navbar';
import FirstTab from './Tabs/FirstTab';
import SecondTab from './Tabs/FirstTab';
import ThirdTab from './Tabs/FirstTab';
import './styles/data-table.css';


function DataTablePage () {
        return (
            <div className='main-container'>
                <div>
                    <DataTable/>
                </div>
            </div>
        )
    }

export default DataTablePage;
    
