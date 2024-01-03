// Core
import React, { FC } from 'react';
// Bus
// import {} from '../../../bus/'

// Elements
import { SectionSubtitle } from '@/view/elements';

// Styles
import * as S from './styles';

// Schema
import { SearchBar } from '../../SearchBar';

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
                <SectionSubtitle>Enter the domain or URL below to ensure a scam-free experience</SectionSubtitle>
                <SearchBar />
            </S.Block>
        </S.Container>
    );
};
