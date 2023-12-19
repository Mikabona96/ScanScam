// Core
import { MyFonts } from '@/assets/fonts';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { RuleSet } from 'styled-components';

// Types
type PropTypes = {
    /* type props here */
    to: string
    label?: string
    children?: React.ReactNode
    $styles?: RuleSet<object>
}

// Styles
const Container = styled(Link)<PropTypes>`
    /* styles here */
    font-family: ${MyFonts.THICCCBOI.regular};
    color: #fff;
    padding: 8px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    cursor: pointer;
    text-decoration: none;
    ${({ $styles }) => $styles}
`;

export const CustomLink: FC<PropTypes> = ({ to, label, children, $styles }) => {
    return (
        <Container
            $styles = { $styles }
            to = '#'
            onClick = { (event) => {
                window.location.href = to;
                event.preventDefault();
            } }>
            {children ? children : label}
        </Container>
    );
};
