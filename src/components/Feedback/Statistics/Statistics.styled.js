import { styled } from 'styled-components';

export const SecondTitle = styled('h3')(() => ({
    color: '#171819',
    marginBottom: '20px',
    textAlign: 'center',
}));

export const NotificationText = styled('h4')(() => ({
    color: '#424D55',
    textAlign: 'center',
    opacity: '0.6',
}));

export const StatisticsField = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
}));

export const StatisticsTextGood = styled('p')(() => ({
    color: '#11A33D',
    fontSize: '32px',
}));

export const StatisticsTextNeutral = styled('p')(() => ({
    color: '#AD8117',
    fontSize: '32px',
}));

export const StatisticsTextBad = styled('p')(() => ({
    color: '#AD1717',
    fontSize: '32px',
}));

export const StatisticsTextTotal = styled('p')(() => ({
    color: '#1758AD',
    fontSize: '32px',
}));

export const StatisticsTextPositive = styled('p')(() => ({
    color: '#17AD8D',
    fontSize: '32px',
}));
