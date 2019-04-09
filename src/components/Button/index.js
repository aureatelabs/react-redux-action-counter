import React from "react";
import styles from "./style.scss";
import PropTypes from 'prop-types';

const Button = ({ counter, onClick }) => {

    return (
        <button
            onClick={onClick}
            className={styles.button}
        >
            You clicked me: {counter}
        </button>
    );
};

Button.propTypes = {
    counter: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;
