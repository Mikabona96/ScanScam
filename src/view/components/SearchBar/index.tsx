/* eslint-disable max-statements-per-line */
// Core
import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/view/elements';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';

// Bus
// import {} from '../../../bus/'
import { useWhoisquery } from '@/bus/whoisquery';

// Styles
import * as S from './styles';

//
import { inithialState, schema, urlRegex, ipv4Regex } from './static';

// Types
type PropTypes = {
    /* type props here */
    placeholder?: string
}

export const SearchBar: FC<PropTypes> = ({ placeholder = 'Enter a domain or URL (e.g., www.example.com)' }) => {
    const { fetchWhoisqueryIp, fetchWhoisqueryDomain } = useWhoisquery();
    const {  control, handleSubmit, formState: { errors }} = useForm({ values: inithialState, resolver: yupResolver(schema), mode: 'onBlur' });
    const onSubmit: SubmitHandler<{urlOrIp?: string | undefined}> = ({ urlOrIp }) => {
        const ipOrUrl = urlOrIp?.trim();
        if (ipOrUrl) {
            if (ipOrUrl.match(urlRegex)) {
                fetchWhoisqueryDomain(ipOrUrl);
            }
            if (ipOrUrl.match(ipv4Regex)) {
                fetchWhoisqueryIp(ipOrUrl);
            }
        }
    };

    return (
        <S.Form onSubmit = { (event) => {
            event.preventDefault();
            handleSubmit(onSubmit)();
        } }>
            <Controller
                control = { control }
                name = 'urlOrIp'
                render = { ({ field: { onChange, onBlur }}) => (
                    <S.Input
                        $error = { !!errors.urlOrIp?.message }
                        placeholder = { placeholder }
                        onBlur = { onBlur }
                        onChange = { (event) => {
                            event.target.value = event.target.value.trim();
                            onChange(event);
                        } }
                    />
                ) }
            />
            <Button
                $styles = { S.ButtonStyles }>Check now
            </Button>
        </S.Form>
    );
};