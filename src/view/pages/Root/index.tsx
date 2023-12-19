// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, FirstBlock } from '@/view/components';

// Styles
import { Container, Bottom, BottomTextWrapper, Text, Button } from './styles';

const Root: FC = () => {
    return (
        <Container>
            <FirstBlock />
            <Bottom>
                <BottomTextWrapper>
                    <Text>Keep the web safe – report suspicious activity</Text>
                    <Button>Report a Scam</Button>
                </BottomTextWrapper>
            </Bottom>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
