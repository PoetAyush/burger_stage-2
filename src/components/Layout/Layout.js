import React from 'react';

import Auxilary from '../../hoc/Auxilary.JS';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer' ;

const layout = ( props ) => (
    <Auxilary>
        <Toolbar />

        <SideDrawer/>



        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilary>
);

export default layout;