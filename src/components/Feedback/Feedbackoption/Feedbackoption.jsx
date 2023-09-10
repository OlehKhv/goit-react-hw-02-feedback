import PropTypes from 'prop-types';
import { ButtonOption, OptionList } from './Feedbackoption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <OptionList>
            {options.map(button => (
                <li key={button}>
                    <ButtonOption onClick={() => onLeaveFeedback(button)}>
                        {button}
                    </ButtonOption>
                </li>
            ))}
        </OptionList>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
