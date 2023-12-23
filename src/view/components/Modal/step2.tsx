import React, { FC, useEffect, useState } from 'react';

import * as S from './styles';
import { Control, Controller, FieldErrors, UseFormSetValue, UseFormTrigger } from 'react-hook-form';
import { IFormState } from './static';
import { Button } from '@/view/elements';

type PropTypes = {
    setStep: React.Dispatch<React.SetStateAction<number>>
    control: Control<IFormState, any>
    errors: FieldErrors<IFormState>
    trigger: UseFormTrigger<IFormState>
    setValue: UseFormSetValue<IFormState>
}

export const Step2: FC<PropTypes> = ({ setStep, control, errors, trigger, setValue }) => {
    const [ recieveUpds, setRecieveUpds ] = useState(true);

    const radioButtonHandler = (mode: 'active' | 'disabled') => {
        if (mode === 'active') {
            setRecieveUpds(true);
        }
        if (mode === 'disabled') {
            setRecieveUpds(false);
        }
    };

    useEffect(() => {
        setValue('checkbox', false);
        setValue('recieveUpdates', false);
    }, [ recieveUpds ]);

    return (
        <>
            <S.RadioButtonsContainer>
                <Controller
                    control = { control }
                    name = 'recieveUpdates'
                    render = { ({ field: { onChange, onBlur }}) => (
                        <S.RadioButtonWrapper>
                            <S.RadioButton
                                defaultChecked = { recieveUpds }
                                name = 'radio'
                                type = 'radio'
                                onChange = { () => {
                                    radioButtonHandler('active');
                                    onChange();
                                    onBlur();
                                } }
                            />
                            <S.RadioButtonText>Yes, I'd like to receive updates</S.RadioButtonText>
                        </S.RadioButtonWrapper>
                    ) }
                />
                <Controller
                    control = { control }
                    name = 'recieveUpdates'
                    render = { ({ field: { onChange, onBlur }}) => (
                        <S.RadioButtonWrapper>
                            <S.RadioButton
                                defaultChecked = { !recieveUpds }
                                name = 'radio'
                                type = 'radio'
                                onChange = { () => {
                                    radioButtonHandler('disabled');
                                    onChange();
                                    onBlur();
                                } }
                            />
                            <S.RadioButtonText>Stay anonymous</S.RadioButtonText>
                        </S.RadioButtonWrapper>
                    ) }
                />

                {recieveUpds && <S.Divider/>}
                <S.InputWrapper style = {{ display: recieveUpds ? 'block' : 'none' }}>
                    <S.TextLabel>Share your email for updates</S.TextLabel>
                    <Controller
                        control = { control }
                        name = 'email'
                        render = { ({ field: { onChange, onBlur, ref }}) => (
                            <S.Input
                                $error = { !!errors.email?.message }
                                placeholder = 'your.email@example.com'
                                ref = { ref }
                                onBlur = { onBlur }
                                onChange = { onChange }
                            />
                        ) }
                    />
                </S.InputWrapper>
            </S.RadioButtonsContainer>
            {recieveUpds && (
                <S.CheckboxWrapper>
                    <Controller
                        control = { control }
                        name = 'checkbox'
                        render = { ({ field: { onChange, onBlur }}) => (
                            <S.CheckBox
                                checked = { recieveUpds }
                                type = 'checkbox'
                                onBlur = { onBlur }
                                onChange = { onChange }
                            />
                        ) }
                    />
                    <S.CheckBoxText>
                        I agree to be contacted if there are questions
                        or additional information is needed regarding my report.
                    </S.CheckBoxText>
                </S.CheckboxWrapper>
            )}
            <Button
                $styles = { S.Button }
                type = 'submit'
                onClick = { async () => {
                    const areFieldsValid = await trigger([ 'email' ]);
                    const areFieldsValid2 = await trigger([ 'checkbox' ]);
                    const areFieldsValid3 = await trigger([ 'recieveUpdates' ]);

                    console.log(areFieldsValid, 'email');
                    console.log(areFieldsValid2, 'checkbox');
                    console.log(areFieldsValid3, 'recieveUpdates');
                    if (!areFieldsValid) {
                        return;
                    }
                    setStep(2);
                    if (!recieveUpds) {
                        setValue('email', null);
                    }
                } }>Submit a Report
            </Button>
        </>
    );
};
