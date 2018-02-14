import React from 'react';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXrules from '../concepts/JSXrules';
import FriendListApp from '../apps/FriendList/FriendListApp';
import Xkcd from '../apps/xkcd/Xkcd';
import GithubApp from '../apps/github/GithubApp'
import GithubCardAppWithSearch from '../apps/github/GithubCardAppWithSearch'


export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      main: () => <Home />
    },
    {
      path: '/functionalcomponent',
      exact: true,
      main: () => <FunctionalComponentDemo />
    },
    {
      path: '/resources',
      exact: true,
      main: () => <Resources />
    },
    {
      path:'/jsxrules',
      exact: true,
      main: () => <JSXrules />
    },
    {
      path: '/friendslist',
      exact: true,
      main: () => <FriendListApp />
    },
    {
      path: '/xkcdreader',
      exact: true,
      main: () => <Xkcd />
    },
    {
      path: '/gitchub',
      exact: true,
      main: () => <div><GithubApp /> <br /> <GithubCardAppWithSearch /></div>
    }
]