import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './Feedbackoption/Feedbackoption';
import Statistics from './Statistics/Statistics';
import { MainTitle } from './Section.styled';

export class Section extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    state = { good: 0, neutral: 0, bad: 0 };

    onLeaveFeedback = option => {
        this.setState(prev => ({
            ...prev,
            [option]: prev[option] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        return Math.round(good / ((good + neutral + bad) / 100));
    };

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <section>
                <MainTitle>{this.props.title}</MainTitle>

                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.onLeaveFeedback}
                />

                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                ></Statistics>
            </section>
        );
    }
}

export default Section;
