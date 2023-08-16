import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {currency,dispatch,budget}  = useContext(AppContext);
    const updateBudget = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(event.target.value),
        });

    }
 
    return (
        <div className='alert alert-primary'>
            <span>Budget: {currency} <input type= "number" min ="0" max = "20000" step = "10" value = {budget}  onChange = {updateBudget}></input> </span>
        </div>
    );
};

export default Budget;
