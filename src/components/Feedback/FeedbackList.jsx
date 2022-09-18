import { Container, ContainerListBtm,ContainerList } from './FeedbackList.styled';

export const FeedbackList = () => {
    return (
        <Container>
                <ContainerList>
                    <ContainerListBtm>Good
                    </ContainerListBtm>
                </ContainerList>
                <ContainerList>
                    <ContainerListBtm>Neutral
                    </ContainerListBtm>
                </ContainerList>
                <ContainerList>
                    <ContainerListBtm>Bad
                    </ContainerListBtm>
                </ContainerList>
        </Container>
    )
}