import React from 'react';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import actions from '../../services/users';

const mapStateToProps = (state) => ({
    counter: state.users.counter
})

const mapDispatchToProps = {
    onClick: actions.incrementCounter
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
