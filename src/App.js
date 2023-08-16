import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import AllocationForm from './components/AllocationForm';
import ExpenseItem from './components/ExpenseItem';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import Remaining from './components/Remaining';
import Location from './components/Location';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>

                    <div className="container">
                        <div className = "row mt-3">
                            <div className = "col-sm">
                                <Budget></Budget>
                            </div>
                            <div className = "col-sm">
                                <Remaining></Remaining>
                            </div>
                            <div className = "col-sm">
                                <ExpenseTotal></ExpenseTotal>
                            </div>
                            <div className = "col-sm">
                                <Location></Location>
                            </div>
                            
                        </div>
                        <h3 className = "mt-3"> Allocation</h3>
                        <div className = "row mt-3">
                            <div className = "col-sm">
                                <ExpenseList></ExpenseList>
                            </div>
                        </div>

                        <h3 className = "mt-3">Change Allocation</h3>
                        <div className = "row mt-3">
                            <div className = "col-sm">
                                <AllocationForm></AllocationForm>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
