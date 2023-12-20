import React, { FC } from 'react';

import * as S from './styles';

type PropTypes = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export const Step2: FC<PropTypes> = ({ setStep }) => {
    return (
        <S.StepWrapper>
            <S.RadioButtonsContainer>
                <S.RadioButtonWrapper>
                    <S.RadioButton
                        checked
                        type = 'radio'
                    />
                    <S.RadioButtonText>Yes, I'd like to receive updates</S.RadioButtonText>
                </S.RadioButtonWrapper>
                <S.RadioButtonWrapper>
                    <S.RadioButton type = 'radio' />
                    <S.RadioButtonText>Stay anonymous</S.RadioButtonText>
                </S.RadioButtonWrapper>
                <S.Divider/>
                <S.InputWrapper>
                    <S.TextLabel>Share your email for updates</S.TextLabel>
                    <S.Input placeholder = 'your.email@example.com' />
                </S.InputWrapper>
            </S.RadioButtonsContainer>
            <S.CheckboxWrapper>
                <S.CheckBox type = 'checkbox' />
                <S.CheckBoxText>
                    I agree to be contacted if there are questions
                    or additional information is needed regarding my report.
                </S.CheckBoxText>
            </S.CheckboxWrapper>
            <S.Button onClick = { () => setStep(0) }>Submit a Report</S.Button>
        </S.StepWrapper>
    );
};
