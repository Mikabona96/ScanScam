import React, { useEffect, useState } from 'react';

// Elements
import { CustomLink, SectionSubtitle, SectionTitle } from '@/view/elements';

// Styles
import * as S from './styles';

// Data
import { mockedData } from './data';

export const Article = () => {
    const [ data, setData ] = useState<typeof mockedData[0] | null>(null);

    useEffect(() => {
        new Promise<typeof mockedData>((res) => {
            setTimeout(() => {
                res(mockedData);
            }, 1000);
        }).then((res) => setData(res[ 0 ]));
    }, []);

    return (
        data ? (
            <S.Container>
                <S.Navigation>
                    <S.NavigationItem>
                        <CustomLink
                            $styles = { S.NavigationLink }
                            to = '/'>
                            ScamScan
                        </CustomLink>
                    </S.NavigationItem>
                    <S.Circle />
                    <S.NavigationItem>
                        <CustomLink
                            $styles = { S.NavigationLink }
                            to = '/blog'>
                            Blog
                        </CustomLink>
                    </S.NavigationItem>
                    <S.Circle />
                    <S.NavigationItem>
                        {data.title}
                    </S.NavigationItem>
                </S.Navigation>
                <SectionTitle $styles = { S.Title }>{data.title}</SectionTitle>
                <S.Wrapper>
                    <S.LeftSide>

                        <S.ImageWrapper>
                            <img
                                alt = 'img_'
                                src = { data.img_url }
                            />
                        </S.ImageWrapper>
                        <SectionSubtitle $styles = { S.Subtitle } >{data.subtitle}</SectionSubtitle>
                        {
                            data.paragraph.map((paragraph) => {
                                return (
                                    <div
                                        id = { '#' + paragraph.title.toLowerCase().split(' ')
                                            .join('') }
                                        key = { paragraph.id }>
                                        <SectionTitle $styles = { S.Title }>
                                            {paragraph.title}
                                        </SectionTitle>
                                        <S.ParagraphList>
                                            {
                                                paragraph.text.map((text) => {
                                                    return (
                                                        <S.ParagraphListItem  key = { text.heading }>
                                                            <SectionSubtitle $styles = { S.Subtitle }>
                                                                <span style = {{ fontWeight: 'bold' }}>{text.heading}</span>{text.text}
                                                            </SectionSubtitle>
                                                        </S.ParagraphListItem>
                                                    );
                                                })
                                            }
                                        </S.ParagraphList>
                                    </div>
                                );
                            })
                        }
                        <SectionTitle $styles = { S.Title }>Conclusion</SectionTitle>
                        <SectionSubtitle $styles = { S.Subtitle }>{data.conclusion}</SectionSubtitle>
                    </S.LeftSide>
                    <S.RightSide>
                        <S.DateHashtagsWrapper>
                            <SectionSubtitle $styles = { S.Subtitle }>
                                {data.date}
                            </SectionSubtitle>
                            <S.HashtagsWrapper>
                                {
                                    data.hashtags.map((hashtag, idx) => {
                                        return (
                                            <SectionSubtitle
                                                $styles = { S.Subtitle }
                                                key = { idx }>
                                                {hashtag}
                                            </SectionSubtitle>
                                        );
                                    })
                                }
                            </S.HashtagsWrapper>
                        </S.DateHashtagsWrapper>
                        <S.TablesOfContent>Table of Contents</S.TablesOfContent>
                        <S.AnchorsWrapper>
                            {
                                data.anchors.map((a, i) => {
                                    return (
                                        <CustomLink
                                            $styles = { S.Ancor }
                                            key = { a + i }
                                            to = { `#${a.toLowerCase().split(' ')
                                                .join('')}` }>
                                            {a}
                                        </CustomLink>
                                    );
                                })
                            }
                        </S.AnchorsWrapper>
                    </S.RightSide>
                </S.Wrapper>
            </S.Container>
        ) : <div>loading data.....</div>

    );
};
