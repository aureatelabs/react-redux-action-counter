import React from "react";
import PropTypes from 'prop-types';
import styles from "./style.scss";

const Counter = ({ counter, decrementCounter, incrementCounter, resetCounter }) => {
    return (
        <div>
            <h2>Counter :: {counter.toString()}</h2>
            <button
                className={styles.minus}
                onClick={decrementCounter}
            >
                Minus(-)
            </button>
            <button
                className={styles.plus}
                onClick={incrementCounter}
            >
                Plus(+)
            </button>
            <button
                className={styles.reset}
                onClick={resetCounter}
            >
                Reset
            </button>
        </div>
    );
};

Counter.propTypes = {
    counter: PropTypes.number,
    decrementCounter: PropTypes.func.isRequired,
    incrementCounter: PropTypes.func.isRequired,
    resetCounter: PropTypes.func.isRequired,
};

export default Counter;
