// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, FifthBlock, FirstBlock, FourthBlock, SecondBlock, ThirdBlock } from '@/view/components';

// Styles
import { Container, Bottom, BottomTextWrapper, Text, Button } from './styles';

const Root: FC = () => {
    return (
        <Container>
            {/* <FirstBlock />
            <Bottom>
                <BottomTextWrapper>
                    <Text>Keep the web safe – report suspicious activity</Text>
                    <Button>Report a Scam</Button>
                </BottomTextWrapper>
            </Bottom>
            <SecondBlock />
            <ThirdBlock />
            <FourthBlock /> */}
            <FifthBlock />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
