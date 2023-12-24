// Core
import { lazy } from 'react';

// MarkerGen pages
export const Blog = lazy(() => import(/* webpackChunkName: "Blog" */ './Blog'));
export const Root = lazy(() => import(/* webpackChunkName: "Root" */ './Root'));
