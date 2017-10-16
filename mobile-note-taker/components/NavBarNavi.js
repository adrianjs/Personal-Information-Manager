import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';

export class NavBarNavi extends React.Component {

  constructor(props){
      super();
  }

  render() {
    return (
      <NavBar>
        <NavButton onPress={this.props.showDrawer}>
          <NavButtonText>
            {"Ξ"}
          </NavButtonText>
        </NavButton>
        <NavTitle>
          {"Manager Title"}
        </NavTitle>
        <NavButton />
        
      </NavBar>
    );
  }
}