import PropTypes from 'prop-types';
import Notification from './Notification';
import {
    SecondTitle,
    StatisticsField,
    StatisticsTextBad,
    StatisticsTextGood,
    StatisticsTextNeutral,
    StatisticsTextPositive,
    StatisticsTextTotal,
} from './Statistics.styled';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <div>
            <SecondTitle>Statistics</SecondTitle>
            {total ? (
                <div>
                    <StatisticsField>
                        <StatisticsTextGood>
                            Good: <span>{good}</span>
                        </StatisticsTextGood>
                        <StatisticsTextNeutral>
                            Neutral: <span>{neutral}</span>
                        </StatisticsTextNeutral>
                        <StatisticsTextBad>
                            Bad: <span>{bad}</span>
                        </StatisticsTextBad>
                    </StatisticsField>
                    <StatisticsField>
                        <StatisticsTextTotal>
                            Total: <span>{total}</span>
                        </StatisticsTextTotal>
                        <StatisticsTextPositive>
                            Positive feedback:{' '}
                            <span>{positivePercentage}%</span>
                        </StatisticsTextPositive>
                    </StatisticsField>
                </div>
            ) : (
                <Notification message="There is no feedback"></Notification>
            )}
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
