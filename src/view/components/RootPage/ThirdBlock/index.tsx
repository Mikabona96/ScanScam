// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'


// Styles
import * as S from './styles';
import { DownloadIcon, IpIcon, LocationIcon, SearchIcon } from '@/assets/images/icons';

// Types
type PropTypes = {
    /* type props here */
}

export const ThirdBlock: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Wrapper>
                <S.Title>Empowering You with Tools</S.Title>
                <S.Subtitle>Explore our suite of tools for a comprehensive online experience</S.Subtitle>
                <S.CardsWrapper>
                    <S.Card>
                        <SearchIcon />
                        <S.CardTitle>Domain Whois</S.CardTitle>
                        <S.CardDescription>
                            Uncover ownership and registration details seamlessly,
                            making sure your online activities rely on trustworthy information
                        </S.CardDescription>
                    </S.Card>
                    <S.Card>
                        <IpIcon />
                        <S.CardTitle>IP Whois</S.CardTitle>
                        <S.CardDescription>
                            Discover ownership and location details for any IP address,
                            ensuring a safer online experience with valuable insights
                        </S.CardDescription>
                    </S.Card>
                    <S.Card>
                        <DownloadIcon />
                        <S.CardTitle>Domain zone downloads</S.CardTitle>
                        <S.CardDescription>
                            Access and download essential domain zone data,
                            strengthening your online presence with valuable information
                        </S.CardDescription>
                    </S.Card>
                    <S.Card>
                        <LocationIcon />
                        <S.CardTitle>Geolocation</S.CardTitle>
                        <S.CardDescription>
                            Explore precise location data, enriching your online encounters
                            with insights that enhance awareness and contribute to a safer digital environment
                        </S.CardDescription>
                    </S.Card>
                </S.CardsWrapper>
            </S.Wrapper>
        </S.Container>
    );
};