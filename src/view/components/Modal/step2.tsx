import React, { FC, useState } from 'react';

import * as S from './styles';

type PropTypes = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export const Step2: FC<PropTypes> = ({ setStep }) => {
    const [ data, setData ] = useState({
        recieveUpdates: true,
        checkbox:       true,
    });

    const radioButtonHandler = (mode: 'active' | 'disabled') => {
        if (mode === 'active') {
            setData((prev) => ({ ...prev, recieveUpdates: true }));
        }
        if (mode === 'disabled') {
            setData((prev) => ({ ...prev, recieveUpdates: false }));
        }
    };

    return (
        <>
            <S.RadioButtonsContainer>
                <S.RadioButtonWrapper>
                    <S.RadioButton
                        checked = { data.recieveUpdates }
                        type = 'radio'
                        onChange = { () => radioButtonHandler('active') }
                    />
                    <S.RadioButtonText>Yes, I'd like to receive updates</S.RadioButtonText>
                </S.RadioButtonWrapper>
                <S.RadioButtonWrapper>
                    <S.RadioButton
                        checked = { !data.recieveUpdates }
                        type = 'radio'
                        onChange = { () => radioButtonHandler('disabled') }
                    />
                    <S.RadioButtonText>Stay anonymous</S.RadioButtonText>
                </S.RadioButtonWrapper>
                {data.recieveUpdates
                    && (
                        <>
                            <S.Divider/>
                            <S.InputWrapper>
                                <S.TextLabel>Share your email for updates</S.TextLabel>
                                <S.Input placeholder = 'your.email@example.com' />
                            </S.InputWrapper>
                        </>)
                }
            </S.RadioButtonsContainer>
            {data.recieveUpdates && (
                <S.CheckboxWrapper>
                    <S.CheckBox
                        checked = { data.checkbox }
                        type = 'checkbox'
                        onChange = { () => setData((prev) => ({ ...prev, checkbox: !data.checkbox })) }
                    />
                    <S.CheckBoxText>
                        I agree to be contacted if there are questions
                        or additional information is needed regarding my report.
                    </S.CheckBoxText>
                </S.CheckboxWrapper>
            )}
            <S.Button onClick = { () => setStep(2) }>Submit a Report</S.Button>
        </>
    );
};
