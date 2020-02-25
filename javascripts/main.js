//import statements always go at the top

import store from './components/store.js';
// only thing in main.js file
const init = () => {
    store.makeStore();
};

init();