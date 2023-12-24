import React, { useEffect, useState } from 'react';

// Elements
import { SectionSubtitle, SectionTitle } from '@/view/elements';

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
                        ScamScan
                    </S.NavigationItem>
                    <S.Circle />
                    <S.NavigationItem>
                        Blog
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
                        <SectionSubtitle>{data.subtitle}</SectionSubtitle>
                        {
                            data.paragraph.map((paragraph) => {
                                return (
                                    <div key = { paragraph.id }>
                                        <SectionTitle $styles = { S.Title }>
                                            {paragraph.title}
                                        </SectionTitle>
                                        <S.ParagraphList>
                                            {
                                                paragraph.text.map((text) => {
                                                    return (
                                                        <S.ParagraphListItem  key = { text.heading }>
                                                            <SectionSubtitle>
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
                        <SectionSubtitle>{data.conclusion}</SectionSubtitle>
                    </S.LeftSide>
                    2222
                </S.Wrapper>
            </S.Container>
        ) : <div>loading data.....</div>

    );
};
