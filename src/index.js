import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// route
import RoutePages from 'routes/RoutePages';

// component
import Header from 'components/Header';

// style
import GlobalStyle from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />

    <BrowserRouter>
      <Header />
      <RoutePages />
    </BrowserRouter>
  </React.StrictMode>
);