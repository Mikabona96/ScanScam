// Core
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import type { MouseEventHandler } from 'react';
// Bus
// import {} from '../../../bus/'

// Components
import Portal, { createContainer } from '../Portal';

// Styles
import * as S from './styles';
import { CloseIcon, SuccessIcon, WarningIcon } from '@/assets/images/icons';
import { Step1 } from './step1';
import { Step2 } from './step2';

// Types
type PropTypes = {
    /* type props here */
    onClose?: () => void;
    title: string;
    children: React.ReactNode;
}

const MODAL_CONTAINER_ID = 'modal-container-id';

export const Modal: FC<PropTypes> = ({ onClose, title, children }) => {
    const [ isMounted, setMounted ] = useState(false);
    const [ step, setStep ] = useState(0);

    const formTitles = [ 'Report a Scam', 'Report a Scam', 'Report Submitted' ];
    const formTexts = [
        'Help keep the web safe by reporting scams. Share the details below, and let\'s work together for a secure online space!',
        'Would you like to receive updates on the resolution of this report?',
        'Your report has been successfully submitted. Thank you for taking the initiative to make the web safer!',
    ];

    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID });
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleWrapperClick = (event: MouseEvent) => {
            const { target } = event;

            if (target instanceof Node && rootRef.current === target) {
                onClose?.();
            }
        };
        const handleEscapePress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose?.();
            }
        };

        window.addEventListener('click', handleWrapperClick);
        window.addEventListener('keydown', handleEscapePress);

        return () => {
            window.removeEventListener('click', handleWrapperClick);
            window.removeEventListener('keydown', handleEscapePress);
        };
    }, [ onClose ]);


    const handleClose: MouseEventHandler<HTMLButtonElement>
    = useCallback(() => {
        onClose?.();
    }, [ onClose ]);

    useEffect(() => {
        if (step !== 2) {
            return;
        }
        let timerId = setTimeout(() => {
            onClose?.();
        }, 5000);

        return () => {
            clearTimeout(timerId);
        };
    }, [ step ]);

    return (
        isMounted
            ? (
                <Portal id = { MODAL_CONTAINER_ID }>
                    <S.Overlay
                        ref = { rootRef }>
                        <S.FormWrapper>
                            <S.CloseBtn
                                type = 'button'
                                onClick = { handleClose }>
                                <CloseIcon />
                            </S.CloseBtn>

                            <S.Form onSubmit = { (event) => event.preventDefault() }>
                                {step < 2 ? <WarningIcon /> : <SuccessIcon />}
                                <S.Title>{formTitles[ step ]}</S.Title>
                                <S.Text>{formTexts[ step ]}</S.Text>
                                {step < 2 && <S.Divider />}
                                <S.StepWrapper $display = { step === 0 }><Step1 setStep = { setStep } /></S.StepWrapper>
                                <S.StepWrapper $display = { step === 1 }><Step2 setStep = { setStep } /></S.StepWrapper>
                                {step === 2 && <S.Button onClick = { onClose }>Close</S.Button>}
                            </S.Form>
                        </S.FormWrapper>
                    </S.Overlay>
                </Portal>
            )
            : null
    );
};

