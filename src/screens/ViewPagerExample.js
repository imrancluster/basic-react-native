import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import ViewPager from "@react-native-community/viewpager";


class ViewPagerExample extends Component {
  render() {
    return (
        <ViewPager
        style={styles.viewPager}
        initialPage={0}
        >
        <View key="1">
          <Text>First page</Text>
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
        <View key="2">
          <Text>Third page</Text>
        </View>
      </ViewPager>
    )
  }
}

export default ViewPagerExample;

const styles = StyleSheet.create({
    viewPager: {
      flex: 1
    },
  })