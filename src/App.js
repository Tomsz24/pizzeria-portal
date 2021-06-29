import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Login from '../src/components/views/Login/Login';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/WaiterContainer';
import BookingInfo from '../src/components/views/BookingInfo/BookingInfo';
import NewBooking from '../src/components/views/NewBooking/NewBooking';
import NewEvent from '../src/components/views/NewEvent/NewEvent';
import EventsInfo from '../src/components/views/EventsInfo/EventsInfo';
import NewOrder from '../src/components/views/NewOrder/NewOrder';
import OrderInfo from '../src/components/views/OrderInfo/OrderInfo';
import Homepage from '../src/components/views/Homepage/Homepage';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route
                exact
                path={'/'}
                component={Homepage}
              />
              <Route
                exact
                path={'/login'}
                component={Login}
              />
              <Route
                exact
                path={'/tables'}
                component={Tables}
              />
              <Route
                exact
                path={'/tables/booking/new'}
                component={NewBooking}
              />
              <Route
                exact
                path={'/tables/booking/:id'}
                component={BookingInfo}
              />
              <Route
                exact
                path={'/tables/events/new'}
                component={NewEvent}
              />
              <Route
                exact
                path={'/tables/events/:id'}
                component={EventsInfo}
              />
              <Route
                exact
                path={'/waiter'}
                component={Waiter}
              />
              <Route
                exact
                path={'/waiter/order/new'}
                component={NewOrder}
              />
              <Route
                exact
                path={'/waiter/order/:id'}
                component={OrderInfo}
              />
              <Route
                exact
                path={'/kitchen'}
                component={Kitchen}
              />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
