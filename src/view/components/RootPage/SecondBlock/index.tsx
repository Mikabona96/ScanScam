// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const SecondBlock: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Wrapper>
                <S.TextWrapper>
                    <S.Title>Our Impact in Numbers</S.Title>
                    <S.Subtitle>See the results of our relentless efforts to protect users online</S.Subtitle>
                </S.TextWrapper>
                <S.MetricWrapper>
                    <S.MetricCard>
                        <S.MetricTitle>400+</S.MetricTitle>
                        <S.MetricLabel>Sites Blocked</S.MetricLabel>
                    </S.MetricCard>
                    <S.MetricCard>
                        <S.MetricTitle>500</S.MetricTitle>
                        <S.MetricLabel>Users Protected</S.MetricLabel>
                    </S.MetricCard>
                    <S.MetricCard>
                        <S.MetricTitle>230</S.MetricTitle>
                        <S.MetricLabel>Achievements Unlocked</S.MetricLabel>
                    </S.MetricCard>
                    <S.MetricCard>
                        <S.MetricTitle>87</S.MetricTitle>
                        <S.MetricLabel>Other relevant stats</S.MetricLabel>
                    </S.MetricCard>
                </S.MetricWrapper>
            </S.Wrapper>
        </S.Container>
    );
};