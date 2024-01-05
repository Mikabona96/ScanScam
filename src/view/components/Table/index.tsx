// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';
import { LinkIcon } from '@/assets/images/icons';

// Types
type PropTypes = {
    /* type props here */
    title: string
    data: object[]
}

export const Table: FC<PropTypes> = ({ title, data }) => {
    return (
        <S.Table>
            <S.Thead><tr><th>{title}</th></tr></S.Thead>
            <S.Tbody>
                {
                    data.map((item: any, idx: number) => {
                        const entries = Object.entries(item);
                        const key = entries[ 0 ][ 0 ];
                        const value = entries[ 0 ][ 1 ] as string;

                        return (
                            <S.Tr key = { idx }>
                                <S.Td>{key}</S.Td>
                                <S.Td>{value}</S.Td>
                            </S.Tr>
                        );
                    })
                }
            </S.Tbody>
            <S.Tfoot>
                <tr><th><S.Link><LinkIcon /> {title} details</S.Link></th></tr>
            </S.Tfoot>
        </S.Table>
    );
};
