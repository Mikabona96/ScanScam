// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { FirstBlock, SecondBlock } from '@/view/components/BlogPage';
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Blog: FC<PropTypes> = () => {
    return (
        <S.Container>
            <FirstBlock />
            <SecondBlock />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Blog />
    </ErrorBoundary>
);
