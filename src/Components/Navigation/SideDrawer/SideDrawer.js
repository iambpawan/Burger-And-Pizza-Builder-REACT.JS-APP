import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.module.css';
import Auxliary from '../../../hoc/auxliary'
import Backdrop from '../../UI/BackDrop/BackDrop'
const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxliary>
    );
};

export default sideDrawer;