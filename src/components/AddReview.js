import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class AddReview extends Component {

    close = () => {
        this.props.navigation.goBack()
    }

  render() {
    return (
      <View style={styels.root}>
        <TouchableOpacity 
        style={styels.button}
        onPress={this.close}
        >
            <Icon name="close" size={30} color="#0066CC" />
        </TouchableOpacity>

        <Text tyle={styels.addReview}>Add Review</Text>
      </View>
    )
  }
}

const styels = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20
    },
    button: {
        paddingHorizontal: 10
    },
    addReview: {
        fontSize: 25,
        color: '#444',
        textAlign: 'center',
        margin: 20
    }
})
