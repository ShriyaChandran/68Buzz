import * as React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './screens/Facebook';
import Instagram from './screens/Instagram';

export const AppTabNavigator = createBottomTabNavigator({
    Facebook:{
        screen: Facebook,
        navigationOptions: {
            tabBarLabel: 'Facebook'
        }
    },

    Instagram:{
        screen:Instagram,
        navigationOptions:{
            tabBarLabel:'Instagram'
        }
    }
});