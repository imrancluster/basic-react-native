import React, { Component } from 'react'

import {
    View,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'


class Settings extends Component {

    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
            <Icon name={'settings'} color={tintColor} size={22} />
        ),
    }

  render() {
    return (
      <View>
        <Text>Settings Screen</Text>
      </View>
    )
  }
}

export default Settings;
