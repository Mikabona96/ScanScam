// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';
import { SearchInput } from '@/view/elements';

// Types
type PropTypes = {
    /* type props here */
}

export const FirstBlock: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Block>
                <S.Title>
                    Secure Your Browsing:
                    Instant <S.TitleGradient>Scam Check</S.TitleGradient>
                </S.Title>
                <S.Subtitle>Enter the domain or URL below to ensure a scam-free experience</S.Subtitle>
                <SearchInput />
            </S.Block>
        </S.Container>
    );
};
