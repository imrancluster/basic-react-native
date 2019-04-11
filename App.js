import React, {Component} from 'react';

import { 
  createStackNavigator, 
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'

import SplashScreen from 'react-native-splash-screen'

import RestaurantList from 'components/RestaurantList'
import RestaurantInfo from 'components/RestaurantInfo'
import About from 'components/About'
import AddReview from 'components/AddReview'

import Settings from 'screens/Settings'


const List = createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#0066CC',
      color: '#FFF'
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
        color: '#FFF'
    },
  }
});

const Tabs = createBottomTabNavigator({
  List: { screen: List },
  About: { screen: About }
}, {
  defaultNavigationOptions: ({ navigation }) =>  {
    return {
      tabBarIcon: ({ tintColor }) => {
        const route = navigation.state.routeName
        const name = {
          'List': 'list',
          'About': 'info-circle'
        }[route]
        return <Icon name={name} color={tintColor} size={22} />
      },
      tabBarOptions: {
        activeBackgroundColor: '#E6F0FA'
      }
    }
  }
})

const ModalNavigation = createStackNavigator({
  Tabs: { screen: Tabs },
  AddReview: { screen: AddReview }
}, {
  mode: 'modal',
  headerMode: 'none',
  defaultNavigationOptions: {
    gesturesEnabled: false 
  }
})

// gesturesEnabled: false 
// from iphone modal can scroll down. gesturesEnabled: false deny that system

// Drawer Navigation
const AppDrawerNavigation = createDrawerNavigator({
  Home: { screen: ModalNavigation },
  Settings: { screen: Settings }
})

const AppNavigationInitiated = createAppContainer(AppDrawerNavigation);

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return <AppNavigationInitiated />
  }
}