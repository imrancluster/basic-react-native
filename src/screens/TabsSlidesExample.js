import React, { Component } from 'react'

import { StyleSheet, View, Text } from 'react-native'

import {
    PagerTabIndicator,
    IndicatorViewPager,
    PagerTitleIndicator,
    PagerDotIndicator,
  } from 'rn-viewpager';

class TabsSlidesExample extends Component {

    _renderTitleIndicator = () => {
        return <PagerTitleIndicator titles={['One', 'Two', 'Three']} />;
      }
      _renderDotIndicator = () => {
        return <PagerDotIndicator pageCount={3} />;
      }
      _renderTabIndicator = () => {
        let tabs = [
          {
            text: 'One',
          },
          {
            text: 'Two',
          },
          {
            text: 'Three',
          },
          {
            text: 'Four',
          },
        ];
        return <PagerTabIndicator tabs={tabs} />;
      }

  render() {
    return (
        <View style={{ flex: 1, marginTop: 30 }}>
        {/*Example of Dot Indicator*/}
        <IndicatorViewPager
          style={{ height: 200 }}
          indicator={this._renderDotIndicator()}>
          {/*_renderDotIndicator() will return the PagerDotIndicator*/}
          <View
            style={{
              backgroundColor: '#C70039',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>One</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FF5733',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Two</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFC300',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Three</Text>
          </View>
        </IndicatorViewPager>
        {/*Example of Title Indicator*/}
        <IndicatorViewPager
          style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}
          indicator={this._renderTitleIndicator()}>
          {/*_renderTitleIndicator() will return the PagerTitleIndicator*/}
          <View
            style={{
              backgroundColor: '#C70039',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>One</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FF5733',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Two</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFC300',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Three</Text>
          </View>
        </IndicatorViewPager>
        {/*Example of Tab Indicator*/}
        <IndicatorViewPager
          style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}
          indicator={this._renderTabIndicator()}>
          {/*_renderTabIndicator() will return the PagerTabIndicator*/}
          <View
            style={{
              backgroundColor: '#C70039',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>One</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FF5733',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Two</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFC300',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Three</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFC345',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Four</Text>
          </View>
        </IndicatorViewPager>
      </View>
    )
  }
}

export default TabsSlidesExample;
