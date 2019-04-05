import React, {Component} from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation'

import RestaurantList from 'components/RestaurantList'
import RestaurantInfo from 'components/RestaurantInfo'

console.log('debuging....')

const MainNavigator = createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
})

const App = createAppContainer(MainNavigator);

export default App;