// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';
import { CustomSelect, SectionSubtitle, SectionTitle } from '@/view/elements';
import { ChevronIcon, DownloadIcon, SearchIcon } from '@/assets/images/icons';
import { useTheme } from 'styled-components';
import Data from './data.json';

// Types
type PropTypes = {
    /* type props here */
}

type DataType = {
    'id': number,
    'Domain zone name': string
    'Number of domains': string
    'Registrar': string
    'Last update': string
}[]

const recievedData = JSON.parse(JSON.stringify(Data));

const DomainZone: FC<PropTypes> = () => {
    const theme = useTheme();
    const [ isActive, setIsActive ] = useState(false);
    const [ rowsPerPage, setRowsPerPage ] = useState(6);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ data, setData ] = useState<DataType>(recievedData.data);

    useEffect(() => {
        setData(recievedData.data.slice(0, rowsPerPage));
    }, [ rowsPerPage ]);

    const createCsvContent = () => {
        // Example CSV data
        const csvData = 'Name,Age,Location\nJohn,25,New York\nJane,30,San Francisco\n';

        // Create a Blob containing the CSV data
        const blob = new Blob([ csvData ], { type: 'text/csv' });

        // Create a data URL for the Blob
        const url = URL.createObjectURL(blob);

        return url;
    };

    const csvUrl = createCsvContent();

    const setCurrentPageHandler = (direction: 'forward' | 'backward') => {
        if (direction === 'forward' && currentPage < 3) {
            setCurrentPage((prevState) => prevState + 1);
        }
        if (direction === 'backward' && currentPage > 1) {
            setCurrentPage((prevState) => prevState - 1);
        }
    };

    return (
        <S.Container>
            <S.TextWrapper>
                <SectionTitle $styles = { S.TitleStyles }>
                    Domain Zone
                </SectionTitle>
                <SectionSubtitle $styles = { S.SubtitleStyles }>
                    Explore all available domain zones in a searchable list.
                    Request a CSV download for each zone with comprehensive information.
                </SectionSubtitle>
            </S.TextWrapper>
            <S.SearchBar $active = { isActive }>
                <S.SvgWrapper>
                    <SearchIcon color = { isActive ? theme.palette.purple.main : theme.palette.gray.lightGrey } />
                </S.SvgWrapper>
                <S.Input
                    placeholder = 'Search for domain zone...'
                    onBlur = { () => setIsActive(false) }
                    onFocus = { () => setIsActive(true) }
                />
            </S.SearchBar>
            <S.TableContainer>
                <S.TableWrapper>
                    <S.Table>
                        <S.Thead>
                            <S.Tr>
                                <S.Td>Domain zone name</S.Td>
                                <S.Td>Number of domains</S.Td>
                                <S.Td>Registrar</S.Td>
                                <S.Td>Last update</S.Td>
                                <S.Td></S.Td>
                            </S.Tr>
                        </S.Thead>
                        <S.Tbody>
                            {
                                data.map((item) => {
                                    return (
                                        <S.Tr key = { item.id }>
                                            <S.Td>{item[ 'Domain zone name' ]}</S.Td>
                                            <S.Td>{item[ 'Number of domains' ]}</S.Td>
                                            <S.Td>{item.Registrar}</S.Td>
                                            <S.Td>{item[ 'Last update' ]}</S.Td>
                                            <S.Td>
                                                <S.Link
                                                    download = 'example.csv'
                                                    href = { csvUrl }>
                                                    <S.SvgWrapper>
                                                        <DownloadIcon color = { theme.palette.purple.main } />
                                                    </S.SvgWrapper>
                                                    Download
                                                </S.Link>
                                            </S.Td>
                                        </S.Tr>
                                    );
                                })
                            }
                        </S.Tbody>
                    </S.Table>
                </S.TableWrapper>
            </S.TableContainer>
            <S.Pagination>
                <S.RowsPerPageWrapper>
                    Rows per page:
                    <CustomSelect
                        rowsPerPage = { rowsPerPage }
                        setRowsPerPage = { setRowsPerPage }
                    />
                </S.RowsPerPageWrapper>
                <S.PageCountWrapper>{currentPage} of 3</S.PageCountWrapper>
                <S.ChevronWrappers>
                    <S.SvgWrapper
                        $rotate = '-90'
                        onClick = { () => setCurrentPageHandler('backward') }>
                        <ChevronIcon />
                    </S.SvgWrapper>
                    <S.SvgWrapper
                        $rotate = '90'
                        onClick = { () => setCurrentPageHandler('forward') }>
                        <ChevronIcon />
                    </S.SvgWrapper>
                </S.ChevronWrappers>
            </S.Pagination>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <DomainZone />
    </ErrorBoundary>
);
