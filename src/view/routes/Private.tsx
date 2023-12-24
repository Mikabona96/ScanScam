// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';
import { LandingPageLayout } from '@/layouts';

export const Private: FC = () => {
    return (
        <Routes>
            <Route element = { <LandingPageLayout /> }>
                <Route
                    element = { <Pages.Root /> }
                    path = { book.ROOT }
                />
                <Route
                    element = { <Pages.Blog /> }
                    path = { book.BLOG }
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
