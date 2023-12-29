import { useOverflowHidden } from '@/tools/hooks';
import { Footer, Header, Modal } from '@/view/components';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

export const LandingPageLayout = () => {
    const [ isModalActive, setModalActive ] = useState(false);
    const overflowHandler = useOverflowHidden();

    return (
        <div style = {{ position: 'relative' }}>
            <Header
                isModalActive = { isModalActive }
                setModalActive = { setModalActive }
            />
            <Outlet />
            <Footer />
            {isModalActive && (
                <Modal
                    onClose = { () => {
                        overflowHandler(isModalActive);
                        setModalActive(false);
                    } }>
                </Modal>
            )}
        </div>
    );
};
