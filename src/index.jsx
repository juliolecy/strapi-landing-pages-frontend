import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global.styles';
import Home from './templates/Home';
import { theme } from './styles/theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route to="*" component={Home} />
        </Switch>
        <GlobalStyles />
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
