import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
    static propTypes = {};

    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <ul>
                {options.map(button => (
                    <li key={nanoid()}>
                        <button onClick={onLeaveFeedback}>{button}</button>
                    </li>
                ))}
            </ul>
        );
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
