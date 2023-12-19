// Core
import React, { FC } from 'react';
import styled from 'styled-components';
import { MyFonts } from '@/assets/fonts';

// Styles
import { ButtonStyles } from '@/assets/styles/styles';


type PropTypes = {
    /* type props here */
}

const Container = styled.div<PropTypes>`
    /* styles here */
    display: flex;
    max-width: 740px;
    width: 100%;
    height: 60px;
    background-color: aliceblue;
`;

const Input = styled.input`
    max-width: 610px;
    width: 100%;
    padding: 12px;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.palette.gray.lightGrey};
    outline: 0;
    &::placeholder {
        font-family: ${MyFonts.THICCCBOI.regular};
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        color: ${({ theme }) => theme.text.gray.secondary};
    }
    &:focus {
        border: 1px solid ${({ theme }) => theme.palette.purple.main};
        box-shadow: 0px 0px 0px 2px rgba(96, 35, 250, 0.20);
    }
`;

const Button = styled(ButtonStyles)`
    max-width: 130px;
    &:hover {
        max-width: 135px;
        background: ${({ theme }) => theme.button.dark};
    }
`;

export const SearchInput: FC<PropTypes> = () => {
    return (
        <Container>
            <Input placeholder = 'Enter a domain or URL (e.g., www.example.com)' />
            <Button>Check now</Button>
        </Container>
    );
};

