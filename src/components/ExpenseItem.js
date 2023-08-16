import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location, currency} = useContext(AppContext);


    const handleIncrease = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
        });
    };

    const handleDecrease = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
        });
    };

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency} {props.cost}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncrease}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDecrease}></FaMinusCircle></td>
        <td><FaTimesCircle size='2.2em' color="blue" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
