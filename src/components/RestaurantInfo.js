import React, { Component } from 'react'

import {
    View,
    Text
} from 'react-native'

export default class RestaurantInfo extends Component {

    static navigationOptions = {
        title: "Restaurant Info",
        headerStyle: {
            backgroundColor: '#0066CC',
            color: '#FFF'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            color: '#FFF'
        }
    }
   
    
  render() {
    return (
      <View>
        <Text>Restaurant Info1</Text>
      </View>
    )
  }
}
