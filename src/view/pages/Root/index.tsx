// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '@/view/components';

// Elements
import { HelloBurst } from '@/view/elements';

// Styles
import { Container } from './styles';

const Root: FC = () => {
    return (
        <Container>
            <HelloBurst />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
