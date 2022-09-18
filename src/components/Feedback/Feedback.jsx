import { FeedbackList } from "./FeedbackList";
import { Title, Section} from './Feedback.styled';
import { Statistics } from './Statistics';



export const Feedback = () => {
    return (
        <Section>
            <Title> Please leave feedback </Title>
            <FeedbackList> </FeedbackList>
            <Statistics></Statistics>
            
        </Section>
       
        

    )}