import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image
} from 'react-native'

import { 
  createStackNavigator, 
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'

import SplashScreen from 'react-native-splash-screen'

import RestaurantList from 'components/RestaurantList'
import RestaurantInfo from 'components/RestaurantInfo'
import About from 'components/About'
import AddReview from 'components/AddReview'

import Settings from 'screens/Settings'
import NavigationDrawerStructure from 'components/NavigationDrawerStructure';
import SliderExample from './src/screens/SliderExample';




const List = createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: '#0066CC',
      color: '#FFF'
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
        color: '#FFF'
    },
  })
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

// Settings Drawer Item
const Settings_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

// SliderExample Drawer Item
const SliderExample_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  SliderExample: {
    screen: SliderExample,
    navigationOptions: ({ navigation }) => ({
      title: 'Slider Example',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

// Custom Drawer Componnents
const CustomDrawerComponent = (props) => {
  return(
    <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Image 
        source={require('images/logo.png')} 
        style={{height: 120, width: 120, borderRadius: 60}}  
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
  )
}

// Drawer Navigation
const AppDrawerNavigation = createDrawerNavigator({
  Home: { screen: ModalNavigation },
  Settings: { 
    screen: Settings_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings 2',
      drawerIcon: ({ tintColor }) => (
        <Icon name="cog" color={tintColor} size={22} />
      ),
    }, 
  },
  SliderExample: {
    screen: SliderExample_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Slider Example',
      drawerIcon: ({ tintColor }) => (
        <Icon name="slideshare" color={tintColor} size={22} />
      ),
    },
  }
}, {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: 'orange'
  }
});

const AppNavigationInitiated = createAppContainer(AppDrawerNavigation);

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return <AppNavigationInitiated />
  }
}