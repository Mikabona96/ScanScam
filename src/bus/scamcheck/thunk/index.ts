// Core
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

// Tools
import { useDispatch } from '../../../tools/hooks';

// Thunk
import { fetchScamCheck } from './fetchScamcheck';
import { fetchScreenshot } from './fetchScreenshot';
import { fetchScreenshotFullsize } from './fetchScreenshotfullsize';
import { fetchDomainChartInfo } from './fetchDomainChartInfo';
import { fetchWebsiteChartInfo } from './fetchWebsiteChartInfo';
import { fetchStatus } from './fetchStatus';

// Types
import * as types from '../types';

// Reducers
export const extraReducers = (builder: ActionReducerMapBuilder<types.ScamCheckState>) => {
    builder /* CASES */
        .addCase(fetchScamCheck.pending, (/* state => */state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchScamCheck.fulfilled, (/* state => */state, action) => {
            state.isLoading = false;
            const server = action.payload?.server;
            const whois = action.payload?.whois;
            const code = action.payload?.code;
            const domain = action.payload?.domain;

            state.scamCheck.domain = `${domain?.subdomain}.${domain?.domain}.${domain?.tld}` || '-';
            try {
                const isLastUpdateExists = whois?.json_format[ '>>> Last update of WHOIS database' ];
                if (isLastUpdateExists) {
                    state.scamCheck.lastUpdate = (whois?.json_format[ '>>> Last update of WHOIS database' ]).split('>>>')[ 0 ] || '-';
                }
            } catch (error) {
                return;
            }
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
            state.error = null;
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
    builder /* CASES */
        .addCase(fetchDomainChartInfo.fulfilled, (/* state => */state, action) => {
            state.chart.domain = Number(action.payload.scamScore.toFixed(3));
        });
    builder /* CASES */
        .addCase(fetchWebsiteChartInfo.fulfilled, (/* state => */state, action) => {
            state.chart.website = Number(action.payload.scamScore.toFixed(3));
        });
    builder /* CASES */
        .addCase(fetchStatus.fulfilled, (/* state => */state, action) => {
            state.scamCheck.status = action.payload.status;
        })
        .addCase(fetchStatus.rejected, (/* state => */state) => {
            state.scamCheck.status = null;
        });
};

// Hook
export const useScamcheckThunk = () => {
    const dispatch = useDispatch();
    const fetchAllScamCheckData = (payload: string) => {
        void dispatch(fetchScamCheck(payload));
        void dispatch(fetchScreenshot(payload));
        void dispatch(fetchScreenshotFullsize(payload));
        void dispatch(fetchDomainChartInfo(payload));
        void dispatch(fetchWebsiteChartInfo(payload));
        void dispatch(fetchStatus(payload));
    };

    return {
        fetchScamCheck: (payload: string) => fetchAllScamCheckData(payload),
    };
};
