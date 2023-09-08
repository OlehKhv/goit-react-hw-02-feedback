import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
    static propTypes = {};

    render() {
        console.log(this.props.options);
        return (
            <ul>
                {this.props.options.map(button => (
                    <li>
                        <button>{button}</button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default FeedbackOptions;
