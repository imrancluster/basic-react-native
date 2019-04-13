import React, { Component } from 'react'

import {
    View,
    TouchableOpacity,
    Image
} from 'react-native'

class NavigationDrawerStructure extends Component {

    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}


export default NavigationDrawerStructure;