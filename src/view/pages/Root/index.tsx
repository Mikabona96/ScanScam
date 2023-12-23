// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, FifthBlock, FirstBlock, FourthBlock, SecondBlock, ThirdBlock } from '@/view/components';

// Styles
import * as S from './styles';
import { Button } from '@/view/elements';

const Root: FC = () => {
    return (
        <S.Container>
            <FirstBlock />
            <S.Bottom>
                <S.BottomTextWrapper>
                    <S.Text>Keep the web safe – report suspicious activity</S.Text>
                    <Button
                        $styles = { S.Button }
                        $variant = 'white_outlined'>Report a Scam
                    </Button>
                </S.BottomTextWrapper>
            </S.Bottom>
            <SecondBlock />
            <ThirdBlock />
            <FourthBlock />
            <FifthBlock />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
