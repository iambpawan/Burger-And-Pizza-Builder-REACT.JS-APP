import React, { Component } from 'react';
import Auxliary from '../../hoc/auxliary';
import Classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = { showSlideDrawer: false }

    slideDrawerClosedHandler = () => {
        this.setState({ showSlideDrawer: false });
    }
    slideDrawerToggleClickHandler=()=>{
        this.setState((prevState)=>{
            return{showSlideDrawer:!prevState.showSlideDrawer};
        });
    }
    render() {

        return (<Auxliary>
            <Toolbar  drawerToggleClicked={this.slideDrawerToggleClickHandler}/>
            <Sidedrawer open={this.state.showSlideDrawer} closed={this.slideDrawerClosedHandler} />
            <main className={Classes.content}>
                {this.props.children}
            </main>
        </Auxliary>)
    }
}

export default Layout;