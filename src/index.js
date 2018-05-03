import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// the following is required and caches your assets and other files when the user is offline or there's a slow connection
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
