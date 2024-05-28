import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DataTablePage from './components/DataTablePage';




export default function App() {
    return (
        <div>
            {/*<Router>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<LoginPage/>} />*/}
            {/*        <Route path="/table" element={<DataTablePage/>} />*/}
            {/*    </Routes>*/}
            {/*</Router>*/}
            <LoginPage/>
            <DataTablePage/>
        </div>
    );
}


