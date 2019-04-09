import { createActions } from 'redux-actions';

const prefix = 'APP';
const actionTypes = [
    'INCREMENT_COUNTER',
    'DECREMENT_COUNTER',
    'RESET_COUNTER'
];

export default createActions(...actionTypes, { prefix });
