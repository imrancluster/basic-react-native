import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList
} from "react-native"
 
import Header from 'components/Header'
import RestaurantRow from 'components/RestaurantRow'
import axios from 'axios'

export default class App extends Component {

  state = {
    search: null,
    restaurants: [],
    response: []
  }

  componentDidMount() {

    axios.get('http://d8oauthrest.kbflourmills.com/api/v1/restaurants?_format=json')
      .then(result => this.setState({ restaurants: result.data }))
      .catch(function(error) {
        console.log('Error: ' + error.message);
      });
  }

  render() {

    // console.log("Search: ", this.state.search)

    return (
      <View style={{
        flex: 1
      }}>
        
        <Header />

        <TextInput 
        style={styles.input} 
        placeholder='Live Search'
        onChangeText={ text => {
          this.setState({ search: text})
        }}
        value={this.state.search}
         />

         <FlatList 
          data={
            this.state.restaurants.filter(place => {
              return !this.state.search || 
              place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            })
          }
          renderItem={({item, index}) => 
            <RestaurantRow place={item} index={index} />
          }
          keyExtractor={item => item.name}
          initialNumToRender={10}
         /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5'
  }
})