// Core
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

// Tools
import { useDispatch } from '../../../tools/hooks';

// Thunk
import { fetchReportForDomain } from './fetchReportForDomain';

// Types
import * as types from '../types';

// Reducers
export const extraReducers = (builder: ActionReducerMapBuilder<types.ReportForDomainState>) => {
    builder /* CASES */
        .addCase(fetchReportForDomain.fulfilled, (/* state => */__, action) => {
            return action.payload;
        });
};

// Hook
export const useReportForDomainThunk = () => {
    const dispatch = useDispatch();

    return {
        fetchReportForDomain: (payload: types.ReportPayload) => void dispatch(fetchReportForDomain(payload)),
    };
};
