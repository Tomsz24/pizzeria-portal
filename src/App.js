import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './components/layout/Homepage/Homepage';
import Login from './components/layout/Login/Login';
import Tables from './components/layout/Tables/Tables';
import Waiter from './components/layout/Waiter/Waiter';
import Kitchen from './components/layout/Kitchen/Kitchen';
import { StylesProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    // secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={'/'} component={Homepage} />
              <Route exact path={'/login'} component={Login} />
              <Route exact path={'/kitchen'} component={Kitchen} />
              <Route exact path={'/waiter'} component={Waiter} />
              <Route exact path={'/tables'} component={Tables} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
