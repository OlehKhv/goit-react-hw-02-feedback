import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NotificationText } from './Statistics.styled';

export class Notification extends Component {
    render() {
        return <NotificationText>{this.props.message}</NotificationText>;
    }
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;
