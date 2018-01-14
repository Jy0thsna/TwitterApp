import React, { Component } from 'react';
import HomeScreen from './src/Timeline/HomeScreen.js';
import Profile from './src/General/Profile.js';
import Lists from './src/General/ListScreen.js';
import SearchScreen from './src/General/SearchScreen.js';
import SearchTab from './src/Timeline/SearchScreen.js';
import Notifications from './src/General/NotificationScreen.js';
import Messages from './src/General/MessageScreen.js';
import Moments from './src/General/Moments.js';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import SideBar from './src/SideMenu/SideMenu.js';

import { ScrollView, Text } from 'react-native';
import TabBarComponent from './src/General/CustomTab.js';

//creating Tabnavigator for mainscreen and passing custom tabbar 
const HomeScreenTab = TabNavigator({
  Home: {screen: HomeScreen},
  Search: { screen: SearchTab},
  Notifications: {screen: Notifications}, 
  Messages: {screen: Messages},
  },{
    tabBarComponent: props => (<TabBarComponent{...props} />), 
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'grey',
    activeBackgroundColor: "#fff",
    inactiveBackgroundColor: "#fff",
    showIcon: true,
    showLabel: false,
    },
 
  
} );


//creating drawernavigator for mainscreen 
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreenTab },
    Profile: { screen: Profile},
    Lists: { screen: Lists },
    Moments: { screen: Moments },
    Highlights: { screen: Lists },
    SearchScreen: {screen: SearchScreen}
  },
  {
    // passing route info as props to the SideMenu component 
    contentComponent: props => <SideBar {...props} />
  }
);

export default HomeScreenRouter;