import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ButtonOption, OptionList } from './Feedbackoption.styled';

export class FeedbackOptions extends Component {
    static propTypes = {};

    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <OptionList>
                {options.map(button => (
                    <li key={nanoid()}>
                        <ButtonOption onClick={onLeaveFeedback}>
                            {button}
                        </ButtonOption>
                    </li>
                ))}
            </OptionList>
        );
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
