import React from "react";
import { FeedbackList } from "../FeedbackList/FeedbackList";
import { Title, Section} from './Feedback.styled';
import { Statistics } from '../Statictics/Statistics';
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

    handleIncrement = (e) => {

        let curentfeedback = e.currentTarget.name;
        
        this.setState((prevState) => ({ [curentfeedback]: prevState[curentfeedback] + 1 }))
    }

    countTotalFeedback=() => {
        let countTotal = this.state.good + this.state.neutral + this.state.bad;
        return countTotal;
    
    }

    countPositiveFeedbackPercentage = () =>{
        let percentageGood = Math.round(this.state.good / this.countTotalFeedback() * 100);
        
        return percentageGood;
    }


    
    
    render() {
        return (
        <Section>
                <Title> Please leave feedback </Title>
                <FeedbackList options={
                    [
                    'good', 'neutral', 'bad']
                    }
                    addFeedback ={this.handleIncrement}
                ></FeedbackList>
                <Statistics
                    ValueGood={this.state.good}
                    ValueNatuer={this.state.neutral}
                    ValueBad={this.state.bad}
                    totalFeedback={this.countTotalFeedback()}
                    percentage = {this.countPositiveFeedbackPercentage()}
                ></Statistics>
        </Section>
    )}
}

