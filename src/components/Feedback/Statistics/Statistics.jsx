import { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';

export class Statistics extends Component {
    static propTypes = {};

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <div>
                <h3>Statistics</h3>
                {total ? (
                    <div>
                        <p>
                            Good: <span>{good}</span>
                        </p>
                        <p>
                            Neutral: <span>{neutral}</span>
                        </p>
                        <p>
                            Bad: <span>{bad}</span>
                        </p>
                        <p>
                            Total: <span>{total}</span>
                        </p>
                        <p>
                            Positive feedback: <span>{positivePercentage}%</span>
                        </p>
                    </div>
                ) : (
                    <Notification message="There is no feedback"></Notification>
                )}
            </div>
        );
    }
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
