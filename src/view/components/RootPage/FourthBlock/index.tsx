// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';
import { CardImage } from '@/assets/images/icons';

// Types
type PropTypes = {
    /* type props here */
}

export const FourthBlock: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Wrapper>
                <S.CardWrapper>
                    <CardImage />
                    <CardImage />
                    <CardImage />
                    <CardImage />
                    <CardImage />
                    <CardImage />
                </S.CardWrapper>
                <S.TextWrapper>
                    <S.Title>Proudly Trusted by Leading Partners</S.Title>
                    <S.Subtitle>
                        Explore our rich tapestry of partnerships with industry leaders,
                        each logo representing a chapter of collaboration,
                        trust, and shared success.
                        Together, we build a legacy of excellence and innovation
                    </S.Subtitle>
                </S.TextWrapper>
            </S.Wrapper>
        </S.Container>
    );
};
