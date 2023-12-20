/* eslint-disable @typescript-eslint/indent */
// Core
import React, { FC, useState } from 'react';

// Bus
// import {} from '../../../bus/'

import { Arrow, CircleRightIcon } from '@/assets/images/icons';

import CardImage from '@/assets/images/RootPage/Card.png';

// Styles
import * as S from './styles';
import { CustomLink } from '@/view/elements';
import { useComponentWidth } from '@/tools/hooks';

// Types
type PropTypes = {
    /* type props here */
}

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

export const FifthBlock: FC<PropTypes> = () => {
    const { ref, width } = useComponentWidth();
    const [ currentSlide, setCurrentSlide ] = useState(0);

    const arrowNavigationHandler = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            if (currentSlide === 0) {
                setCurrentSlide(cards.length);
            }
            setCurrentSlide((prev) => prev - 1);
        }

        if (direction === 'next') {
            if (cards.length - 1 <= currentSlide) {
                setCurrentSlide(-1);
            }
            setCurrentSlide((prev) => prev + 1);
        }
    };

    return (
        <S.Container>
            <S.Title>Insights and Updates</S.Title>
            <S.Subtitle>Stay informed with our latest articles and helpful tips</S.Subtitle>
            <S.Slider>
                <div
                    style = {{ display: 'flex', transform: `translateX(-${currentSlide * width}px)`, transition: '.3s ease' }}>
                    {
                        cards.map((card, idx) => {
                            return (
                                <S.Card
                                    key = { card.title +  idx }
                                    ref = { ref }>
                                    <S.ImageContainer>
                                        <img
                                            alt = ''
                                            draggable = { false }
                                            src = { CardImage }
                                            style = {{ transition: '.3s ease' }}
                                        />
                                    </S.ImageContainer>
                                    <S.CardDate>{card.date}</S.CardDate>
                                    <S.CardTitle>{card.title}</S.CardTitle>
                                    <S.CardDescription>
                                        {card.description}
                                    </S.CardDescription>
                                    <CustomLink
                                        $styles = { S.LinkStyles }
                                        to = { card.link }>
                                        <S.LinkWrapper>
                                            <CircleRightIcon />
                                            <span style = {{ marginLeft: '4px' }}>Find Out More</span>
                                        </S.LinkWrapper>
                                    </CustomLink>
                                </S.Card>
                            );
                        })
                    }
                </div>
                <S.Navigation>
                    <Arrow
                        style = {{ cursor: 'pointer' }}
                        onClick = { () => {
                        arrowNavigationHandler('prev');
                    } }
                    />
                    <S.ProgressButtonContainer>
                        {
                            cards.map((card, idx) => idx === 0
                                ? <S.ProgressButton
                                        $isActive = { currentSlide === idx }
                                        key = { idx }
                                        onClick = { () => setCurrentSlide(idx) }
                                  /> : <S.ProgressButton
                                      $isActive = { currentSlide === idx }
                                      key = { idx }
                                      onClick = { () => setCurrentSlide(idx) }
                                       />)
                        }
                    </S.ProgressButtonContainer>
                    <Arrow
                        style = {{ transform: 'rotate(180deg)', cursor: 'pointer' }}
                        onClick = { () => {
                            arrowNavigationHandler('next');
                        } }
                    />
                </S.Navigation>
            </S.Slider>
            <S.Button>Read More on Our Blog</S.Button>
        </S.Container>
    );
};
