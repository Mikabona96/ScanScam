// Core
import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Bus
// import {} from '../../../bus/'
import { useWhoisquery } from '@/bus/whoisquery';

// Styles
import * as S from './styles';

// Icons
import { SearchIcon } from '@/assets/images/icons';

//
import { inithialState, ipv4Regex, schema, urlRegex } from './static';

// Types
type PropTypes = {
    /* type props here */
    placeholder?: string
}

export const HeaderSearchBar: FC<PropTypes> = ({ placeholder = 'Enter a domain or URL (e.g., www.example.com)' }) => {
    const theme = useTheme();
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
        <S.SearchBar
            $error = { !!errors.urlOrIp?.message }
            onSubmit = { (event) => {
                event.preventDefault();
                handleSubmit(onSubmit)();
            } }>
            <Controller
                control = { control }
                name = 'urlOrIp'
                render = { ({ field: { onChange, onBlur }}) => (
                    <S.Input
                        placeholder = { placeholder }
                        onBlur = { onBlur }
                        onChange = { (event) => {
                            event.target.value = event.target.value.trim();
                            onChange(event);
                        } }
                    />
                ) }
            />
            <button style = {{ width: '24px', height: '24px', outline: 0, border: 0, padding: 0, background: 'transparent' }}>
                <SearchIcon
                    color = { theme.palette.purple.main }
                    height = { 24 }
                    width = { 24 }
                />
            </button>
        </S.SearchBar>
    );
};
