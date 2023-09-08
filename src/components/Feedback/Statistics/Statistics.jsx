import { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
    static propTypes = {};

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <div>
                <h3>Statistics</h3>
                {/* <Notification message="There is no feedback"></Notification> */}
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
            </div>
        );
    }
}

export default Statistics;
