import { styled } from 'styled-components';

export const OptionList = styled('ul')(() => ({
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '40px',
}));

export const ButtonOption = styled('button')`
    width: 100px;
    height: 40px;
    display: block;
    border: 1px solid #171819;
    border-radius: 8px;
    font-size: 20px;
    &:is(:hover, :focus) {
        background-color: #57a0ea;
    }
`;
