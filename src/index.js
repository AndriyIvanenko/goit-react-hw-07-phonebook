import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { App } from 'components/App/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
// import { Loader } from './components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
