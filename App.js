import * as React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {AppTabNavigator} from './AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Facebook from './screens/Facebook';
import Instagram from './screens/Instagram';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  Facebook: {screen:Facebook},
  BottomTab:{screen:AppTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator);

