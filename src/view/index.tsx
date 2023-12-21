// Core
import React, { FC, useEffect, useCallback, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Routes
import { Routes } from './routes';

// Hooks
import { useTogglesRedux } from '../bus/client/toggles';

// Assets
import { GlobalStyles, defaultTheme, FontStyles } from '../assets';
import { Footer, Header, Modal } from './components';
import { useOverflowHidden } from '@/tools/hooks';

// Styles
export const AppContainer = styled.div`
    margin: 0 auto;
    height: 100%;
    max-width: 1440px;
    width: 100%;
`;

export const App: FC = () => {
    const { setToggleAction: setTogglerAction } = useTogglesRedux();

    const [ isModalActive, setModalActive ] = useState(false);
    const overflowHandler = useOverflowHidden(isModalActive);


    const setOnlineStatusHandler = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        setOnlineStatusHandler();
        window.addEventListener('online', setOnlineStatusHandler);
        window.addEventListener('offline', setOnlineStatusHandler);
    }, []);

    return (
        <ThemeProvider theme = { defaultTheme }>
            <GlobalStyles />
            <FontStyles />
            <AppContainer>
                {/* <Header
                    isModalActive = { isModalActive }
                    setModalActive = { setModalActive }
                /> */}
                <Routes />
                {/* <Footer /> */}
            </AppContainer>
            {isModalActive && (
                <Modal
                    onClose = { () => {
                        overflowHandler();
                        setModalActive(false);
                    } }>
                </Modal>
            )}
        </ThemeProvider>
    );
};
