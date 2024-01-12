// Core
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

// Tools
import { useDispatch } from '../../../tools/hooks';

// Thunk
import { fetchScamCheck } from './fetchScamcheck';
import { fetchScreenshot } from './fetchScreenshot';
import { fetchScreenshotFullsize } from './fetchScreenshotfullsize';

// Types
import * as types from '../types';

// Reducers
export const extraReducers = (builder: ActionReducerMapBuilder<types.ScamCheckState>) => {
    builder /* CASES */
        .addCase(fetchScamCheck.pending, (/* state => */state) => {
            state.isLoading = true;
        })
        .addCase(fetchScamCheck.fulfilled, (/* state => */state, action) => {
            const server = action.payload?.server;
            const whois = action.payload?.whois;
            const code = action.payload?.code;
            const domain = action.payload?.domain;

            state.scamCheck.domain = `${domain?.subdomain}.${domain?.domain}.${domain?.tld}` || '-';
            // state.scamCheck.lustUpdate = (whois?.json_format[ '>>> Last update of WHOIS database' ] || '').split('<')[ 0 ].trim() || '-';
            state.scamCheck.name = code?.title || '-';
            state.scamCheck.websiteText = code?.text || '-';
            // Domain
            state.scamCheck.Domain.registrar = whois?.parsed?.registrar?.name || '-';
            state.scamCheck.Domain.ownerName = server?.whois?.json_format?.NetName || '-';
            state.scamCheck.Domain.registrationDate = whois?.parsed?.date?.registration_date || '-';
            // Ip
            state.scamCheck.Ip.ip = server?.ip || '-';
            state.scamCheck.Ip.country = server?.whois?.json_format?.Country || '-';
            state.scamCheck.Ip.registrant = server?.whois?.json_format?.OrgName || '-';
            state.isLoading = false;
        })
        .addCase(fetchScamCheck.rejected, (/* state => */state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        });
    builder /* CASES */
        .addCase(fetchScreenshot.pending, (/* state => */state) => {
            state.scamCheck.screenshots.screenshot.isLoading = true;
        })
        .addCase(fetchScreenshot.fulfilled, (/* state => */state, action) => {
            state.scamCheck.screenshots.screenshot.screenshot = action.payload;
            state.scamCheck.screenshots.screenshot.isLoading = false;
        })
        .addCase(fetchScreenshot.rejected, (/* state => */state, action) => {
            state.scamCheck.screenshots.screenshot.error = action.error.message;
            state.scamCheck.screenshots.screenshot.isLoading = false;
        });
    builder /* CASES */
        .addCase(fetchScreenshotFullsize.pending, (/* state => */state) => {
            state.scamCheck.screenshots.screenshot_fullsize.isLoading = true;
        })
        .addCase(fetchScreenshotFullsize.fulfilled, (/* state => */state, action) => {
            state.scamCheck.screenshots.screenshot_fullsize.screenshot = action.payload;
            state.scamCheck.screenshots.screenshot_fullsize.isLoading = false;
        })
        .addCase(fetchScreenshotFullsize.rejected, (/* state => */state, action) => {
            state.scamCheck.screenshots.screenshot_fullsize.error = action.error.message;
            state.scamCheck.screenshots.screenshot_fullsize.isLoading = false;
        });
};

// Hook
export const useScamcheckThunk = () => {
    const dispatch = useDispatch();
    const fetchAllScamCheckData = (payload: string) => {
        void dispatch(fetchScamCheck(payload));
        void dispatch(fetchScreenshot(payload));
        void dispatch(fetchScreenshotFullsize(payload));
    };

    return {
        fetchScamCheck: (payload: string) => fetchAllScamCheckData(payload),
    };
};
