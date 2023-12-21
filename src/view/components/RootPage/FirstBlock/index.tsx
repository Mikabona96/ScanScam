// Core
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';
import { inithialState, schema } from './static';

// Types
type PropTypes = {
    /* type props here */
}

export const FirstBlock: FC<PropTypes> = () => {
    const {  control, handleSubmit, formState: { errors }} = useForm({ values: inithialState, resolver: yupResolver(schema), mode: 'onBlur' });
    const onSubmit = (data: any) => {
        console.log(data, 'data');
    };

    return (
        <S.Container>
            <S.Block>
                <S.Title>
                    Secure Your Browsing:
                    Instant <S.TitleGradient>Scam Check</S.TitleGradient>
                </S.Title>
                <S.Subtitle>Enter the domain or URL below to ensure a scam-free experience</S.Subtitle>
                <S.Form onSubmit = { (event) => {
                    event.preventDefault();
                    handleSubmit(onSubmit)();
                } }>
                    <Controller
                        control = { control }
                        name = 'url'
                        render = { ({ field: { onChange, onBlur }}) => (
                            <S.Input
                                $error = { !!errors.url?.message }
                                placeholder = 'www.example-scam.com'
                                onBlur = { onBlur }
                                onChange = { onChange }
                            />
                        ) }
                    />
                    {/* <S.Input placeholder = 'Enter a domain or URL (e.g., www.example.com)' /> */}
                    <S.Button>Check now
                    </S.Button>
                </S.Form>
            </S.Block>
        </S.Container>
    );
};
