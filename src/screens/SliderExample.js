import React, { Component } from 'react'

import {
    View,
    Text
} from 'react-native'

import Slider from '@react-native-community/slider';


class SliderExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 50,
        };
    }

    change(value) {
        this.setState(() => {
          return {
            value: parseFloat(value),
          };
        });
    }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Text>Slider Example</Text>

        <Text style={{fontSize: 50, textAlign: 'center'}}>{String(this.state.value)}</Text>
        <Slider
          step={1}
          maximumValue={100}
          onValueChange={this.change.bind(this)}
          value={this.state.value}
        />
      </View>
    )
  }
}

export default SliderExample;
