// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';
import { TopRow } from '../TopRow';
import { Table } from '../../Table';

// Types
type PropTypes = {
    /* type props here */
    isRaw: boolean
    setIsRaw: React.Dispatch<React.SetStateAction<boolean>>
}

export const ResultIP: FC<PropTypes> = ({ isRaw, setIsRaw }) => {
    const geoData = [
        {
            Country:   'AUT',
            Address:   'Feldkirchner Str. 140, 9020 Klagenfurt Austria',
            Longitude: '14.28907',
            Latitude:  '46.64121',
        },
    ];

    return (
        <S.Container>
            <TopRow
                isRaw = { isRaw }
                location = 'Vienna, Austria'
                setIsRaw = { setIsRaw }
                title = '213.227.164.85'
            />
            <Table
                withMap
                data = { geoData }
                location = { [ Number(geoData[ 0 ].Latitude), Number(geoData[ 0 ].Longitude) ] }
                title = 'Geolocation'
                variant = '2'
            />
        </S.Container>
    );
};
