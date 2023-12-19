/* eslint-disable @typescript-eslint/indent */
// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

import { Arrow, CircleRightIcon } from '@/assets/images/icons';

import CardImage from '@/assets/images/RootPage/Card.png';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const FifthBlock: FC<PropTypes> = () => {
    const cards = [
        {
            date:        '20 March 2023',
            title:       'Enhancing Security with FIDO Keys in 2FA Protocols',
            description: 'Understand the robust security benefits that FIDO keys bring to two-factor authentication (2FA) systems. Explore the technology behind...',
            link:        '#',
            image:       '#',
        },
        {
            date:        '20 March 2023',
            title:       'Emerging Trends in Phishing: A Snapshot of Current Cyber Threats',
            description: 'Stay informed about the latest developments in phishing attacks. This article provides an objective overview of new trends...',
            link:        '#',
            image:       '#',
        },
        {
            date:        '20 March 2023',
            title:       'Practical Measures: 5 Tips to Prevent Online Scams',
            description: 'Take proactive steps to safeguard yourself from online scams with these five practical tips. Backed by security principles, this article provides...',
            link:        '#',
            image:       '#',
        },
        {
            date:        '20 March 2023',
            title:       'Recovering from a Scam: Practical Steps to Take After Falling Victim',
            description: ' If you’ve been scammed, don’t panic— take control. This article guides you through the immediate actions to mitigate damage, report...',
            link:        '#',
            image:       '#',
        },
        {
            date:        '20 March 2023',
            title:       'Enhancing Security with FIDO Keys in 2FA Protocols',
            description: 'Understand the robust security benefits that FIDO keys bring to two-factor authentication (2FA) systems. Explore the technology behind...',
            link:        '#',
            image:       '#',
        },
        {
            date:        '20 March 2023',
            title:       'Practical Measures: 5 Tips to Prevent Online Scams',
            description: 'Take proactive steps to safeguard yourself from online scams with these five practical tips. Backed by security principles, this article provides...',
            link:        '#',
            image:       '#',
        },
    ];

    return (
        <S.Container>
            <S.Title>Insights and Updates</S.Title>
            <S.Subtitle>Stay informed with our latest articles and helpful tips</S.Subtitle>
            <S.Slider>
                <S.Track>
                    {
                        cards.map((card, idx) => {
                            return (
                                <S.Card
                                    key = { card.title +  idx }>
                                    <S.ImageContainer>
                                        <img
                                            alt = ''
                                            src = { CardImage }
                                            style = {{ transition: '.3s ease' }}
                                        />
                                    </S.ImageContainer>
                                    <S.CardDate>{card.date}</S.CardDate>
                                    <S.CardTitle>{card.title}</S.CardTitle>
                                    <S.CardDescription>
                                        {card.description}
                                    </S.CardDescription>
                                    <S.LinkWrapper>
                                        <CircleRightIcon />
                                        <span>Find Out More</span>
                                    </S.LinkWrapper>
                                </S.Card>
                            );
                        })
                    }
                </S.Track>
                <S.Navigation>
                    <Arrow style = {{ cursor: 'pointer' }} />
                    <S.ProgressButtonContainer>
                        {
                            cards.map((card, idx) => idx === 0
                                ? <S.ProgressButton
                                        $isActive
                                        key = { idx }
                                  /> : <S.ProgressButton
                                      $isActive = { false }
                                      key = { idx }
                                       />)
                        }
                    </S.ProgressButtonContainer>
                    <Arrow style = {{ transform: 'rotate(180deg)', cursor: 'pointer' }} />
                </S.Navigation>
            </S.Slider>
            <S.Button>Read More on Our Blog</S.Button>
        </S.Container>
    );
};
