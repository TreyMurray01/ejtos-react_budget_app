import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {currency,dispatch,budget,expenses}  = useContext(AppContext);
    const updateBudget = (event) => {
        let newbudget = parseInt(event.target.value);
        if (newbudget > 20000){
            alert("Cannot exceed 20000!");
            dispatch({
                type: 'SET_BUDGET',
                payload: 20000,
            });
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: newbudget,
        });
    
    }
 
    return (
        <div className='alert alert-primary'>
            <span>Budget: {currency} <input type= "number" min ="0" max = "20000" step = "10" value = {budget}  onChange = {updateBudget}></input> </span>
        </div>
    );
};

export default Budget;
