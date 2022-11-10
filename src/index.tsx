import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { loadableReady } from '@loadable/component';
import { App } from './App';
import { initStore } from 'store/store';
import { Provider } from 'react-redux';
import { isServer } from './utils';

import 'style/main.scss';

const store = initStore(!isServer && window.__PRELOADED_STATE__ && window.__PRELOADED_STATE__);

if (module.hot) {
  module.hot.accept(['store/store', 'store/rootReducer'], async () => {
    const { createReducer } = await import('store/rootReducer');
    store.replaceReducer(createReducer());
  });
}

const indexJSX
  = <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </StrictMode>;

const container = document.getElementById('root');

// eslint-disable-next-line no-undef
if (NO_SSR) {
  createRoot(container!).render(indexJSX);
} else {
  loadableReady(() => {
    hydrateRoot(container!, indexJSX);
  });
}
