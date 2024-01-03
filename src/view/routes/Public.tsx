// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';
import { LandingPageLayout, WebAppLayout } from '@/layouts';

export const Public: FC = () => {
    return (
        <Routes>
            <Route element = { <LandingPageLayout /> }>
                <Route
                    element = { <Pages.Root /> }
                    path = { book.ROOT }
                />
                <Route
                    element = { <Pages.Blog /> }
                    path = { `${book.BLOG}/:id?` }
                />
            </Route>
            <Route element = { <WebAppLayout /> }>
                <Route
                    element = { <Pages.ScamCheck /> }
                    path = { book.SCAM_CHECK }
                />
            </Route>
            {/* MarkerGen route */}
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.ROOT }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
