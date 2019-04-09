import React from 'react';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Counter from '../../components/Counter';
import actions from '../../services/users';

const mapStateToProps = (state) => ({
    counter: state.users.counter
})

const mapDispatchToProps = {
    decrementCounter: actions.decrementCounter,
    incrementCounter: actions.incrementCounter,
    resetCounter: actions.resetCounter,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
