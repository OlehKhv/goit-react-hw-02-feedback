import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './Feedbackoption/Feedbackoption';
import Statistics from './Statistics/Statistics';

const INITIAL_STATE = {
    good: 0,
    neutral: 0,
    bad: 0,
};

export class Section extends Component {
    state = { ...INITIAL_STATE };

    onLeaveFeedback = e => {
        const { textContent } = e.target;
        this.setState(prev => ({
            ...prev,
            [textContent]: prev[textContent] + 1,
        }));
    };

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <section>
                <h2>{this.props.title}</h2>

                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.onLeaveFeedback}
                />

                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={good + neutral + bad}
                    positivePercentage={Math.round(
                        good / ((good + neutral + bad) / 100)
                    )}
                ></Statistics>
            </section>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section;
