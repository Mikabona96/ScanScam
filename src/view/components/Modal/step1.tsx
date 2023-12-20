import React, { FC } from 'react';

import * as S from './styles';

type PropTypes = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export const Step1: FC<PropTypes> = ({ setStep }) => {
    return (
        <>
            <S.IputsContainer>
                <S.InputWrapper>
                    <S.TextLabel>Scam URL or domain</S.TextLabel>
                    <S.Input placeholder = 'www.example-scam.com' />
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.TextLabel>Scam description</S.TextLabel>
                    <S.TextArea placeholder = 'Provide details such as the nature of the scam, suspicious activities, or any relevant information that can help us understand and address the issue' />
                </S.InputWrapper>
            </S.IputsContainer>
            <S.Button onClick = { () => setStep(1) }>Continue</S.Button>
        </>
    );
};
