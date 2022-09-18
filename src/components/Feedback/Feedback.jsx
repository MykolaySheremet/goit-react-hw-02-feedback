import React from "react";
import { FeedbackList } from "./FeedbackList";
import { Title, Section} from './Feedback.styled';
import { Statistics } from './Statistics';
import PropTypes from 'prop-types';

export class Feedback extends React.Component{
    
    static propTypes = {
        initialValueGood: PropTypes.number.isRequired,
        initialValueNeutral: PropTypes.number.isRequired,
        initialValueBad: PropTypes.number.isRequired
    }



    state = {
        good: this.props.initialValueGood,
        neutral: this.props.initialValueNeutral,
        bad: this.props.initialValueBad
    }

    incrementGoodFeed = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1
            }
        }) 
     
    }

    incrementNeutralFeed = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1
            }
        }) 
    
    }

    incrementBadFeed = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1            }
        })
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

