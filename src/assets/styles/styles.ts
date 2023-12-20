import styled from 'styled-components';
import { MyFonts } from '../fonts';

type PropTypes = {

}

export const ButtonStyles = styled.button<PropTypes>`
    max-width: 162px;
    width: 100%;
    max-height: 60px;
    height: 100%;
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 0px 2px 2px 0px;
    background: ${({ theme }) => theme.button.primary};
    border: 0;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);

    /* Button text */
    font-family: ${MyFonts.THICCCBOI.regular};
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    transition: all .3s ease;
    cursor: pointer;
    user-select: none;
`;
