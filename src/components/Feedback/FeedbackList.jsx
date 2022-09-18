import React from "react";
import PropTypes from 'prop-types';
import { Container, ContainerListBtm, ContainerList } from './FeedbackList.styled';

export const FeedbackList = ({ incrementGood, incrementNeutral, incrementBad }) => {
    return (
        <Container>
                    <ContainerList >
                        <ContainerListBtm type="button" onClick={incrementGood}>Good
                        </ContainerListBtm>
                    </ContainerList>
                    <ContainerList>
                        <ContainerListBtm type="button" onClick={incrementNeutral}
                    >Neutral
                    </ContainerListBtm>
                </ContainerList>
                <ContainerList>
                    <ContainerListBtm type="button" onClick={incrementBad}>Bad
                    </ContainerListBtm>
                </ContainerList>
                </Container>
    )
}

FeedbackList.propTypes = {
    incrementGood: PropTypes.func.isRequired,
    incrementNeutral: PropTypes.func.isRequired,
    incrementBad: PropTypes.func.isRequired
}