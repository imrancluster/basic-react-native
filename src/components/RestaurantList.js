import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native'

import axios from 'axios' 
import Header from 'components/Header'
import RestaurantRow from 'components/RestaurantRow'

// React native will automatically pic the @2x @3x
import PizzaImage from 'images/pizza.png';

export default class RestaurantList extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    search: null,
    restaurants: [],
    response: [],
    loading: false
  }

  componentDidMount() {
    
    this.setState({ loading: true })

    axios.get('http://d8oauthrest.kbflourmills.com/api/v1/restaurants?_format=json')
      .then(
        result => this.setState({ restaurants: result.data, loading: false }))
      .catch(function(error) {
        this.setState({ loading: false })
        console.log('Error: ' + error.message);
      });

  }

  render() {

    // console.log("Search: ", this.state.search)
    console.log("Restaurants: ", this.state.restaurants)

    return (
      <View style={{
        flex: 1,
        backgroundColor: '#ffffff'
      }}>
        
        <View style={{
          marginTop: 30,
          alignItems: 'center'
        }}>
          <Image source={PizzaImage} />
        </View>
        
        <Header />

        <TextInput 
        style={styles.input} 
        placeholder='Live Search'
        onChangeText={ text => {
          this.setState({ search: text})
        }}
        value={this.state.search}
         />

         
         {
          this.state.loading && <ActivityIndicator size="large" color="#0066CC" style={{padding: 10}} />
         }

         <FlatList 
          data={
            this.state.restaurants.filter(place => {
              return !this.state.search || 
              place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            })
          }
          renderItem={({item, index}) => 
            <RestaurantRow 
            place={item} 
            index={index} 
            navigation={this.props.navigation}
            />
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