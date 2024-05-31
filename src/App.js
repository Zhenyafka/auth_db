import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DataTablePage from './components/DataTablePage';
import FirstTab from './components/Tabs/FirstTab';
import SecondTab from './components/Tabs/SecondTab';
import ThirdTab from './components/Tabs/ThirdTab';



export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage/>} />
                    <Route path="/data_table" element={<DataTablePage/>} />
                    <Route path="/data_table_0" element={<FirstTab/>} />
                    <Route path="/data_table_1" element={<SecondTab/>} />
                    <Route path="/data_table_2" element={<ThirdTab/>} />
                </Routes>
            </Router>
        </div>
    );
}


