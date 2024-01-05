// Core
import { MyFonts } from '@/assets/fonts';
import styled from 'styled-components';

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #F5F5F5;
    box-shadow: 0px 2px 12px 0px rgba(101, 101, 101, 0.03);
    width: 100%;
`;

export const Thead = styled.thead`
    padding: 12px 24px;
    font-family: ${MyFonts.THICCCBOI.semiBold};
    color: ${({ theme }) => theme.text.gray.main};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 17px;
    background: #F9FAFB;
    border-bottom: 1px solid #F5F5F5;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
    display: flex;
`;

export const Td = styled.td`
    width: 50%;
    padding: 12px 24px;
    font-family: ${MyFonts.THICCCBOI.regular};
    color: ${({ theme }) => theme.text.gray.main};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    border-bottom: 1px solid #F5F5F5;
`;

export const Tfoot = styled.tfoot`
    padding: 12px 24px;
    cursor: pointer;
`;

export const Link = styled.div`
    display: flex;
    gap: 4px;
    font-family: ${MyFonts.THICCCBOI.regular};
    color: ${({ theme }) => theme.palette.purple.main};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
`;
