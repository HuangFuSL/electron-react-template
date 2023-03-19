import React from 'react';
import logo from './static/img/logo.svg';
import iTypeScript from './static/img/typescript.ico';
import iElectron from './static/img/electron.ico';
import iReact from './static/img/react.ico';
import iMUI from './static/img/mui.ico';
import iFontAwesome from './static/img/fontawesome.ico';
import './static/css/App.css';
import { Avatar, Chip } from '@mui/material';

function AppMain() {
    const icons = {
            TypeScript: iTypeScript,
            Electron: iElectron,
            React: iReact,
            MUI: iMUI,
            FontAwesome: iFontAwesome
        },
        newNodes = [];
    for (const item in icons) {
        newNodes.push(
            <Chip
                avatar={<Avatar src={icons[item]} />}
                label={item}
                variant="outlined"
                style={{ color: 'inherit', margin: '0.5rem' }}
            />
        );
    }
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <div>
                    <ol>
                        <li>
                            <span>Run </span>
                            <code>npm start</code>
                            <span> to preview GUI in web browser.</span>
                        </li>
                        <li>
                            <span>Run </span>
                            <code>npm run lint</code>
                            <span> to perform a style check.</span>
                        </li>
                        <li>
                            <span>Run </span>
                            <code>npm run test</code>
                            <span> to perform unit tests.</span>
                        </li>
                        <li>
                            <span>Run </span>
                            <code>npm run launch</code>
                            <span> to launch the application.</span>
                        </li>
                        <li>
                            <span>Run </span>
                            <code>npm run dist</code>
                            <span> to build the application.</span>
                        </li>
                    </ol>
                </div>
                <div style={{ display: 'flex' }}>{newNodes}</div>
            </header>
        </div>
    );
}

export default AppMain;
