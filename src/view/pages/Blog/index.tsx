// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { FirstBlock, SecondBlock } from '@/view/components/BlogPage';
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';
import { Article } from '@/view/components/BlogPage/Article';

// Types
type PropTypes = {
    /* type props here */
}

const Blog: FC<PropTypes> = () => {
    return (
        <S.Container>
            {/* <FirstBlock /> */}
            <Article />
            <SecondBlock />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Blog />
    </ErrorBoundary>
);
