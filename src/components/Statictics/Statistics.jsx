import { StatisticsTitle, StatisticsCard, StatisticsFeedback, StatisticsValue, RezultContainer } from './Statistics.styled';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';



export const Statistics = ({ValueGood, ValueNatuer, ValueBad, totalFeedback, percentage  }) => {
    return (
        <StatisticsCard>
            <StatisticsTitle>Statistics</StatisticsTitle>
            {totalFeedback === 0
                ?  <Notification message="There is no feedback"></Notification>
                : <>
                    <StatisticsFeedback>
                        <StatisticsValue>Good: {ValueGood}</StatisticsValue>
                        <StatisticsValue>Neutral: {ValueNatuer}</StatisticsValue>
                        <StatisticsValue>Bad: {ValueBad}</StatisticsValue>
                    </StatisticsFeedback>
                    <RezultContainer>
                        <p>Total: {totalFeedback}</p>
                        <p>Positive feedback: {percentage}%</p>
                    </RezultContainer>
                    
                
                </>
                
                }  
        </StatisticsCard>
        
    )
}

Statistics.propTypes = {
    ValueGood: PropTypes.number.isRequired,
    ValueNatuer: PropTypes.number.isRequired,
    ValueBad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired
    
}