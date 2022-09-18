import React from "react";
import { FeedbackList } from "./FeedbackList";
import { Title, Section} from './Feedback.styled';
import { Statistics } from './Statistics';
// import { Container, ContainerListBtm,ContainerList } from './FeedbackList.styled';




export class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    incrementGoodFeed = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1
            }
        }) 
        console.log(this.state.good);
    }

    incrementNeutralFeed = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1
            }
        }) 
        console.log(this.state.neutral);
    }

    incrementBadFeed = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1            }
        })
        console.log(this.state.bad);
    }
    
    render() {
        return (
        <Section>
                <Title> Please leave feedback </Title>
                <FeedbackList
                    incrementGood={this.incrementGoodFeed}
                    incrementNeutral={this.incrementNeutralFeed}
                    incrementBad={this.incrementBadFeed}
                ></FeedbackList>
                <Statistics ValueGood={this.state.good}
                            ValueNatuer={this.state.neutral}
                            ValueBad={this.state.bad}
                ></Statistics>
        </Section>
    )}
}





// export const Feedback = () => {
//     return (
//         <Section>
//             <Title> Please leave feedback </Title>
//             <FeedbackList> </FeedbackList>
//             <Statistics></Statistics>
//         </Section>
//     )}