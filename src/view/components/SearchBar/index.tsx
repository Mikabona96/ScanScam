// Core
import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/view/elements';
import { Controller, useForm } from 'react-hook-form';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';
import { inithialState, schema } from './static';

// Types
type PropTypes = {
    /* type props here */
}

export const SearchBar: FC<PropTypes> = () => {
    const {  control, handleSubmit, formState: { errors }} = useForm({ values: inithialState, resolver: yupResolver(schema), mode: 'onBlur' });
    const onSubmit = (data: any) => {
        console.log(data, 'data');
    };

    return (
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
                        placeholder = 'Enter a domain or URL (e.g., www.example.com)'
                        onBlur = { onBlur }
                        onChange = { onChange }
                    />
                ) }
            />
            <Button $styles = { S.ButtonStyles }>Check now</Button>
        </S.Form>
    );
};
