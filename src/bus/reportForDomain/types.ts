// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type ReportPayload = {
    url:             string,
    comment:         string,
    email:           string,
    source:          string,
    contact_allowed: boolean,
    tags:            null,
};

// State
export type ReportForDomain = Array<any>
export type ReportForDomainState = ReportForDomain | null

// Contracts
export type BaseContact<T = any> = CaseReducer<ReportForDomainState, PayloadAction<T>>
