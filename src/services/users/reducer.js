import { handleActions } from 'redux-actions';
import actions from './actions';

const defaultState = {
    counter: 0
};

const reducerMap = {
    [actions.incrementCounter](state) {
        return {
            counter: state.counter + 1
        };
    },
    [actions.decrementCounter](state) {
        return {
            counter: state.counter - 1
        };
    },
    [actions.resetCounter](state) {
        return {
            counter: 0
        };
    }
}


// REDUCERS
export default handleActions(reducerMap, defaultState);
