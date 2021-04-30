import ReactDOM from 'react-dom';
import React from 'react';

// Constants
import { IS_DEVELOPMENT } from './constants/environment';

// Components
import App, { HotApp } from './components/App.jsx';

const render = () => {
    ReactDOM.render(IS_DEVELOPMENT ? (
        <HotApp/>
    ) : (
        <App/>
    ), document.querySelector('#root'));
};

render();
