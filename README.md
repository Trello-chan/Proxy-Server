# Trello-chan: Proxy Component

[![Node version](https://img.shields.io/badge/node-v8.12.0-blue.svg)](http://nodejs.org/download/)
[![NPM version](https://img.shields.io/badge/npm-6.4.1-blue.svg)](https://www.npmjs.com/get-npm/)
![React version](https://img.shields.io/badge/react-v16.6.3-aqua.svg)
![PostgreSQL version](https://img.shields.io/badge/PostgreSQL-v10.5-blue.svg)
![Webpack version](https://img.shields.io/badge/webpack-v4.28.0-brown.svg)

Single-page mock of Trello with components broken up into its own microservice.  All the components are brought together by this Proxy Server

## Preview
Preview of initial and subsequent load times of all 3 services on a single html page

![2019-06-07 Proxy demo](ProxyDemo.gif)

## Features
- All 3 services are compressed and bundled via webpack with code-splitting to optimize page load speed
- Each bundle has an expiration date of 1 year, to minimize need to re-download bundles on subsequent visits
- All API requests will be sent to proxy server, which will then redirect to the appropriate API, which decouples the services and makes refactoring easier.
