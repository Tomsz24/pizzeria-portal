import React from 'react';
import PropsTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
  const { component } = styles;
  return (
    <div className={component}>
      <AppBar>
        <Container maxWidth="lg">
          <ToolBar disableGutters>
            <PageNav />
          </ToolBar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <ToolBar />
        {children}
      </Container>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropsTypes.node,
};
export default MainLayout;