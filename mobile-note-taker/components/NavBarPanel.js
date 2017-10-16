import Drawer from 'react-native-drawer';
import React, {Component} from 'react';
import {Text,View} from 'react-native';
import NavBarContent from './NavBarContent.js'

export class NavBarPanel extends React.Component{

    constructor(props){
        super();
        this.openNavBarPanel = this.openNavBarPanel.bind(this);
        this.closeNavBarPanel = this.openNavBarPanel.bind(this);
    }

    closeNavBarPanel = () => {
        this._drawer.close()
    };
    openNavBarPanel = () => {
        this._drawer.open()
    };

    render()
    {
        
        return (
            //todo add changing mechanism. Change item. 
            <Drawer 
            open={this.props.open}
            type="displace"
            content={<NavBarContent changeView={this.props.changeView}/>}
            ref = {(ref) => this._drawer = ref}
            styles ={drawerStyle.layout}
            tapToClose={true}
            openDrawerOffset={0.0}
            panCloseMask={0.0}
            closedDrawerOffset={0} 
            tweenDuration={0}
            >
            </Drawer>
          );
    }
}

const drawerStyle = StyleSheet.create({
    layout: {
        
    }


});