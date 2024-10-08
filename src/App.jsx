import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import AppContent from './AppContent';

const App = () => (
  <Provider store={store}>
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>
      <AppContent />
    </div>
  </Provider>
);

export default App;
