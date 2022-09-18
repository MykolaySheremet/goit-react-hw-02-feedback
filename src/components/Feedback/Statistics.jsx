import { StatisticsTitle, StatisticsFeedback, StatisticsCard,StatisticsValue,RezultContainer } from './Statistics.styled';

export const Statistics = ({ ValueGood, ValueNatuer, ValueBad }) => {
   
    let Total = ValueGood + ValueNatuer + ValueBad; 
    let persentGood = Math.round (ValueGood / Total * 100)

    return (
        <StatisticsCard>
            <StatisticsTitle>Statistics</StatisticsTitle>
            {ValueGood === 0 && ValueNatuer === 0 && ValueBad === 0
                ? <StatisticsFeedback> There is no feedback</StatisticsFeedback>
                : <>
                    <StatisticsFeedback>
                        <StatisticsValue>Good: {ValueGood}</StatisticsValue>
                        <StatisticsValue>Neutral: {ValueNatuer}</StatisticsValue>
                        <StatisticsValue>Bad: {ValueBad}</StatisticsValue>
                    </StatisticsFeedback>
                    <RezultContainer>
                        <p>Total: {Total}</p>
                        <p>Positive feedback: {persentGood }%</p>
                    </RezultContainer>
                    
                
                </>
                
                }  
        </StatisticsCard>
        
    )
}